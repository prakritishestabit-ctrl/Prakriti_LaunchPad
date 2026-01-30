# Exploratory Data Analysis (EDA) Report

## 1. Dataset Overview
The Titanic dataset was used to analyze passenger information and understand the factors that influenced survival.  
The dataset contains both numerical and categorical features such as age, gender, passenger class, fare, and embarkation point.

The objective of this EDA is to:
- Clean the raw data
- Explore relationships between features
- Identify patterns useful for machine learning models

---

## 2. Data Cleaning Summary

The following data preprocessing steps were performed to improve data quality:

- **Duplicate Removal**  
  Duplicate records were removed to avoid biased analysis and repeated information.

- **Missing Value Handling**
  - Missing values in the `age` column were filled using the **median**, as it is robust to outliers.
  - Missing values in the `embarked` column were filled using the **mode**, since it is a categorical feature.

- **Column Removal**
  - The `deck` column was dropped due to a high percentage of missing values, making it unreliable for analysis.

- **Outlier Treatment**
  - Outliers in the `fare` column were removed using the **Interquartile Range (IQR)** method to reduce skewness.

After these steps, the dataset became cleaner, more consistent, and suitable for analysis.

---

## 3. Exploratory Data Analysis Findings

### 3.1 Correlation Analysis
A correlation matrix was generated using numerical features to identify relationships between variables.

Key observations:
- `fare` shows a relationship with `pclass`, indicating higher fares for higher passenger classes.
- Survival has correlations with socio-economic features such as passenger class and fare.

---

### 3.2 Feature Distributions
- The `age` feature shows most passengers were adults, with fewer children and elderly individuals.
- The `fare` feature is right-skewed, indicating a small number of passengers paid significantly higher fares.

---

### 3.3 Target Variable Distribution
- The target variable `survived` was analyzed for class balance.
- The dataset shows **class imbalance**, with more passengers not surviving than surviving.
- This imbalance should be considered during model training.

---

## 4. Key Insights
- Data cleaning improved overall dataset quality.
- Passenger class and fare appear to influence survival probability.
- Target class imbalance exists and may impact model performance.
- Categorical variables will require encoding before model training.

---

## 5. Status
✔ Raw data loaded successfully  
✔ Data cleaned and processed  
✔ Cleaned dataset saved  
✔ Exploratory Data Analysis completed  
