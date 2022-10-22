// Types 
type numOrArray = number | number[];
type booleanOrArray = boolean | boolean[];

// Interface

interface Result {
    formula: string,
    sequence: number[],
    constantSequence: number
};

// Classes
class createSequences {

    twoNumbers(num1: number, num2: number, length: number) {

        let arraySequence: number[] = [];

        for (let i = 1; i <= length; i++) {
            arraySequence.push((i - 1) * (num2 - num1) + num1);
        };

        let result: Result = {
            formula: `b = (n - 1) * (${num2} - ${num1}) + ${num1}`,
            sequence: arraySequence,
            constantSequence: 1
        };

        return result;
    };

    threeNumbers(num1: number, num2: number, num3: number, length: number) {
        let constantSequence = (num3 - num1 - (2 * (num2 - num1))) / 2;

        let arraySequence: number[] = [];

        for (let i = 1; i <= length; i++) {
            arraySequence.push(constantSequence * (i - 1) * (i - 2) + (i - 1) * (num2 - num1) + num1);
        }

        let result: Result = {
            formula: `b = ${constantSequence} * (n - 1) * (n - 2) + (n - 1) * (${num2} - ${num1}) + ${num1}`,
            sequence: arraySequence,
            constantSequence
        };

        return result;
    }

    fourNumbers(num1: number, num2: number, num3: number, num4: number, length: number) {
        let { constantSequence } = this.threeNumbers(num1, num2, num3, length);

        let fourConstantSequence = (num4 - constantSequence * 6 - 3 * (num2 - num1) - num1) / 6;

        let arraySequence: number[] = [];
        
        for (let i = 1; i <= length; i++) {
            arraySequence.push(fourConstantSequence * (i - 1) * (i - 2) * (i - 3) + constantSequence * (i - 1) * (i - 2) + (i - 1) * (num2 - num1) + num1);
        };
        
        let result: Result = {
            formula: `b = ${fourConstantSequence} * (n - 1) * (n - 2) * (n - 3) + ${constantSequence} * (n - 1) * (n - 2) + (n - 1) * (${num2} - ${num1}) + ${num1}`,
            sequence: arraySequence,
            constantSequence: fourConstantSequence
        };

        return result;
    }
}

export class Sequences extends createSequences {

    private fibonacci(num: number): boolean {
        let fibonacciSequence: number[] = [0, 1];

        for (let i: number = 1; i <= num; i++) {

            let numberSequence = fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[i - 1]);

            if (fibonacciSequence[numberSequence - 1] === num) return true;
        };

        return num === 0 || num === 1;
    };

    isFibonacci(num: numOrArray): booleanOrArray {

        if (typeof num === "number") {
            return this.fibonacci(num);
        } else {
            let result = num.map((num) => {
                return this.fibonacci(num);
            });
            return result;
        }
    }
}