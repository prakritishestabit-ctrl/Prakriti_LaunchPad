import pandas as pd
import numpy as np
from pathlib import Path
from sklearn.feature_selection import mutual_info_classif
import json

DATA_PATH = Path("/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_2/src/data/processed/final.csv")
FEATURE_PATH = Path("/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_2/src/features/feature_list.json")

df = pd.read_csv(DATA_PATH)

X = df.drop(columns=["Survived"])
y = df["Survived"]

# Feature selection: Correlation threshold

corr_matrix = X.corr().abs()
upper = corr_matrix.where(np.triu(np.ones(corr_matrix.shape), k=1).astype(bool))
to_drop_corr = [col for col in upper.columns if any(upper[col] > 0.85)]
X_selected = X.drop(columns=to_drop_corr)


# Feature selection: Mutual Information

mi_scores = mutual_info_classif(X_selected, y, discrete_features='auto', random_state=42)
mi_df = pd.DataFrame({"feature": X_selected.columns, "mi_score": mi_scores})
mi_df = mi_df.sort_values(by="mi_score", ascending=False)
top_features = mi_df["feature"].tolist()[:10]


# Save final CSV with selected features

feature_list = {"features": []}
for col in top_features + ["Survived"]:
    if col == "Survived":
        ftype = "target"
    elif df[col].dtype == "object" or df[col].nunique() < 20:
        ftype = "categorical"
    else:
        ftype = "numerical"

    feature_info = {
        "name": col,
        "dtype": str(df[col].dtype),
        "non_null_count": int(df[col].notna().sum()),
        "type": ftype,
        "description": f"Feature: {col}"
    }
    feature_list["features"].append(feature_info)


FEATURE_PATH.parent.mkdir(parents=True, exist_ok=True)
with open(FEATURE_PATH, "w") as f:
    json.dump(feature_list, f, indent=4)  

print(f"Feature selection completed. Top features saved: {top_features}")
