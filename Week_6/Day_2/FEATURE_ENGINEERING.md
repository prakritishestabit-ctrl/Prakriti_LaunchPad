# Feature Engineering Documentation – Titanic Dataset

## Overview
This document describes the **feature engineering and selection process** applied to the Titanic dataset to prepare it for model training.  
The goal is to enhance predictive performance while maintaining a clean and interpretable feature set.

---

## 1. Data Loading and Cleaning
- **Source:** `src/data/processed/final.csv`  
- **Initial cleaning steps (from Day 1):**
  - Dropped unnecessary columns: `PassengerId`, `Cabin`, `Name`, `Ticket`.
  - Removed duplicate rows.
  - Handled missing values:
    - `Age` → filled with **median**.
    - `Embarked` → filled with **mode**.
  - Removed outliers in `Fare` using the **IQR method**.
  - Dropped less useful or highly correlated columns: `SibSp`, `Parch`.

---

## 2. Feature Engineering

### 2.1 Categorical Encoding
- **Sex:** Label encoded (`male = 1`, `female = 0`).  
- **Embarked:** One-hot encoded:
  - `Embarked_C`
  - `Embarked_S`
  - `Embarked_Q` (if present)

### 2.2 Numerical Transformations
- **Age:**
  - `IsChild` → 1 if Age < 12, else 0  
  - `IsElderly` → 1 if Age > 60, else 0
- **Fare:**
  - `HighFareFlag` → 1 if Fare > median(Fare), else 0
- **Combined Features:**
  - `FareAgeRatio` → `Fare / (Age + 1)` to capture relative spending ability

### 2.3 Selected Features
After feature engineering and selection, the **top 10 features** used for model training are:

| Feature        | Description                              |
|----------------|------------------------------------------|
| Sex            | Passenger gender encoded as 0/1          |
| Pclass         | Passenger class (1/2/3)                  |
| Age            | Passenger age (scaled)                   |
| IsChild        | 1 if Age < 12 else 0                     |
| IsElderly      | 1 if Age > 60 else 0                     |
| Fare           | Ticket fare (scaled)                      |
| HighFareFlag   | 1 if Fare > median else 0                |
| FareAgeRatio   | Fare divided by (Age + 1)                |
| Embarked_C     | 1 if Embarked = C else 0                 |
| Embarked_S     | 1 if Embarked = S else 0                 |

---

## 3. Feature Scaling
- All numerical features (`Age`, `Fare`, `FareAgeRatio`) are **standardized** using `StandardScaler` to have:
  - Mean = 0  
  - Variance = 1
- Ensures a uniform scale for algorithms sensitive to feature magnitude.

---

## 4. Feature Selection
- **Correlation Threshold:**  
  - Dropped features with high correlation (`corr > 0.85`) to reduce redundancy.
- **Mutual Information:**  
  - Features were ranked based on mutual information with the target (`Survived`).
  - Only the **top 10 features** were retained for training.

---

## 5. Saving the Pipeline
- **Processed CSV:**  
  - `src/data/processed/final.csv` contains the final engineered and selected features along with the target.
- **Scaler:**  
  - Saved as `src/features/feature_pipeline.joblib` for later use in training and inference.
- **Feature List:**  
  - `src/features/feature_list.json` contains the names and metadata of the final features.

---

## 6. Key Benefits
- Encodes categorical variables in a **model-friendly way**.
- Generates **informative features** (`IsChild`, `IsElderly`, `HighFareFlag`, `FareAgeRatio`).
- Reduces redundancy via **correlation filtering**.
- Focuses on **top predictive features** via mutual information, improving:
  - Model performance
  - Interpretability

**Feature engineering pipeline completed. Ready for model training.**
