const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();


/* Settings */
app.set('port', process.env.PORT || 3000)

/* Middlewares */
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`);
});
