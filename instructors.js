const fs = require('fs')
const data = require('./data.json')

//create
exports.post = function(req,res){

    //Verificação se todos os campos foram preenchidos
    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == ""){
            return res.send("Please, fill all fields!")
        }
    }

    //Organizando os dados
    let {name, avatar_url, birth, gender, services} = req.body

    //Tratamento dos dados
    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    //Adicionando um objeto novo ao array
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    })

    //Escrevendo o objeto no data.json
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err){
            return res.send("write fil error!")
        }
        return res.redirect("/instructors")
    })

    // return res.send(req.body)
}


//update



//delete