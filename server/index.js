const express = require('express');
const app = express();
require('dotenv').config();

app.use('/', require('./router/adotFriendsRoute'));

app.listen(3001)

