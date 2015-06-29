function FizzBuzzer(numbers) {
    this.numbers = numbers;
    return {
        fizz: function() {
            for(var i = 0; i < numbers.length; i++) {
                if(numbers[i]%3 ==0 && numbers[i]%5 == 0) {
                    console.log(numbers[i]);
                } else if(numbers[i]%3 == 0) {
                    console.log('fizz');
                } else {
                    console.log(numbers[i]);
                }
            }
        },
        buzz: function() {
            for(var i = 0; i < numbers.length; i++) {
                if(numbers[i]%3 ==0 && numbers[i]%5 == 0) {
                    console.log(numbers[i]);
                } else if(numbers[i]%5 == 0) {
                    console.log('buzz');
                } else {
                    console.log(numbers[i]);
                }
            }
        },
        fizzbuzz: function() {
            for(var i = 0; i < numbers.length; i++) {
                if(numbers[i]%3 == 0 && numbers[i]%5 == 0) {
                    console.log('fizzbuzz');
                } else {
                    console.log(numbers[i]);
                }
            }
        }
    };
}

var myFizzBuzzer = new FizzBuzzer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

//myFizzBuzzer.fizz();
myFizzBuzzer.buzz();
//myFizzBuzzer.fizzbuzz();