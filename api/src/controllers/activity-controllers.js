const { Country, Activity } = require('../db.js');

const createActivity = async(req,res) => {    
    try{     
        const { name, difficulty, duration, season, nameCountries} = req.body

        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        nameCountries.forEach(async n => {
            
            const countrie = await Country.findAll( {where : {name: n}} );
            await newActivity.addCountry( countrie );
        });
            return res.json({msj:'Actividad Creata jiji'});
        
   }catch(error){
        return res.status(404).json({msj: "Error EN la ruta de create",error: error.message, error})
   }
//TODO Falta optimizar mas este CONTROLLER

} 

const getActivities = async(req, res) => {
    try {
        const activities = await Activity.findAll({
            attributes:['id','name','difficulty', 'duration','season'],
            include: Country
        });
        return res.json({msj : 'getActivities', activities : activities});
    
    } catch (err) {
        console.log(err.message);
        return res.status(404).json({msj : err.message, err});
    }
}

module.exports = {
    createActivity,
    getActivities

}