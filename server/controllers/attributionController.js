const db = require("../models");
const attribution = db.Attribution
const computer = db.Computer
const customer = db.Customer
/*const Op = db.Sequelize.Op;*/

// Create and Save a new attribution
exports.create = (req,res) => {
    const {firstname, lastname, computerId, id_client,  date, hour} = req.body;
    console.log(req.body.id_client)
    if (id_client !== undefined){
        customer.findOne({where: { id : id_client}}).then(data =>{
            attribution.create({date: date, hour : hour, customerId : id_client, computerId : computerId}).then(attribution =>{
                let returnedAttribution =  [{id : attribution.id, date : attribution.date, hour : attribution.hour, Customer : data }];
                res.status(200).json(returnedAttribution);
            })
        })
    }else{
        customer.create({firstname, lastname}).then( data => {
            attribution.create({date: date, hour : hour, customerId : data.id, computerId : computerId}).then(attribution =>{
                let returnedAttribution =  [{id : attribution.id, date : attribution.date, hour : attribution.hour, Customer : data }];
                res.status(200).json(returnedAttribution);
            })
        })
    }

}

// Retrieve all Computers from the database.
exports.findAll = (req, res) => {
    attribution.findAll({
        attributes: ['id', 'date', 'hour'],
        include: [
            {
                model: customer,
                attributes: ['id', 'firstname', 'lastname'],
                required: false,
            },
            {
                model: computer,
                attributes: ['id', 'name'],
                required: false,
            }

        ]
    }).then(data => {
        res.status(200).json(data);
    });

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res, next) => {
    const id = req.body.id;
    try {
        const attribution = await attribution.findOne({
            where: { id }
        });
        if(!attribution){
            return res.status(200).json({
                success: false,
                message: 'Information introuvable',
            })
        }
        await attribution.destroy();
        return res.status(200).json({
            success: true,
            message: 'Attribution annulée',
            content: id
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            success: false,
            message: 'Ressource indisponible',
        })
    }
}