const { Country, Activity } = require('../db.js');


const createActivity = async(req,res) => {    
    try{     

        const { name, difficulty, duration, season, id} = req.body

        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
    
        const countrie = await Country.findByPk( id );
        await newActivity.addCountry( countrie );
        return res.json({msj:'Actividad Creata jiji'});
        
   }catch(error){
        return res.status(404).json({msj: "Error EN la ruta de create",error: error.message, error})
   }''
//TODO Falta optimizar mas este CONTROLLER

} 

module.exports = {
    createActivity
}