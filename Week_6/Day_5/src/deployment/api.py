from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np
import uuid
import pandas as pd
from datetime import datetime
import os

MODEL_VERSION = "v1.0"
MODEL_PATH = "/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_6/Day_5/src/models/best_model.pkl"
LOG_PATH = "src/logs/prediction_logs.csv"

# make sure log directory exists
os.makedirs(os.path.dirname(LOG_PATH), exist_ok=True)

# load trained model
model = joblib.load(MODEL_PATH)

app = FastAPI(
    title="Titanic Survival Prediction API",
    version=MODEL_VERSION
)

# input schema
class PassengerInput(BaseModel):
    Sex: int
    Pclass: int
    Age: float
    IsChild: int
    IsElderly: int
    Fare: float
    HighFareFlag: int
    FareAgeRatio: float
    Embarked_C: int
    Embarked_S: int
    Embarked_Q: int

# function to log predictions with proper column names
def log_prediction(log_data: dict):
    df = pd.DataFrame([log_data])

    if not os.path.exists(LOG_PATH):
        df.to_csv(LOG_PATH, index=False)
    else:
        df.to_csv(LOG_PATH, mode="a", header=False, index=False)

@app.get("/")
def health_check():
    return {"status": "API is running", "message": "Titanic model deployment successful"}

@app.post("/predict")
def predict(data: PassengerInput):
    request_id = str(uuid.uuid4())
    timestamp = datetime.utcnow().isoformat()

    # IMPORTANT: feature order must match training data
    features = np.array([[
        data.Sex,
        data.Pclass,
        data.Age,
        data.IsChild,
        data.IsElderly,
        data.Fare,
        data.HighFareFlag,
        data.FareAgeRatio,
        data.Embarked_C,
        data.Embarked_S,
        data.Embarked_Q
    ]])

    prediction = int(model.predict(features)[0])
    probability = float(model.predict_proba(features)[0][1])

    # log with proper feature names (for drift checking later)
    log_data = {
        "request_id": request_id,
        "timestamp": timestamp,
        "model_version": MODEL_VERSION,
        "prediction": prediction,
        "probability": probability,
        "Sex": data.Sex,
        "Pclass": data.Pclass,
        "Age": data.Age,
        "IsChild": data.IsChild,
        "IsElderly": data.IsElderly,
        "Fare": data.Fare,
        "HighFareFlag": data.HighFareFlag,
        "FareAgeRatio": data.FareAgeRatio,
        "Embarked_C": data.Embarked_C,
        "Embarked_S": data.Embarked_S,
        "Embarked_Q": data.Embarked_Q
    }

    log_prediction(log_data)

    return {
        "request_id": request_id,
        "model_version": MODEL_VERSION,
        "prediction": prediction,
        "probability": probability
    }

