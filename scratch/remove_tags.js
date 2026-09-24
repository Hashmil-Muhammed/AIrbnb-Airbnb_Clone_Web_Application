const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'PROMPTS.md');
const content = fs.readFileSync(filePath, 'utf-8');

const lines = content.split('\n');
const newLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.trim() === '<details>' || line.trim() === '<summary>Click to expand full prompt</summary>' || line.trim() === '</details>') {
    continue;
  }
  newLines.push(line);
}

fs.writeFileSync(filePath, newLines.join('\n'));
console.log('Successfully removed details tags from PROMPTS.md');
