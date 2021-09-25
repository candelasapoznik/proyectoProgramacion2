let usuarios = {
    lista: [
            {
                id: 1,
                email: "moxfulder@yahoo.com",
                documento: 73148074,
                constraseña: "moxfulder",
                fotoDePerfil: "/foto1.jpg",
                nombre: "Moxy",
                apellido: "Fulder",
                edad: 26
            },
            {
                
                id: 2,
                email: "dcoppit@live.com",
                documento: 82210447,
                constraseña: "dcoppit",
                fotoDePerfil: "/foto9.jpg",
                nombre: "Damian",
                apellido: "Coppit",
                edad: 32            
            },
            {
                
                id: 3,
                email: "gonzalesmaria@yahoo.com.ar",
                documento: 44993031,
                constraseña: "gonzalesmaria1",
                fotoDePerfil: "/foto3.jpg",
                nombre: "Maria",
                apellido: "Gonzales",
                edad: 18            
            },
            {
                
                id: 4,
                email: "marianorodr@hotmail.com",
                documento: 16745667,
                constraseña: "mariano1234",
                fotoDePerfil: "/foto8.jpg",
                nombre: "Mariano",
                apellido: "Rodriguez",
                edad: 34
            },
            {
                
                id: 5,
                email: "camilasenna@hotmail.com",
                documento: 42993039,
                constraseña: "camilasen12",
                fotoDePerfil: "/foto5.jpg",
                nombre: "Camila",
                apellido: "Senna",
                edad: 18
            },
        ],
        buscarPorId: function (idUsuario){
            for (let i=0; i< usuarios.lista.length; i++){
                if(usuarios.lista[i].id == idUsuario){
                    let resultado = usuarios.lista[i];
                    return resultado;
                }
            }
        },

    }

module.exports = usuarios;