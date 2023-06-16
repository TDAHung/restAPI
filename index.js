const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const membersRoute = require('./routes/membersRoute');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/members', membersRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
