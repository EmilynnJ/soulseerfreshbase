
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const stripeRoutes = require('./routes/stripe');
const sessionRoutes = require('./routes/session');
const scheduleRoutes = require('./routes/schedule');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/stripe', stripeRoutes);
app.use('/session', sessionRoutes);
app.use('/schedule', scheduleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SoulSeer backend running on port ${PORT}`));
