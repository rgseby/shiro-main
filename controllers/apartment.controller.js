const db        = require('../models');
const path = require('path');

const Apartment = db.apartments;
const Op        = db.Sequelize.Op;

// Retrieve all Apartments from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Apartment.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while retrieving tutorials.'
        });
      });
};


// Create and Save a new Apartment
exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const apartment = {
    name             : req.body.name,
    address          : req.body.address,
    description      : req.body.description,
    price_per_night  : req.body.price_per_night,
    whole_apartment  : req.body.whole_apartment,
    area_apartment   : req.body.area_apartment,
    private_kitchen  : req.body.private_kitchen,
    private_bathroom : req.body.private_bathroom,
    attraction_point : req.body.attraction_point,
    city_view        : req.body.city_view,
    air_conditioning : req.body.air_conditioning,
    tv_flat          : req.body.tv_flat,
    free_parking     : req.body.free_parking,
    wifi_network     : req.body.wifi_network,
    family_room      : req.body.family_room,
    smoking          : req.body.smoking,
    balcony          : req.body.balcony,
    coffee           : req.body.coffee
  };

  Apartment.create(apartment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


exports.findOne = (req, res) => {
  res.setHeader('Content-Type', 'image/png');
  res.status(200).sendFile(path.join(path.dirname('poza.png').split(path.sep).pop(), 'poza.png'));
}

