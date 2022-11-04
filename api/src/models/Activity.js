const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('activity', {
    // id: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficulty:{
        type: DataTypes.INTEGER,
        validate:{ min : 1, max : 5},
    },
    duration:{
        type: DataTypes.STRING,
    },
    season:{
        type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),    
           
    }
    
  });
};

// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)