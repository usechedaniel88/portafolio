

// const messages: Array<string> = ["name", "age", "direction","image","phone" ,"url","email"];


// export const messageModel = {
//     getMessages:()=>{
//         return messages;
//     },

//     saveMessage:(message:string)=>{
//         console.log(message)
//         messages.push(message)
//         const id = messages.findIndex(element => element===message);
//         return id;
//     }
// }

////////////////////////////////////////////////////////////////

// const mensajes: Array<string> = [];

// export const mensajeModel = {
//     getMensajes: () => {
//         return mensajes;
//     },
//     saveMensaje: (mensaje: string) => {
//         console.log(mensaje)
//         mensajes.push(mensaje)
//         const id = mensajes.findIndex(element => element === mensaje);
//         return id;
//     },

//     changeMensaje : (id:number, mensaje: string) => {
//         console.log (mensaje)
//         mensajes[id] = mensaje;
//         return mensaje;
//     },

//     deleteMensaje: (id:number, mensaje: string) =>{
//         console.log (mensaje);
//         mensajes.splice(id,1);
//         return mensaje;

//     }

// }

/////////////////////// daniel ///////////////////////////////




// import {database} from "./cv.json";

// export const myJson = {
//      getAlljson: ()=>{
//         return database;
//      },
//    }
   //   getAllprojects: ()=>{
   //    return database.projects;
   //  },
   //  getOneProject: (position:string)=>{
   //    return database.projects[Number{position}];
   //  }
   // }


   ///////////////////////////////////////////////

   import {database} from "./datos.json"; //se importa el objeto
export const myJson = { // se crea una constante con las funciones q se van a exportar
    getAlljson: ()=>{  // se crea la 1era funcion en este caso es traer todo el json
        return database; // devolver todo el objeto json
        
    },
    getAllprojects: ()=>{
        return database.projects;
        
    },
    getOneProject: (position:string)=>{
        return database.projects[Number(position)];
      
    },
    createProject: (project: any)=>{
      database.projects.push(project);
      return database.projects
    },
} 