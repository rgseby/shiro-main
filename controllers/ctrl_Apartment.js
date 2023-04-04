
const { dbApartment } = require('../models');


async function getAllApartments() {
    
    const Apartments = await dbApartment.findAll();

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
    const Apartment = await dbApartment.create({
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
    getAllApartments,
    insertApartment
};