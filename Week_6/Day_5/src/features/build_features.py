import pandas as pd
import numpy as np
from pathlib import Path
from sklearn.preprocessing import StandardScaler
import joblib
import json

# Paths
DATA_PATH = Path("/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_2/src/data/processed/final.csv")   
FEATURE_PATH = Path("/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_2/src/features/feature_list.json")              

# Load data
df = pd.read_csv(DATA_PATH)

# Feature engineering
df["IsChild"] = (df["Age"] < 12).astype(int)
df["IsElderly"] = (df["Age"] > 60).astype(int)
df["HighFareFlag"] = (df["Fare"] > df["Fare"].median()).astype(int)
df["FareAgeRatio"] = df["Fare"] / (df["Age"] + 1)

# Label encoding
df["Sex"] = df["Sex"].map({"male": 1, "female": 0})

# # One-hot encoding
df["Embarked_C"] = (df["Embarked"] == "C").astype(int)
df["Embarked_S"] = (df["Embarked"] == "S").astype(int)
df['Embarked_Q'] = (df['Embarked'] == 'Q').astype(int)

# Keep only selected features including target
features = [
    "Sex", "Pclass", "Age", "IsChild", "IsElderly",
    "Fare", "HighFareFlag", "FareAgeRatio",
    "Embarked_C", "Embarked_S", "Embarked_Q", "Survived"
]

df_final = df[features]

# Scale numerical features
numerical_cols = ["Age", "Fare", "FareAgeRatio"]
scaler = StandardScaler()
df_final[numerical_cols] = scaler.fit_transform(df_final[numerical_cols])


df_final.to_csv(DATA_PATH, index=False)

with open(FEATURE_PATH, "w") as f:
    json.dump(features[:-1], f, indent=4)  # exclude target

print("Feature engineering completed. final.csv updated with 10 features")
