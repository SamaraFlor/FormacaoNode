class Processor{
    static Process(data){

        var a = data.split("\r\n");
        var rows = [];
 
        //percorrendo array
        a.forEach(row => {
           var arr =  row.split(",");
           rows.push(arr);
            
        });

        console.log(rows);
    }

    
}

module.exports = Processor;