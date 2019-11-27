const fs = require("fs")

/**
 * imports
 * @description retorna uma string com todas as depencias de rotas
 * @param {Array<string>} imports - array com todas as rotas de
 * @returns {string}
 */
function getImports(imports){
    let result = "";
    for(let i of imports){
        result += `const ${i} = require('./${i}.js')\n`
    }
    return result
}

/**
 * getRoutes
 * @description
 * @param {Array<string>} imports - array com todas as rotas de
 * @param {Array<Object>} routes - array com os objetos da rota 
 * @param {string} routes[].name - nome da rota
 * @param {string} routes[].path - camindo da rota
 * @param {string} routes[].type - tipo da rota (group, post, put, delete, get...)
 * @returns {string}
 */
function getRoutes(imports, routes){
    let result = "";
    for(let i of imports){
        result += `router.use('/${i}',${i});\n\n`
    }
    for(let r of routes){
        result += `//${r.name}\n`
        result += `router.${r.type}('/${r.path}',function(req, res){\n\tres.send(${JSON.stringify(r.response)})\n});\n\n`
    }
    return result
}
/**
 * createContent
 * @description cria o conteudo de toda a página 
 * @param {Array<string>} imports - array com todas as rotas de
 * @param {Array<Object>} routes - array com os objetos da rota 
 * @param {string} routes[].name - nome da rota
 * @param {string} routes[].path - camindo da rota
 * @param {string} routes[].type - tipo da rota (group, post, put, delete, get...)
 * @returns {string}
 */
function createContent(imports, routes){
return (
`const express = require("express");
const router = express.Router();
${getImports(imports)}
${getRoutes(imports,routes)}
module.exports = router
`)

}


/**
 * generateApp
 * @returns {string}
 * 
 */
function generateApp(){
    return (
    `const express = require("express");
    const app = express();
    const routes = require("./routes.js");
    app.use(routes);
    
    const port = process.env.PORT || 3000;

    app.listen(port, () => { console.log(\`Listening on port \${port}\`) })

    `)
}

/**
 * generateFile
 * @param {string} name nome do aquivo
 * @param {string} dir diretorio do arquivo
 * @param {string} content conteudo do arquivo
 * @returns {string}
 * @returns {Error}
 */
function generateFile(name, dir, content){
    try {
        if(dir[dir.length-1] != '/'){
            if(dir[dir.length-1] == `\\`) dir[dir.length-1] = '/'
            else dir += '/'
        }
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        
        fs.writeFileSync(`${dir}${name}.js`,content)
        return `Arquivo ${name} criado em ${dir} com sucesso`
    } catch (error) {
        return new Error("Impossível criar arquivo")
    }
}

module.exports.createContent = createContent
module.exports.generateFile = generateFile
module.exports.generateApp   = generateApp
