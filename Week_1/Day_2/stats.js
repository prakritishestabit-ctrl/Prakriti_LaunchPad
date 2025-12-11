#!/usr/bin/env node
/**
 * Simple Stats CLI Tool
 * Usage:
 *   node stats.js file1.txt file2.txt file3.txt
 */

const fs = require("fs").promises;
const path = require("path");
const removeDuplicates = require("./removeDuplicates");

// Convert bytes → MB
const toMB = (bytes) => Number((bytes / (1024 * 1024)).toFixed(2));

// Count lines, words, characters
function analyzeText(text) {
  const lines = text.split(/\r?\n/).length;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const chars = text.length;
  return { lines, words, chars };
}

// Process ONE file and return performance + stats
  async function processFile(filePath) {
  const fileName = path.basename(filePath);

  const memBefore = process.memoryUsage().heapUsed;
  const start = process.hrtime.bigint();
  // starts to measure execution time 

  let report = {
    file: fileName,
    executionTimeMs: 0,
    memoryMB: 0,
    stats: null,
    error: null
  };

  try {
  let content = await fs.readFile(filePath, "utf8");

  // If user passed --unique, remove duplicate lines first
  if (global.uniqueFlag === true) {the documentation 
    const result = await removeDuplicates(filePath);

    if (result.success) {
      report.uniqueOutput = result.outputPath;
      content = result.content; // use cleaned content for stats
    } else {
      report.error = result.error;
    }
  }

  // Now analyze the final content
  report.stats = analyzeText(content);

} catch (err) {
  report.error = String(err);
}

// ends to measure execution time
  const end = process.hrtime.bigint();
  const memAfter = process.memoryUsage().heapUsed;

  report.executionTimeMs = Number((Number(end - start) / 1e6).toFixed(3));
  report.memoryMB = toMB(memAfter - memBefore);

  return report;
}

// MAIN → run 3 files in parallel
  async function main() {
  const args = process.argv.slice(2);
  const uniqueFlag = args.includes("--unique");
  global.uniqueFlag = uniqueFlag;


// Filter out --unique so only file names remain
  const files = args.filter(a => a !== "--unique");

  if (files.length !== 3) {
    console.log("Please provide exactly 3 files.\nExample:\n  node stats.js file1.txt file2.txt file3.txt");
    process.exit(1);
  }

  const results = await Promise.all(files.map(processFile));

  console.log(JSON.stringify(results, null, 2));
}

main();
