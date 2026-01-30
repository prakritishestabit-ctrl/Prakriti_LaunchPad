import optuna
import json
import joblib
import pandas as pd
import numpy as np

from sklearn.model_selection import StratifiedKFold, cross_val_score
from xgboost import XGBClassifier

# Load dataset
DATA_PATH = "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_4/src/data/processed/final.csv"
df = pd.read_csv(DATA_PATH)

X = df.drop(columns=["Survived"])
y = df["Survived"]

def objective(trial):
    params = {
        "n_estimators": trial.suggest_int("n_estimators", 200, 800),
        "max_depth": trial.suggest_int("max_depth", 2, 6),
        "learning_rate": trial.suggest_float("learning_rate", 0.01, 0.2, log=True),
        "subsample": trial.suggest_float("subsample", 0.6, 1.0),
        "colsample_bytree": trial.suggest_float("colsample_bytree", 0.6, 1.0),
        "gamma": trial.suggest_float("gamma", 0, 0.5),
        "reg_lambda": trial.suggest_float("reg_lambda", 0.5, 5.0),
        "random_state": 42,
        "eval_metric": "logloss"
    }

    model = XGBClassifier(**params)

    cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
    score = cross_val_score(
        model,
        X,
        y,
        cv=cv,
        scoring="roc_auc",
        n_jobs=-1
    ).mean()

    return score


study = optuna.create_study(direction="maximize")
study.optimize(objective, n_trials=40)

# Train best model
best_params = study.best_params
best_model = XGBClassifier(**best_params, random_state=42, eval_metric="logloss")
best_model.fit(X, y)


joblib.dump(best_model, "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_4/src/models/best_model.pkl")

results = {
    "best_score": study.best_value,
    "best_params": best_params
}

with open("Week_6/Day_4/src/tuning/results.json", "w") as f:
    json.dump(results, f, indent=4)

print("Best ROC-AUC:", study.best_value)
print("Best parameters saved")
