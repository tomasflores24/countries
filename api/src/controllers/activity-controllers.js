const { Country, Activity } = require('../db.js');

const createActivity = async(req,res) => {    
    try{             
        const { name, difficulty, duration, season, nameCountries} = req.body
        
        const nameValidate = await Activity.findOne({where:{name : name}});
        if(nameValidate) throw new Error('La actividad ya existe, eliga otro nombre');

        const newActivity = await Activity.create({ name, difficulty, duration, season });
        nameCountries.forEach(async n => {
            const countrie = await Country.findAll( {where : {name: n}} );
            await newActivity.addCountry( countrie );
        });
        return res.json({msj:`Actividad "${name}" Creada con exito `});

   }catch(error){
        return res.status(404).json( {msj: "Error al crear",msgError: error.message} );
   }

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
    getActivities,
}