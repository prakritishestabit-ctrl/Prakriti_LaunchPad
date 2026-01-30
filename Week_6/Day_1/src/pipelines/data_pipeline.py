import pandas as pd
import numpy as np
from pathlib import Path


def load_data(path):
    return pd.read_csv(path)


def clean_data(df):

    df.drop(columns=['PassengerId', 'Cabin', 'Name', 'Ticket'], inplace=True)

    df.drop_duplicates(inplace=True)

    df['Age'] = df['Age'].fillna(df['Age'].median())
    df['Embarked'] = df['Embarked'].fillna(df['Embarked'].mode()[0])

    Q1 = df['Fare'].quantile(0.25)
    Q3 = df['Fare'].quantile(0.75)
    IQR = Q3 - Q1

    df = df[
        (df['Fare'] >= Q1 - 1.5 * IQR) &
        (df['Fare'] <= Q3 + 1.5 * IQR)
    ]

    
    df.drop(columns=['SibSp', 'Parch'], inplace=True)

    return df


def save_processed_data(df, path):
    df.to_csv(path, index=False)


if __name__ == "__main__":

    RAW_PATH = Path("src/data/raw/data.csv")
    PROCESSED_PATH = Path("src/data/processed")
    PROCESSED_PATH.mkdir(parents=True, exist_ok=True)

    df = load_data(RAW_PATH)
    df = clean_data(df)
    save_processed_data(df, PROCESSED_PATH / "final.csv")

    print("Data pipeline completed. final.csv saved.")
