let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
const port = 3000;

app.get("/home", function(req, res){
  res.render("pages/home");
});

app.get("/", function(req, res){
  res.redirect("/home");
});

let server = app.listen(port, function(req, res){
  console.log("Server started on port " + port);
});
