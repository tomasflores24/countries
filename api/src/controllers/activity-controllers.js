const { Country, Activity } = require('../db.js');

const createActivity = async(req,res) => {    
    try{             
        const { name, difficulty, duration, season, nameCountries} = req.body
        
        const nameValidate = await Activity.findOne({where:{name : name}});
        if(nameValidate) throw new Error('The activity already exists, choose another name');

        const newActivity = await Activity.create({ name, difficulty, duration, season });
        nameCountries.forEach(async n => {
            const countrie = await Country.findAll( {where : {name: n}} );
            await newActivity.addCountry( countrie );
        });
        return res.json({msj:`Activity "${name}" Created successfully `});

   }catch(error){
        return res.status(404).json( {msj: "Failed to create",msgError: error.message} );
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
        return res.status(404).json({msj : err.message, err});
    }
}

module.exports = {
    createActivity,
    getActivities,
}