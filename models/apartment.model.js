
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

        description : {
            type      : DataTypes.TEXT,
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

        whole_apartment : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            valdiate  : {
                notEmpty: true
            }
        },

        area_apartment : {
            type      : DataTypes.INTEGER,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        },

        private_kitchen : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            valdiate  : {
                notEmpty: true
            }
        },

        private_bathroom : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            valdiate  : {
                notEmpty: true
            }
        },

        attraction_point : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            valdiate  : {
                notEmpty: true
            }
        },

        city_view : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            valdiate  : {
                notEmpty: true
            }
        },

        air_conditioning : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            valdiate  : {
                notEmpty: true
            }
        },

        tv_flat : {
            type      : DataTypes.BOOLEAN,
            allowNull : false,
            valdiate  : {
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