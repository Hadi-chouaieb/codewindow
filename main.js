const{app,BrowserWindow,ipcMain}=require("electron");const axios=require("axios");require("./backend/client.js");let mainWindow;function createWindow(){mainWindow=new BrowserWindow({width:1e3,height:700,icon:"./logo.ico",webPreferences:{nodeIntegration:true,contextIsolation:false}});mainWindow.setMenuBarVisibility(false);mainWindow.loadFile("./index.html");mainWindow.on("closed",()=>{mainWindow=null});mainWindow.webContents.openDevTools()}app.whenReady().then(createWindow);app.on("activate",()=>{if(mainWindow===null){createWindow()}});app.on("window-all-closed",()=>{if(process.platform!=="darwin"){axios.post("http://localhost:3000/admin/logout",{headers:{"Content-Type":"application/json"}}).then(e=>{console.log("Response:",e.data);app.quit()}).catch(e=>{console.error("Error:",e.message);app.quit()})}});ipcMain.handle("open-child-window",(e,n)=>{let o=new BrowserWindow({width:800,height:700,icon:"./logo.ico",parent:mainWindow,webPreferences:{nodeIntegration:true}});o.loadURL(n);o.setMenuBarVisibility(false);o.on("closed",()=>{o=null})});