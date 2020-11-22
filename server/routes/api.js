var express = require('express');
var router = express.Router();

const computers = require("../controllers/computerController.js");
const customers = require("../controllers/customerController.js");
const attributions = require("../controllers/attributionController.js");

 router.get('/computers', computers.findAll)

router.post('/computers/create', computers.create)

router.post('/computers/remove', computers.delete)

router.get('/customers/search', customers.findAll)

router.get('/attributions', attributions.findAll)

router.post('/attributions/create', attributions.create)

router.post('/attributions/remove', attributions.delete)

module.exports = router;
