var axios=require("axios").default;

async function coneccionFalsa(){
    try{
        //let respuesta=await axios.get('https://conexionfalsa.com/password'); //incorrecta
        let respuesta=await axios.get('https://pokeapi.co/api/v2/pokemon/2000');//correcta
        console.log(respuesta.status);
        console.log(respuesta.data);        
    }catch(err){
        console.log(err.message);        
    }finally{
        console.log("fin");
    }
}

    coneccionFalsa();

// console.log("despues del error");

// try {
//     console.log(variableQueNoExiste);    
// } catch (error) {
//     console.log(error.message);
// }

