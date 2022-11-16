const axios = require('axios');
const { Country, Activity } = require('../db.js');

const getCountries = async(req, res, next) => {
    try {
        // const countries = ( await axios('https://restcountries.com/v3/all') ).data
        // .map( c => c.continents )
        // return res.json(countries)

        if(req.query.name) return next();

        let country_DB = await Country.findAll( { attributes: ['id', 'name', 'img','continent','population'], include: Activity });
        
        if( !country_DB.length ){


            const countries = (await axios('https://restcountries.com/v3/all'))
            .data
            .map( c => {
                return {
                    id: c.cca3,
                    name : c.name.common,
                    img : c.flags[0],
                    continent : c.continents[0],
                    
                    capital : c.capital ? c.capital[0].toLowerCase() : 'no tiene capital',
                    subregion: c.subregion,
                    area : c.area,
                    population : c.population,
                }
            });
            
            await Country.bulkCreate(countries);

            country_DB = ( await Country.findAll({ attributes: ['id', 'name', 'img','continent', 'population'], include: Activity }) );

        }
        
        
                
        return res.json({msj : 'getCountries' , length:country_DB.length , all : country_DB });
        
    } catch (err) {
        return res.status(404).json({msj : err.message, err});
    }
}

const getxName = async(req, res) => {
    try {
        const {name} = req.query;

        const countriesxName = (await axios(`https://restcountries.com/v3/name/${name}`))
        .data
        .map( c => {
            return {
                name: c.name.common,
                id: c.cca3,
                // capital: c.capital,
                // region: c.region,
                // subregion : c.subregion,
                // area : c.area,    
                // population : c.population, 
                // continents : c.continents,
                flags : c.flags[0]
            }
        });
        return res.json({msj : 'getName', coun : countriesxName});

    } catch (err) {
        return res.status(404).json( {message: 'No se encontro.',msjErr : err.message, err });
    }
}

const getxId = async(req, res) => {
    try {
        const {idPais} = req.params;
        const countrieXid = (await axios(`https://restcountries.com/v3/alpha/${idPais}`)).data
        .map( c => {
            return {
                id: c.cca3,
                name : c.name.common,
                img : c.flags[0],
                continent : c.continents[0],
                capital : c.capital,
                subregion : c.subregion,
                area : c.area, //   (Mostrarla en km2 o millones de km2)
                population : c.population,     
            }
            //TODO => Actividades turísticas con toda su información asociada
        });
        return res.json({msj : 'getxId', infoxId:countrieXid[0]});
    } catch (err) {
        console.log(err.message);
        return res.status(404).json({msjErr : err.message, msj:'No se encontro el pais por CODE', err});
    }
}

module.exports = {
    getCountries,
    getxName,
    getxId,
}

