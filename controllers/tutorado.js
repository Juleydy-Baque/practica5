// const tutorado = [{
//     "id": "01",
//     "concepto": "John",
//     "identificación": "1310002454"
// }];
const tutorado = [];
const getTutorado = (req, res)=>{
    res.json({
        tutorado
    })
    
    for(let i = 0; i<tutorado.length; i++){
        console.log(tutorado[i])
    }

    return tutorado;
}

const postTutorado = (req, res)=>{
    const {id, nombre, identificación} = req.body;
   
    const newTut = {...req.body};
    
    tutorado.push({newTut})
    res.send("correcto")
    console.log(newTut)
}

module.exports = {getTutorado, postTutorado}