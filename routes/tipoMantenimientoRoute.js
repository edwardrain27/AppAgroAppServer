const { Router } = require("express");
const tipoMantenimientoController = require('../controllers/tipoMantenimientoController');


class TipoMantenimientoRoutes {
    
    constructor() {
        this.router = Router();
        this.config();
    }

    config(){

        this.router.get('/', tipoMantenimientoController.listar);

    }
    
}

const tipoMantenimientoRoute = new TipoMantenimientoRoutes();
module.exports = tipoMantenimientoRoute.router;