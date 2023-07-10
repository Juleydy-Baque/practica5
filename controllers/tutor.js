
// const tutor = [{
//     "id": "01",
//     "nombre": "John",
//     "identificacion": "1310002454"
// }];
const tutor = [];

const getTutor = (req, res)=>{
    // res.send("En consola se muestran los datos")
    res.json({
        tutor
})
    
    for(let i = 0; i<tutor.length; i++){
        console.log(tutor[i])
    }

    return tutor;
}

const postTutor = (req, res)=>{
    const {id, nombre, identificacion, experticia} = req.body;
    // res.json({
    //     id,
    //     nombre,
    //     identificacion
    //     experticia
    // })
    const newTut = {...req.body};
    
    // let data = JSON.stringify(req.body)
    tutor.push({newTut})
    res.send("correcto")
    console.log(newTut)
}

module.exports = {getTutor, postTutor}