const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/htmlRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse insoming JSON data
app.use(express.json());
app.use('api', apiRoutes);
app.use('/', htmlRoutes)

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
