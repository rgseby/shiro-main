const db        = require('../models');

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
  /*if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }*/

  const apartment = {
    name: 'Sebastian',
    address: 'Strada Mieilor',
    description: 'Salut',
    price_per_night: 150,
    free_parking: true,
    wifi_network: true,
    family_room: true,
    smoking: true,
    balcony: true,
    heating: true,
    garden: true,
    coffee: true
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

