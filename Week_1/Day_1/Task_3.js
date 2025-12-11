const fs = require('fs');

// Array to hold the logs
let metricsArray = [];

// Function to log runtime metrics and store them in the array
async function logRuntimeMetrics() {
    // Get the CPU usage (user and system time in microseconds)
    const cpuUsage = process.cpuUsage();

    // Get the resource usage (memory usage, RSS, heap, etc.)
    const resourceUsage = process.resourceUsage();

    // Log the CPU and resource usage to the console
    console.log("CPU Usage:", cpuUsage);
    console.log("Resource Usage:", resourceUsage);

    // Prepare a metrics object for the current run
    const metrics = {
        timestamp: new Date().toISOString(),
        cpuUsage: cpuUsage,
        resourceUsage: resourceUsage
    };

    // Add the metrics object to the array
    metricsArray.push(metrics);

    // Create the 'logs' directory if it doesn't exist
    const logDir = './logs';
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);  // Make the directory if it doesn't exist
    }

    // Convert the array to a formatted JSON string
    const logData = JSON.stringify(metricsArray, null, 2);

    // Write the array of metrics to a JSON file
    const logFilePath = './logs/day1-sysmetrics.json';
    fs.writeFileSync(logFilePath, logData);

    console.log(`Metrics have been logged to ${logFilePath}`);
}

// Execute the function
logRuntimeMetrics();
