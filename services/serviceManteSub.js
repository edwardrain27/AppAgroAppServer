const pool = require('../database');



const reporteMantenimientos = async(campos)=>{

    campos.array.forEach(element => {
        
        console.log(element);
        
    });
}