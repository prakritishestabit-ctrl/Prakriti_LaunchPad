import pandas as pd
import json
from pathlib import Path

# Paths
TRAIN_DATA_PATH = Path(
    "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_3/src/data/processed/final.csv"
)
LOG_PATH = Path(
    "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_5/src/logs/prediction_logs.csv"
)
OUTPUT_PATH = Path(
    "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_5/src/monitoring/drift_report.json"
)

NUMERIC_FEATURES = ["Age", "Fare", "FareAgeRatio"]
CATEGORICAL_FEATURES = [
    "Sex", "Pclass", "Embarked_C", "Embarked_S",
    "Embarked_Q", "IsChild", "IsElderly", "HighFareFlag"
]

NUMERIC_DRIFT_THRESHOLD = 0.5     
CATEGORICAL_DRIFT_THRESHOLD = 0.10  
MIN_LIVE_SAMPLES = 30

def detect_drift():
    train_df = pd.read_csv(TRAIN_DATA_PATH)
    
    columns = ['id', 'timestamp', 'model_version', 'Sex', 'Pclass', 'Age', 'IsChild', 'IsElderly', 
               'Fare', 'HighFareFlag', 'FareAgeRatio', 'Embarked_C', 'Embarked_S', 'Embarked_Q', 'Survived']
    log_df = pd.read_csv(LOG_PATH, header=None, names=columns)
    
    log_df = log_df.drop(columns=['id', 'timestamp', 'model_version'])

    
    if len(log_df) < MIN_LIVE_SAMPLES:
        return {
            "warning": f"Only {len(log_df)} live samples. Need at least {MIN_LIVE_SAMPLES} for reliable drift detection."
        }

    drift_report = {}

    
    for feature in NUMERIC_FEATURES:
        train_mean = train_df[feature].mean()
        live_mean = log_df[feature].mean()

        absolute_shift = abs(live_mean - train_mean)
        drift_detected = absolute_shift > NUMERIC_DRIFT_THRESHOLD

        drift_report[feature] = {
            "train_mean": round(train_mean, 3),
            "live_mean": round(live_mean, 3),
            "absolute_shift": round(absolute_shift, 3),
            "drift_detected": drift_detected
        }

    
    for feature in CATEGORICAL_FEATURES:
        train_props = train_df[feature].value_counts(normalize=True).to_dict()
        live_props = log_df[feature].value_counts(normalize=True).to_dict()

        all_categories = set(train_props.keys()).union(live_props.keys())

        drift_detected = False
        prop_shifts = {}

        for cat in all_categories:
            train_val = train_props.get(cat, 0.0)
            live_val = live_props.get(cat, 0.0)

            shift = abs(live_val - train_val)
            prop_shifts[str(cat)] = round(shift, 3)

            if shift > CATEGORICAL_DRIFT_THRESHOLD:
                drift_detected = True

        drift_report[feature] = {
            "train_proportions": {str(k): round(v, 3) for k, v in train_props.items()},
            "live_proportions": {str(k): round(v, 3) for k, v in live_props.items()},
            "proportion_shifts": prop_shifts,
            "drift_detected": drift_detected
        }

    return drift_report


if __name__ == "__main__":
    report = detect_drift()

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, "w") as f:
        json.dump(report, f, indent=4, default=str)

    print("Drift check completed")

    if "warning" in report:
        print(report["warning"])
    else:
        for feature, details in report.items():
            status = "DRIFT" if details["drift_detected"] else "STABLE"
            print(f"{feature}: {status}")
