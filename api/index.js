//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const axios = require('axios'); // !
// Syncing all the models at once.
conn.sync({ force: true }).then( () => {
  server.listen(3001, async() => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    await axios('http://localhost:3001/countries'); // !

    await axios.post('http://localhost:3001/activities',{
            name : "nadar",
            difficulty: 1,
            duration: "3",
            season: "summer",

            nameCountries: ["French Southern and Antarctic Lands", "Colombia"],
    })

    await axios.post('http://localhost:3001/activities',{
            name : "partidito 2",
            difficulty: 3,
            duration: "1",
            season: "autumn",
            nameCountries: ["Grenada", "Trinidad and Tobago", "Japan", "Haiti"],
    })

    await axios.post('http://localhost:3001/activities',{
            name : "ir a la cancha 3",
            difficulty: 4,
            duration: "2",
            season: "winter",

            nameCountries: ["Colombia", "Grenada", "Japan"],
    })

  });
});
