class Table{

    constructor(arr){
        this.header = err[0];
        arr.shift();
        this.rows =  arr;
    }

    get RuwCount(){
        return this.rows.legth;
    }

    get ColummCount(){
        return this.header.legth;
    }



}

module.exports = Table;