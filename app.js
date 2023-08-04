require('dotenv').config();
const express = require('express');
const app = express();
// const port = 8000;
const router = require('./api/router');

app.use(express.json());
app.use('/api', router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    }
);