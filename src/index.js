const express = require('express');
const router = require('./routers');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(router);



app.listen(PORT, () => console.log(`Example app listing on port ${PORT} =)`));