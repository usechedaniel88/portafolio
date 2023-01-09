// import {messageModel} from '../model/message.model';
// import {Request,Response} from 'express';

// export const messageCtrl = {
//     getMessage: (req: Request, res: Response) => {

//         const result = messageModel.getMessages();

//         res.json({message:result});
//     },

//     postMessage: (req: Request, res: Response) => {
//             const message = req.body.message;

//             const result = messageModel.saveMessage(message);

//             res.json({message: result});
//         }
// }

////////////////////////////////////////////////////////////////

// import {mensajeModel} from "../model/message.model";
// import { Request, Response } from "express";

// export const mensajeCtrl = {
//     getMensaje: (request: Request, response: Response) => {
//         const result = mensajeModel.getMensajes();
//         response.json({ mensaje: result})
//     },
//     postMensaje: (req: Request, res: Response) => {
//             const mensaje = req.body.message
//             const result = mensajeModel.saveMensaje(mensaje);
           
//             res.json({message:`se agrega ${mensaje} con id ${result}`})
    
//     },
//     putMensaje: (req: Request, res: Response) => {
//             const mensaje = req.body.message;
//             const id = parseInt(req.params.id);
//             const result = mensajeModel.changeMensaje(id,mensaje);

//             res.json({message: `Se modifica array ${id} con ${mensaje}`})
//     },

//     deleteMensaje:(req: Request, res: Response) => {
//             const mensaje = req.body.message;
//             const id = parseInt(req.params.id);
//             const result = mensajeModel.deleteMensaje(id,mensaje);
            
//             res.json({message: `Se borra el array ${id}`})
// }
// }

////////////////////////////////////////////////////////

// import {myJson} from "../modelo/portafolio.model";
// import {Request, response, Response} from "express";
// import { request } from "http";

// export const databaseCtrl = {
//     getMyjeson:{req:request, res:response}=>{
//         const result = myJson.getAlljson();
//         res.json({message:result});
//     }
// }

/////////////////// daniel /////////////////////////

// import { myJson } from "../modelo/modelo";
// import { Request, Response} from "express";

// export const databaseCtrl = {
//     getMyjson: (req:Request, res:Response)=>{
//     const result = myJson.getAlljson();
//     res.json({message:result});
// },
// //     getProjects: (req:Request, res:Response)=>{
// //     const result = myJson.getAllprojects();
// //     res.json ({message:result});
// // },
// //     getOneProject: (req:Request, res:Response)=>{
// //     const id = req.params.id;
// //     const result = myJson.getOneProject(id);
// //     res.json ({message:result});
// // }
// }

///////////////////////////////////////////////

import {myJson} from '../model/model'; // se importa la contate de todas las funciones
import {Request,Response} from 'express'; // se importan los tipos NOTA.
export const databaseCtrl = { // volvemos a crear otra constate con las funciones para llevarlas a la ruta
    getMyjson:(req:Request, res:Response)=>{ //se crea la 1era funcion
        const result = myJson.getAlljson(); // se crea una constante que tiene = dos funciones
        res.json({message: result}); // la respuesta message es un formato para que salga en string y el result es la constate
    },
    getProjects:(req:Request, res:Response)=>{
        const result = myJson.getAllprojects();
        res.json({message: result});
    },
    getOneProject:(req:Request, res:Response)=>{
        const id = req.params.id;
        const result = myJson.getOneProject(id);
        res.json({message: result});
    },
    saveOneProject: (req: Request, res: Response) => {
        const project = req.body;
        const result = myJson.createProject(project);
        res.json({message:result});
    }
}