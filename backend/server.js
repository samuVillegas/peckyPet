const {app} = require('./app');
require('dotenv').config()
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'),()=>{
  console.log(`App listening port ${app.get('port')}`);
})