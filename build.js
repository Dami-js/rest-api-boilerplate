const fs = require('fs-extra');
const childProcess = require('child_process');

// start build action
try {
  // Remove current build
  fs.removeSync('./build/');
  // Copy front-end files
  fs.copySync('./src/public', './build/public');
  fs.copySync('./src/views', './build/views');
  // Transpile the typescript files
  childProcess.exec('tsc --build tsconfig.prod.json');
} catch (error) {
  console.log(error);
}
