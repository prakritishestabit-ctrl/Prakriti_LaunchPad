# Base image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Copy requirements and install
COPY src/deployment/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy all necessary source code, models, and data
COPY src/deployment/api.py ./api.py
COPY src/models/best_model.pkl ./models/best_model.pkl
COPY src/data/processed/final.csv ./data/processed/final.csv

# Expose port
EXPOSE 8000

# Command to run the API
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "8000"]
