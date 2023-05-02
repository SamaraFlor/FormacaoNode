const fs = require("fs");
const util = require("util");

// ultil devolve uma nova função
//var nova = util.promisify(funcao anterior);

class Reader{

    constructor(){
        this.Read = util.promisify(fs.readFile);

    }


    async Read(filepath){
        try{
            return await  this.Reader(filepath,"utf8")
        }catch(err){
            return undefined;
        }
      
    }
}

module.exports = Reader;