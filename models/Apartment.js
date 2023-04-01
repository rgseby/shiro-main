
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
        },

        price_per_night : {
            type      : DataTypes.INTEGER,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        },

        free_parking : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            valdiate  : {
                notEmpty: true
            }
        },

        wifi_network : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        },

        family_room : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        },

        smoking : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        },

        balcony : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        },

        heating : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        },

        garden : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        },

        coffee : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            valdiate  : {
                notEmpty: true
            }
        }
    });


    return Apartment;
};