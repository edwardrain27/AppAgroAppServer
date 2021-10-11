
const pool =require("../database");
const { request , response } = require("express");



class TipoMantenimientoControllers {
    
    listar= async(req=request , res=response )=>{
        const tipos = await pool.query('SELECT * FROM tipos_matenimiento');
        console.log({tipos});
        res.json({tipos})
        
    }

    crear =async(req=request , res=response)=>{
        await pool.query('INSERT INTO tipos_matenimiento set ?' , [req.body]);
        res.json({message: 'tipo agregado'})
        console.log(req.body)
    }

    listarUno =async(req=request , res=response)=>{
        const{id} = req.params
        const mantenimiento = await pool.query('SELECT * FROM tipos_matenimiento WHERE idtipos_mantenimiento= ?' , [id])
        if (mantenimiento.length > 0){
            return res.json(mantenimiento[0])
        } else{
        res.status(404).json({text: "matenimento no encontrado"})
        }
        

    }

    editar= async(req=request , res=response)=>{
        const{id} = req.params
        await pool.query('UPDATE tipos_matenimiento set ? WHERE idtipos_mantenimiento = ?' , [req.body , id])

        res.json({message: 'El tipo fue editado'})

    }
}


const tipoMantenimientoController = new TipoMantenimientoControllers();
module.exports = tipoMantenimientoController;