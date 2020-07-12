const express = require("express");
const app = express();

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('./public'));

app.get('/', function (req, res) {
  //res.render('index', board);
  res.render('index', 
    {game_name: 'Tik tac toe pug'});
})


app.listen(8080);