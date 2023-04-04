
const { Apartment } = require('../models/dbApartment');


async function getAllApartments() {
    
    const Apartments = await Apartment.findAll();

    return Apartments;

}


module.exports = {
    getAllApartments
};