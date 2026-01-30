import joblib
import pandas as pd
import matplotlib.pyplot as plt

# Paths
MODEL_PATH = "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_4/src/models/best_model.pkl"
DATA_PATH = "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_4/src/data/processed/final.csv"
OUTPUT_PATH = "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_4/src/evaluation/feature_importance.png"

# Load model & data
model = joblib.load(MODEL_PATH)
df = pd.read_csv(DATA_PATH)

X = df.drop(columns=["Survived"])
feature_names = X.columns

# Extract feature importance
importances = model.feature_importances_

fi_df = pd.DataFrame({
    "feature": feature_names,
    "importance": importances
}).sort_values(by="importance", ascending=False)

# Plot
plt.figure(figsize=(10, 6))
plt.barh(fi_df["feature"], fi_df["importance"])
plt.gca().invert_yaxis()
plt.title("Feature Importance")
plt.xlabel("Importance Score")
plt.tight_layout()
plt.savefig(OUTPUT_PATH, dpi=300)
plt.close()

print("Feature importance saved to:", OUTPUT_PATH)
