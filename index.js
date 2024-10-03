import express from "express";
import morgan from "morgan";
const app = express();
const PORT = 3000;

//setup
app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.static('public'));
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/create', (req, res) => {
    console.log("Success!!");
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.get('/download', (req, res) => {
    res.download('./Homer_Simpson_2006.png');
});

app.listen(PORT, ()=> {
    console.log(`Server is listening on port: ${PORT}`);
});