var express = require('express');
var router = express.Router();

const computers = require("../controllers/computerController.js");
const customers = require("../controllers/customerController.js");
const attributions = require("../controllers/attributionController.js");

 router.get('/computers', computers.findAll)

router.post('/computer/create', computers.create)

router.post('/computer/remove', computers.delete)

router.get('/customer/search', customers.findAll)

router.get('/attributions', attributions.findAll)

router.post('/attribution/create', attributions.create)

router.post('/attribution/remove', attributions.delete)

module.exports = router;
