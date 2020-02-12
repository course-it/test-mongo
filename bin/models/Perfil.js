const mongoos = require ('mongoose')

const PerfilSchema = mongoose.Schema (
    {
        User: {
            type: String
        }, 
        Password: {
            type: String
        }, 
        Nombre: {
            type: String
        },
        Apellido :{
            type: String
        },
        DNI: {
            type: Number
        },
        CursosAprobados :[],
        Telefono : {
            type: Number
        },
        Imagen: {
            type: String
        }

    }

)

module.export = mongoos.module ('Perfil', PerfilSchema)