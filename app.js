const express = require('express');
const path    = require ('path');
const hbs     = require('hbs');
const app     = express();
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.get('/', (req, res)=>{
    res.render('index');
});
 
//route untuk halaman about
app.get('/about',(req, res) => {
  res.send('This is about page');
});
 
app.listen(8000, () => {
  console.log('Server berjalan di port 8000');
});