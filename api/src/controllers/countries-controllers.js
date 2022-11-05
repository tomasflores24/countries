const axios = require('axios');
const { Country, Activity } = require('../db.js');

// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población

const getCountries = async(req, res) => {
    try {
        // const countries = (await axios('https://restcountries.com/v3/all'))
            // .data
            // .map( c => c.cca3 ? c.cca3 : "NULO PA")
            // .map( c => {
                // const capital = c.capital ? c.capital[0].toLowerCase() : 'not capital';
                // console.log(capital)
                // const capital = "DEF";

                // return {
                    // id: c.cca3,
                    // name : c.name.common,
                    // img : c.flags[0],
                    // continent : c.continents[0],

                    // capital : capital,
                    // capital : c.capital ? c.capital.toLowerCase() : 'not capital',


                    // subregion: c.subregion,
                    // area : c.area,}
                    // population : c.population,
                // }
            // });
    // return res.json({msj : 'getCountries',all : countries });


        let country_DB = await Country.findAll();
        
        if( !country_DB.length ){

            let countries = (await axios('https://restcountries.com/v3/all')) // TODO CAMBIAR A CONST
            .data
            .map( c => {
                return {
                    id: c.cca3,
                    name : c.name.common,
                    img : c.flags[0],
                    continent : c.continents[0],

                    capital : c.capital ? c.capital[0].toLowerCase() : 'not capital',
                    subregion: c.subregion,
                    area : c.area,
                    population : c.population,
                }
            });
            
            await Country.bulkCreate(countries);

            country_DB = ( await Country.findAll() ).map( c => c.dataValues );

            console.log("SE CREO");
        }

        return res.json({msj : 'getCountries', length:country_DB.length , all : country_DB });

    } catch (err) {
        console.log(err.message);
        return res.status(404).json({msj : err.message, err});
    }
}
// ? carácter con secuencia de bytes 0xc4 0x93 en codificación «UTF8» no tiene equivalente en la codificación «WIN1252»

// [ ] GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.

// * Termine la ruta de get pero falta revidar algunas cosas por las dudsd 
// ! ...

module.exports = {
    getCountries
}