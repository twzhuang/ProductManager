const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const path = require('path');
require('./server/config/mongoose.js');
app.use(express.static(path.join(__dirname, './clients/static')));
app.set('views', path.join(__dirname, './clients/views'));
app.use(express.static( __dirname + '/public/dist/public' ));
app.set('view engine', 'ejs');
require('./server/config/routes.js')(app);
app.listen(8000, function() {
    console.log("listening on port 8000");
})
