
module.exports = (sequelize, DataTypes) => {
    
    const Apartment = sequelize.define('Apartment', {
        name : {
            type      : DataTypes.STRING,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        },

        address : {
            type      : DataTypes.STRING,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        }
    });


    return Apartment;
};