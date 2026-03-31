const fs = require('fs');
const report = JSON.parse(fs.readFileSync('eslint_current_errors.json', 'utf8'));
report.forEach(file => {
  if (file.messages.length > 0) {
    file.messages.forEach(msg => {
      if (msg.severity === 2) {
        console.log(`ERROR: ${file.filePath}:${msg.line}:${msg.column} - ${msg.message} (${msg.ruleId})`);
      } else {
        console.log(`WARNING: ${file.filePath}:${msg.line}:${msg.column} - ${msg.message} (${msg.ruleId})`);
      }
    });
  }
});
