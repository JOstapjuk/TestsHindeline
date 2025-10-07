/**
 * JavaScript Test Suite
 * Simple examples of JavaScript testing
 */

// Basic Math Operations Tests
test('Addition should work correctly', () => {
    assertEqual(2 + 2, 4);
    assertEqual(10 + 5, 15);
});

test('Multiplication should work correctly', () => {
    assertEqual(3 * 4, 12);
    assertEqual(2 * 0, 0);
});

// String Operations Tests
test('String operations should work', () => {
    const str = "Hello World";
    assertEqual(str.length, 11);
    assertEqual(str.toUpperCase(), "HELLO WORLD");
    assertEqual(str.toLowerCase(), "hello world");
});

test('String concatenation should work', () => {
    assertEqual("Hello" + " " + "World", "Hello World");
    assertEqual("JavaScript" + "3", "JavaScript3");
});

// Array Operations Tests
test('Array operations should work', () => {
    const arr = [1, 2, 3];
    assertEqual(arr.length, 3);
    arr.push(4);
    assertEqual(arr.length, 4);
    assertEqual(arr[3], 4);
});

test('Array methods should work', () => {
    const arr = [1, 2, 3, 4, 5];
    const doubled = arr.map(x => x * 2);
    assertEqual(doubled[0], 2);
    assertEqual(doubled[1], 4);
    
    const evens = arr.filter(x => x % 2 === 0);
    assertEqual(evens.length, 2);
});

// Object Operations Tests
test('Object operations should work', () => {
    const obj = { name: "John", age: 30 };
    assertEqual(obj.name, "John");
    assertEqual(obj["age"], 30);
    
    obj.city = "New York";
    assertEqual(obj.city, "New York");
});

// DOM Manipulation Tests
test('Element selection should work', () => {
    const element = document.getElementById('test-paragraph');
    assertNotNull(element);
    assertEqual(element.tagName, 'P');
});

// Function Tests
test('Function should execute and return values', () => {
    function add(a, b) {
        return a + b;
    }
    assertEqual(add(2, 3), 5);
    
    const multiply = (a, b) => a * b;
    assertEqual(multiply(3, 4), 12);
});

// Error Handling Tests
test('Try-catch should handle errors', () => {
    let errorCaught = false;
    try {
        throw new Error("Test error");
    } catch (e) {
        errorCaught = true;
        assertEqual(e.message, "Test error");
    }
    assertTrue(errorCaught);
});

// Async Operations Tests
test('Promise should resolve correctly', async () => {
    const promise = Promise.resolve("success");
    const result = await promise;
    assertEqual(result, "success");
});

// JSON Tests
test('JSON operations should work', () => {
    const obj = { name: "John", age: 30 };
    const json = JSON.stringify(obj);
    assertEqual(typeof json, "string");
    assertTrue(json.includes("John"));
    
    const parsed = JSON.parse(json);
    assertEqual(parsed.name, "John");
});

// Browser API Tests
test('Browser APIs should be available', () => {
    assertNotNull(window.location);
    assertNotNull(window.document);
    assertNotNull(console.log);
    assertTrue(typeof console.log === "function");
});

// TODO: Add your own JavaScript tests here!
// Write 8-10 tests that explore different JavaScript features

test('My custom math test', () => {
    assertEqual(15 + 25, 40);
    assertEqual(100 / 4, 25);
    // mine
    assertEqual(10 - 3, 7);
    assertEqual(5 - 10, -5);
});

test('My custom string test', () => {
    const greeting = "Hello, World!";
    assertTrue(greeting.includes("Hello"));
    assertEqual(greeting.toUpperCase(), "HELLO, WORLD!");
    //mine
    const words = greeting.split(", ");
    assertEqual(words[0], "Hello");
    assertEqual(words[1], "World!");
});

test('My custom array test', () => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(x => x * 2);
    assertEqual(doubled[0], 2);
    assertEqual(doubled.length, 5);
    //mine
    const evens = numbers.filter(n => n % 2 === 0);
    assertEqual(evens.length, 2);
    assertEqual(evens[0], 2);
});

test('My custom object test', () => {
    const person = { name: "Alice", age: 25 };
    assertEqual(person.name, "Alice");
    assertEqual(person.age, 25);
    //mine
    person.city = "New York";
    assertEqual(person.city, "New York");
});

// Write 6 more tests! Ideas:
// - Test more math operations (subtraction, multiplication, modulo)
// - Test string methods (split, join, replace, substring)
// - Test array methods (filter, reduce, sort, concat)
// - Test date operations
// - Test JSON operations (stringify, parse)
// - Test regular expressions
// - Test error handling (try/catch)

test('Subtraction and modulo operations', () => {
    assertEqual(10 - 3, 7);
    assertEqual(25 % 4, 1);
});

test('String split, join, and replace', () => {
    const text = "apple,banana,orange";
    const fruits = text.split(",");
    assertEqual(fruits.length, 3);
    assertEqual(fruits.join("-"), "apple-banana-orange");
    assertEqual(text.replace("banana", "grape"), "apple,grape,orange");
});

test('Array filter', () => {
    const numbers = [5, 2, 8, 1, 4];
    const evens = numbers.filter(n => n % 2 === 0);
    assertEqual(evens.length, 3);
});

test('Date operations', () => {
    const today = new Date("2025-10-07");
    assertEqual(today.getFullYear(), 2025);
    assertEqual(today.getMonth(), 9);
    assertEqual(today.getDate(), 7);
});

test('JSON stringify and parse', () => {
    const obj = { x: 10, y: 20 };
    const json = JSON.stringify(obj);
    const parsed = JSON.parse(json);
    assertEqual(parsed.x, 10);
    assertEqual(parsed.y, 20);
});

test('Simple number string check', () => {
    const str1 = "12";
    const str2 = "1";
    const str3 = "123";
    
    assertTrue(str1.length === 2);
    assertFalse(str2.length === 2);
    assertFalse(str3.length === 2); 
});
