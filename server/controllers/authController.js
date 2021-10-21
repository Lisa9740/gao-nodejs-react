const db = require("../models");
const User = db.User;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = (req, res) => {
    const {email} = req.body

    User.findOne({
        where: {
            email
        }}
    ).then(user => {
        if (!user){
            return res.status(404).send({ message: "User Not found." });
        }

        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) {
                return res.json({
                    message: "Auth failed. Check email and password"
                });
            }

            if (result){
                let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                    expiresIn: 86400 // 24 hours
                });

                res.status(200).send({
                    id: user.id,
                    email: user.email,
                    token : token
                });
            }
        });

    })
}
