const env = require("../credentials/env.json")
const app = require("../server/app")
const http = env.protocol=="https"?require("https").Server(app):require("http").Server(app)


http.listen(env.port,env.host,function(){
    console.log(`Ouvindo em ${env.protocol=="https"?"https":"http"}://${env.host}:${env.port}`)
})
