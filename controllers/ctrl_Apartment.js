
const { Apartment } = require('../models/dbApartment');


async function getAllApartments() {
    
    const Apartments = await Apartment.findAll();

    return Apartments;

}

async function insertApartment(
    name,
    address,
    description,
    price_per_night,
    free_parking,
    wifi_network,
    family_room,
    smoking,
    balcony,
    heating,
    garden,
    coffee
) {
    await Apartment.create({
        name,
        address,
        description,
        price_per_night,
        free_parking,
        wifi_network,
        family_room,
        smoking,
        balcony,
        heating,
        garden,
        coffee
    });
}


module.exports = {
    getAllApartments
};