const express = require('express');
const router = express.Router();
const  fetchData  = require('../utils/getdata');

router.get("/getData", fetchData);
const  serverHealth  = require('../utils/health');

router.get("/test2", serverHealth);

module.exports = router;
