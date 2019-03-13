const gf = require("./generateFile")
/**
 * Parser
 * @param {*} json - json com as especificações da rota
 * @param {string} dir - diretório onde o arquivo vai ser salvo
 * @param {string} name - nome do arquivo, por default é index
 */
function Parser(json,dir,name="index"){
    try {
        const imports = []
        const routes = []
        for(let key in json){
            if(json[key].type == "group"){
                console.log(`cria arquivo ${key}.js`)
                imports.push(key)
                Parser(json[key].routes, dir, key)
            }else{
                routes.push({...json[key],name:key})
            }
        }
        const content = gf.createContent(imports,routes)
        console.log(gf.generateFile(name,dir,content))   
    } catch (error) {
        console.error(error)
    }
}

module.exports = Parser
