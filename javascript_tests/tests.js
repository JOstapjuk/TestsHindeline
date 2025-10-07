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
