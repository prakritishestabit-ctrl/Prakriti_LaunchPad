import pandas as pd
import numpy as np
import json
import joblib
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split, StratifiedKFold, cross_validate
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.neural_network import MLPClassifier
from xgboost import XGBClassifier
from sklearn.metrics import confusion_matrix

# Load dataset

DATA_PATH = "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_3/src/data/processed/final.csv"
df = pd.read_csv(DATA_PATH)

X = df.drop(columns=["Survived"])
y = df["Survived"]

# Train-test split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# Models

models = {
    "LogisticRegression": LogisticRegression(
    penalty="l2",
    C=0.5,
    solver="liblinear",
    max_iter=1000
    ),
    "RandomForest": RandomForestClassifier(
    n_estimators=300,
    max_depth=6,
    min_samples_leaf=5,
    random_state=42
    ),
    "XGBoost": XGBClassifier(
    n_estimators=500,
    learning_rate=0.03,
    max_depth=3,
    min_child_weight=5,
    subsample=0.9,
    colsample_bytree=0.9,
    gamma=0.1,
    reg_lambda=1.0,
    random_state=42,
    eval_metric="logloss"
),
    "NeuralNetwork": MLPClassifier(
    hidden_layer_sizes=(128, 64, 32),
    alpha=0.001,
    max_iter=1000,
    random_state=42
    ),
}

# Cross-validation setup

cv = StratifiedKFold(
    n_splits=5,
    shuffle=True,
    random_state=42
)

scoring = {
    "accuracy": "accuracy",
    "precision": "precision",
    "recall": "recall",
    "f1": "f1",
    "roc_auc": "roc_auc",
}

results = {}

# Train & evaluate models

for name, model in models.items():
    scores = cross_validate(
        model,
        X_train,
        y_train,
        cv=cv,
        scoring=scoring,
        n_jobs=-1
    )

    results[name] = {
        metric: np.mean(scores[f"test_{metric}"])
        for metric in scoring
    }

# Select best model based on ROC-AUC

best_model_name = max(results, key=lambda x: results[x]["roc_auc"])
best_model = models[best_model_name]

best_model.fit(X_train, y_train)

# Save best model


joblib.dump(best_model, "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_3/src/models/best_model.pkl")

# Confusion Matrix

y_pred = best_model.predict(X_test)
cm = confusion_matrix(y_test, y_pred)

plt.figure(figsize=(6, 5))
sns.heatmap(cm, annot=True, fmt="d", cmap="Blues")
plt.title(f"Confusion Matrix - {best_model_name}")
plt.xlabel("Predicted")
plt.ylabel("Actual")
plt.savefig("/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_3/src/evaluation/confusion_matrix.png")
plt.close()

# Save metrics

final_output = {
    "best_model": best_model_name,
    "metrics": results
}

with open("/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_3/src/evaluation/metrics.json", "w") as f:
    json.dump(final_output, f, indent=4)

print("Training completed")
print("Best model:", best_model_name)
