let fs = require('fs');
   fs.stat('/node_modules/.cache', function(err) {
      if (!err) {
         fs.rm('./node_modules/.cache', { recursive:true }, err => {
            if(err){
               console.log('не удалось удалить папку node_modules/.cache')
            };
         })
      }
      else if (err.code === 'ENOENT') {
          console.log('папки node_modules/.cache нет');
      }
  })