let fs = require('fs');
fs.rm('./node_modules/.cache', { recursive:true }, err => {
  
   if(err) throw err; // не удалось удалить папку node_modules/.cache
   console.log('Папка успешно удалена');
});