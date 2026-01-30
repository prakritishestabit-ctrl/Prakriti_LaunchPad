import shap
import joblib
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.metrics import confusion_matrix
import seaborn as sns
import numpy as np

# Load data
DATA_PATH = "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_4/src/data/processed/final.csv"
df = pd.read_csv(DATA_PATH)

X = df.drop(columns=["Survived"])

# Load model
model = joblib.load("/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_4/src/models/best_model.pkl")

# SHAP explainer
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X)

# SHAP summary plot
plt.figure()
shap.summary_plot(shap_values, X, show=False)
plt.savefig("/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_4/src/evaluation/shap_summary.png", bbox_inches="tight")
plt.close()

# Feature importance (mean |SHAP|)
importance = abs(shap_values).mean(axis=0)
importance_df = pd.DataFrame({
    "feature": X.columns,
    "importance": importance
}).sort_values(by="importance", ascending=False)

importance_df.to_csv("/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_4/src/evaluation/shap_feature_importance.csv", index=False)

y_true = df["Survived"]
y_pred = model.predict(X)

cm = confusion_matrix(y_true, y_pred)

plt.figure(figsize=(6, 5))
sns.heatmap(
    cm,
    annot=True,
    fmt="d",
    cmap="Reds"
)
plt.xlabel("Predicted")
plt.ylabel("Actual")
plt.title("Error Analysis Heatmap")
plt.savefig("/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_4/src/evaluation/error_heatmap.png")
plt.close()

print("SHAP analysis completed")
