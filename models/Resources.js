module.exports = (sequelize, DataTypes) => {
    const Resources = sequelize.define('Resources', {
        resource_department: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        org_name: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        org_description: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            notEmpty: true,
             
        },
        org_location: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        org_website: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        org_contact: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        org_lat: {
            type: DataTypes.FLOAT,
        },
        org_lng : {
            type: DataTypes.FLOAT,
        }
       
        
    },
    {
        timestamps: false
    });

    return Resources;
}