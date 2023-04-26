class Employees {
#salary
#isHired
static #allEmployess = [];
    constructor(name, position, salary, isHired){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
        Employees.#allEmployess.push(this)
    }


    getSalary(){
        return this.#salary;
    }
    setSalary(amount){
        this.#salary = amount;
    }
    getStatus(){
        return this.#isHired;
    }
    setStatus(command){
        if(command == "hire"){
            this.#isHired = true
        }else{
            this.#isHired = false
        }
    }
    static getEmployees(){
        return this.#allEmployess
    }
    static getTotalPayroll(){
        let totalPay = 0
        for(let i=0;i<this.#allEmployess.length;i++){
            console.log(this.#allEmployess[i].name, this.#allEmployess[i].getSalary())
            totalPay = totalPay + this.#allEmployess[i].getSalary();
        }
        return totalPay;
    }

    
}

module.exports = {
    Employees,
}