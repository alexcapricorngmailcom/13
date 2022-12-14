//1) Треугольник. Напишите цикл,  который выводит в консоль (console.log()) такой треугольник:
// #
// ##
// ###
// ####
// #####
// ######
// #######


let a = '';

for (let i = 0; i < 7; i++) {
    console.log(a += '#');
}

console.log('');
console.log('============');
console.log('');

// 2) FizzBuzz. Напишите программу, которая выводит через console.log() все числа от 1 до 100, с двумя исключениями. 
// Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’. 
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + "-" + 'FizzBuzz');
    } else if (i % 3 == 0 ) {
        console.log(i + "-" + 'Fizz');
    } else if (i % 5 == 0 ) {
        console.log(i + "-" + 'Buzz');
    }
    
}

console.log('');
console.log('============');
console.log('');

// 3) Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, 
// в которой линии разделяются символами новой строки \n. На каждой позиции либо пробел, либо #. 
// В результате должна получиться шахматная доска.
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

let b = '';

for (i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
        b = ' ';
        for (let j = 1; j <= 4; j++) {
            b = b + "# "
        }
        console.log(b);
        b = '';
    } else {
        for (let j = 1; j <= 4; j++) {
            b = b + "# "
        }
        console.log(b);
        b = '';
    }
}

console.log('');
console.log('============');
console.log('');

// мышыная оптимизация

for (i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
        b = ' ';
    } 

    for (let j = 1; j <= 4; j++) {
        b = b + "# "
    }
    console.log(b);
    b = '';
}