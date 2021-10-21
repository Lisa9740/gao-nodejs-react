
const attribution = require('../models/attribution')
const customer = require('../models/customer')
const {Sequelize} = require("sequelize");
const Op = Sequelize.Op

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    const queryCustomer = req.query.query;
   customer.findAll({
            attributes: ['id', 'firstname', "lastname"],
            where: {
                [Op.or]: [
                    {
                        firstname: {
                            [Op.substring]: queryCustomer
                        }
                    },
                    {
                        lastname: {
                            [Op.substring]: queryCustomer
                        }
                    }
                ]
            }
        }).then(data => {
       res.status(200).json(data);
     })


};

