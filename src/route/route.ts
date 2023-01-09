// import {Router} from 'express';
// import { messageCtrl } from '../controller/message.controller';

// const router = Router();

// router.get('/', messageCtrl.getMessage);
// router.post('/',messageCtrl.postMessage);

// export default router;

////////////////////////////////////////////////////////////////

// import { Router } from "express";
// import { mensajeCtrl } from "../controller/message.controller";

// const router = Router();

// router.get("/", mensajeCtrl.getMensaje);
// router.post("/", mensajeCtrl.postMensaje);
// router.put("/message/:id", mensajeCtrl.putMensaje)
// router.delete("/message/:id",mensajeCtrl.deleteMensaje )

// export default router;

//////////////////////// daniel /////////////////////////////////////////////

// import { Request, Response , Router, } from "express";
// import { databaseCtrl } from "../controller/controlador";

// const router = Router();

// router.get('/portfolio', databaseCtrl.getMyjson);
// // router.get('/portfolio/project', databaseCtrl.getProjects);
// // router.get("/portfolio/project:id", databaseCtrl.getOneProject);

// export  default router;

///////////////////////////////////////////

import { Request, Response, Router } from "express";
import { databaseCtrl } from '../controller/controller';
const router = Router();
router.get('/portfolio', databaseCtrl.getMyjson);
router.get('/portfolio/projects', databaseCtrl.getProjects);
router.get('/portfolio/project/:id', databaseCtrl.getOneProject);
router.post('/portfolio/project',databaseCtrl.saveOneProject);

export default router;

