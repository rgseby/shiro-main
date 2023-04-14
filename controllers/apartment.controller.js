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
    whole_apartment: true,
    area_apartment: 54,
    private_kitchen: true,
    private_bathroom: true,
    attraction_point: true,
    city_view: true,
    air_conditioning: true,
    tv_flat: true,
    free_parking: true,
    wifi_network: true,
    family_room: true,
    smoking: true,
    balcony: true,
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


exports.findOne = (req, res) => {
  res.setHeader('Content-Type', 'image/png');
  res.status(200).sendFile('../poza.png');
}

