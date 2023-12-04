'use strict';

const fs = require ('fs');
//const fs = require ('papaparse');


module.exports.handler = async (event) => {
    const stage = process.env.STAGE;
    // const file = fs.createReadStream()
    const res = toJson (stage);
    console.log ("Valore: ", res);
    return res;
};

const toJson = (ambiente) => {
    return 'Bella storia questo programmino. Siamo in  ' + ambiente;
}

