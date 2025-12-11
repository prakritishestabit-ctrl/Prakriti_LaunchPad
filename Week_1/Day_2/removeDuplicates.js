const fs = require("fs").promises;
const fsSync = require("fs");
const path = require("path");

/**
 * Remove duplicate lines from text file and write to output/
 */
async function removeDuplicates(filePath) {
  const fileName = path.basename(filePath);

  try {
    const content = await fs.readFile(filePath, "utf8");

    const lines = content.split(/\r?\n/);
    const uniqueLines = [...new Set(lines)];
    const finalText = uniqueLines.join("\n");

    // Ensure output/ exists
    if (!fsSync.existsSync("output")) {
      fsSync.mkdirSync("output");
    }

    const outputPath = path.join("output", `unique-${fileName}`);

    // Save cleaned content
    await fs.writeFile(outputPath, finalText, "utf8");

    return {
      success: true,
      outputPath,
      content: finalText
    };

  } catch (err) {
    return {
      success: false,
      error: String(err)
    };
  }
}

module.exports = removeDuplicates;
