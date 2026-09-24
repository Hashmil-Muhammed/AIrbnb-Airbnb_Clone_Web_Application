const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'PROMPTS.md');
const content = fs.readFileSync(filePath, 'utf-8');

const lines = content.split('\n');
const newLines = [];
let insidePrompt = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (line.startsWith('**Prompt ') && line.includes(' — ')) {
    if (insidePrompt) {
      newLines.push('\n</details>\n');
    }
    
    // Extract title
    const match = line.match(/\*\*(Prompt \d+ [—\-] .+)\*\*/);
    const title = match ? match[1] : line.replace(/\*\*/g, '');
    
    newLines.push(`### ${title}`);
    newLines.push('<details>');
    newLines.push('<summary>Click to expand full prompt</summary>\n');
    insidePrompt = true;
  } else if (line.startsWith('## Phase ')) {
    if (insidePrompt) {
      newLines.push('\n</details>\n');
      insidePrompt = false;
    }
    newLines.push(line);
  } else {
    newLines.push(line);
  }
}

if (insidePrompt) {
  newLines.push('\n</details>\n');
}

fs.writeFileSync(filePath, newLines.join('\n'));
console.log('Successfully formatted PROMPTS.md');
