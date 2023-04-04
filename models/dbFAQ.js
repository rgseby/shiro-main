
module.exports = (sequelize, DataTypes) => {

    const Record = sequelize.define('FAQ_record', {
        question : {
            type      : DataTypes.TEXT,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        },

        answer : {
            type      : DataTypes.TEXT,
            allowNull : false,
            validate  : {
                notEmpty: true
            }
        }
    });


    return Record;
}