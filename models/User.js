module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        userType: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        zip: {
            type: DataTypes.STRING,
        },
        roomId: {
            type: DataTypes.STRING,
        },
        Bio: {
            type: DataTypes.STRING(300),
            allowNull: false,
            
        },
        profileImg: {
            type: DataTypes.STRING,
			defaultValue: 'https://community-chicago.herokuapp.com/uploads/imgDefault.jpg',
        }
    });

    return User;
}
