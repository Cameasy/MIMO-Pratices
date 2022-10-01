class Calculator {
    constructor(value){
        this.value = value;
    }
    add(num) {
        this.value += num;
    }
    multiply(num) {
        const value = this.value;
        for (let i = 1; i < num; i++){
            tghis.add(value);
        }
    }
}
const calculator = new Calculator(7);
calculator.multiply(6);
console.log(calculator);