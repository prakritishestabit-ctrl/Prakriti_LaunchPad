#!/bin/bash
 
PATH=/usr/bin:/bin:/usr/local/bin
 
URL="http://localhost:8000/ping"
LOG_FILE="/home/prakritisaldiya/prakriti/Prakriti_LaunchPad/Week_1/Day_5/Task1/logs/health.log"
 
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
 
# Send request
if curl -fs --max-time 5 "$URL" > /dev/null; then
    echo "[$TIMESTAMP] ✔ Healthy"
else
    echo "[$TIMESTAMP] FAILED to reach $URL" >> "$LOG_FILE"
fi
 