const express=require('express')
const jimp=require('jimp')
var port=process.env.PORT||3000
const app=express()




var Jimp = require('jimp');
 
// open a file called "lenna.png"
Jimp.read('asw.jpg', (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(1700, 1700) // resize
    .quality(100) // set JPEG quality
     
    // .greyscale() // set greyscale
    .write('asw1.png'); // save
   //  image.posterize( 100).write(apple32.svg) 
});






app.listen(port,()=>{
    console.log(`server is runing on ${port}`)
})