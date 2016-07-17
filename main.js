var app = require('./duet/app.js');
var spawn = require('child_process').spawn;
var duet = spawn('node', ['./duet/bin/www']);
//var server = app.listen(3000);
var electron = require('electron')
var eapp = electron.app
var BrowserWindow = electron.BrowserWindow

var mainWindow = null;

duet.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

duet.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

duet.on('close', (code) => {
  console.log(`duet express server process exited with code ${code}`);
});

eapp.on('window-all-closed', function(){
  eapp.quit();
  app.listen(3000).close();
});

eapp.on('ready', function(){
  mainWindow = new BrowserWindow({width: 1000, height: 625});
  //mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.loadURL('http://localhost:3000');
  // mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});
