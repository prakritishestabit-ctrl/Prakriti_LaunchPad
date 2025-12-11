const { exec } = require("child_process");

// Helper to run shell commands
function runCmd(cmd) {
    return new Promise((resolve) => {
        exec(cmd, (err, stdout) => {
            resolve(stdout.trim());
        });
    });
}

(async () => {
    console.log("===== SYSTEM INFORMATION =====\n");

    // Hostname
    const hostname = await runCmd("hostname");
    console.log(`Hostname: ${hostname}`);

    // Disk space (human-readable)
    const disk = await runCmd("df -h /");
    console.log(`\nDisk Space:\n${disk}`);

    // Open ports (show any 5)
    const ports = await runCmd("ss -tuln | head -n 6"); 
    console.log(`\nOpen Ports (first 5):\n${ports}`);

    // Default gateway
    const gateway = await runCmd("ip route | grep default");
    console.log(`\nDefault Gateway:\n${gateway}`);

    // Number of logged-in users
    const users = await runCmd("who | wc -l");
    console.log(`\nNumber of logged-in users: ${users}\n`);

    console.log("===== END =====");
})();

