/**
 * JavaScript Test Suite
 * Comprehensive tests for various JavaScript functionality
 */

// Basic Math Operations Tests
test('Addition should work correctly', () => {
    assertEqual(2 + 2, 4);
    assertEqual(10 + 5, 15);
    assertEqual(-1 + 1, 0);
    assertEqual(0.1 + 0.2, 0.30000000000000004); // Floating point precision
});

test('Subtraction should work correctly', () => {
    assertEqual(5 - 3, 2);
    assertEqual(10 - 7, 3);
    assertEqual(0 - 5, -5);
    assertEqual(100 - 50, 50);
});

test('Multiplication should work correctly', () => {
    assertEqual(3 * 4, 12);
    assertEqual(2 * 0, 0);
    assertEqual(-2 * 3, -6);
    assertEqual(2.5 * 4, 10);
});

test('Division should work correctly', () => {
    assertEqual(10 / 2, 5);
    assertEqual(15 / 3, 5);
    assertEqual(7 / 2, 3.5);
    assertEqual(1 / 3, 0.3333333333333333);
});

test('Power operation should work correctly', () => {
    assertEqual(Math.pow(2, 3), 8);
    assertEqual(2 ** 3, 8);
    assertEqual(5 ** 2, 25);
    assertEqual(10 ** 0, 1);
});

// String Operations Tests
test('String length should be correct', () => {
    assertEqual("hello".length, 5);
    assertEqual("".length, 0);
    assertEqual("JavaScript".length, 10);
});

test('String concatenation should work', () => {
    assertEqual("Hello" + " " + "World", "Hello World");
    assertEqual("JavaScript" + "3", "JavaScript3");
    assertEqual("".concat("test"), "test");
});

test('String case conversion should work', () => {
    assertEqual("hello".toUpperCase(), "HELLO");
    assertEqual("WORLD".toLowerCase(), "world");
    assertEqual("JavaScript".toUpperCase(), "JAVASCRIPT");
});

test('String trimming should work', () => {
    assertEqual("  hello  ".trim(), "hello");
    assertEqual("\tpython\n".trim(), "python");
    assertEqual("  ".trim(), "");
});

test('String replacement should work', () => {
    assertEqual("Hello World".replace("World", "JavaScript"), "Hello JavaScript");
    assertEqual("test test".replace(/test/g, "example"), "example example");
});

// Array Operations Tests
test('Array length should be correct', () => {
    assertEqual([1, 2, 3].length, 3);
    assertEqual([].length, 0);
    assertEqual(["a", "b", "c", "d"].length, 4);
});

test('Array push should add elements', () => {
    const arr = [1, 2];
    arr.push(3);
    assertEqual(arr.length, 3);
    assertEqual(arr[2], 3);
});

test('Array pop should remove last element', () => {
    const arr = [1, 2, 3];
    const popped = arr.pop();
    assertEqual(popped, 3);
    assertEqual(arr.length, 2);
});

test('Array indexOf should find elements', () => {
    const arr = ["a", "b", "c"];
    assertEqual(arr.indexOf("b"), 1);
    assertEqual(arr.indexOf("d"), -1);
});

test('Array includes should work correctly', () => {
    const arr = [1, 2, 3, 4, 5];
    assertTrue(arr.includes(3));
    assertFalse(arr.includes(6));
});

test('Array map should transform elements', () => {
    const arr = [1, 2, 3];
    const doubled = arr.map(x => x * 2);
    assertEqual(doubled.length, 3);
    assertEqual(doubled[0], 2);
    assertEqual(doubled[1], 4);
    assertEqual(doubled[2], 6);
});

test('Array filter should filter elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const evens = arr.filter(x => x % 2 === 0);
    assertEqual(evens.length, 2);
    assertEqual(evens[0], 2);
    assertEqual(evens[1], 4);
});

test('Array reduce should accumulate values', () => {
    const arr = [1, 2, 3, 4];
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    assertEqual(sum, 10);
});

// Object Operations Tests
test('Object property access should work', () => {
    const obj = { name: "John", age: 30 };
    assertEqual(obj.name, "John");
    assertEqual(obj["age"], 30);
});

test('Object property modification should work', () => {
    const obj = { name: "John" };
    obj.age = 30;
    assertEqual(obj.age, 30);
    obj["city"] = "New York";
    assertEqual(obj.city, "New York");
});

test('Object keys should be retrievable', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = Object.keys(obj);
    assertEqual(keys.length, 3);
    assertTrue(keys.includes("a"));
    assertTrue(keys.includes("b"));
    assertTrue(keys.includes("c"));
});

test('Object values should be retrievable', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const values = Object.values(obj);
    assertEqual(values.length, 3);
    assertTrue(values.includes(1));
    assertTrue(values.includes(2));
    assertTrue(values.includes(3));
});

// DOM Manipulation Tests
test('Element selection should work', () => {
    const element = document.getElementById('test-paragraph');
    assertNotNull(element);
    assertEqual(element.tagName, 'P');
});

test('Element text content should be accessible', () => {
    const element = document.getElementById('test-paragraph');
    assertNotNull(element);
    assertNotUndefined(element.textContent);
});

test('Element style modification should work', () => {
    const element = document.getElementById('test-div');
    assertNotNull(element);
    const originalColor = element.style.backgroundColor;
    element.style.backgroundColor = 'red';
    assertEqual(element.style.backgroundColor, 'red');
    element.style.backgroundColor = originalColor; // Restore
});

// Function Tests
test('Function should execute and return values', () => {
    function add(a, b) {
        return a + b;
    }
    assertEqual(add(2, 3), 5);
    assertEqual(add(-1, 1), 0);
});

test('Arrow functions should work', () => {
    const multiply = (a, b) => a * b;
    assertEqual(multiply(3, 4), 12);
});

test('Function with default parameters should work', () => {
    function greet(name = "World") {
        return `Hello, ${name}!`;
    }
    assertEqual(greet(), "Hello, World!");
    assertEqual(greet("John"), "Hello, John!");
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

test('Function should throw expected errors', () => {
    function divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }
    
    assertEqual(divide(10, 2), 5);
    assertThrows(() => divide(10, 0), Error, "Should throw division by zero error");
});

// Type Checking Tests
test('Type checking should work correctly', () => {
    assertEqual(typeof 42, "number");
    assertEqual(typeof "hello", "string");
    assertEqual(typeof true, "boolean");
    assertEqual(typeof undefined, "undefined");
    assertEqual(typeof null, "object"); // JavaScript quirk
    assertEqual(typeof {}, "object");
    assertEqual(typeof [], "object");
    assertEqual(typeof function() {}, "function");
});

test('Instanceof should work correctly', () => {
    assertTrue([] instanceof Array);
    assertTrue({} instanceof Object);
    assertFalse("hello" instanceof Array);
});

// Date Tests
test('Date creation should work', () => {
    const date = new Date();
    assertNotNull(date);
    assertTrue(date instanceof Date);
});

test('Date methods should work', () => {
    const date = new Date(2023, 11, 25); // December 25, 2023
    assertEqual(date.getFullYear(), 2023);
    assertEqual(date.getMonth(), 11); // 0-indexed
    assertEqual(date.getDate(), 25);
});

// JSON Tests
test('JSON stringify should work', () => {
    const obj = { name: "John", age: 30 };
    const json = JSON.stringify(obj);
    assertEqual(typeof json, "string");
    assertTrue(json.includes("John"));
    assertTrue(json.includes("30"));
});

test('JSON parse should work', () => {
    const json = '{"name":"John","age":30}';
    const obj = JSON.parse(json);
    assertEqual(obj.name, "John");
    assertEqual(obj.age, 30);
});

// Regular Expression Tests
test('Regular expressions should work', () => {
    const text = "Hello World";
    const regex = /world/i;
    assertTrue(regex.test(text));
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    assertTrue(emailRegex.test("test@example.com"));
    assertFalse(emailRegex.test("invalid-email"));
});

// Async Operations Tests
test('Promise should resolve correctly', async () => {
    const promise = Promise.resolve("success");
    const result = await promise;
    assertEqual(result, "success");
});

test('Promise should reject correctly', async () => {
    const promise = Promise.reject(new Error("test error"));
    try {
        await promise;
        throw new Error("Promise should have rejected");
    } catch (error) {
        assertEqual(error.message, "test error");
    }
});

// Local Storage Tests
test('Local storage should work', () => {
    const key = "test_key";
    const value = "test_value";
    
    localStorage.setItem(key, value);
    assertEqual(localStorage.getItem(key), value);
    
    localStorage.removeItem(key);
    assertNull(localStorage.getItem(key));
});

// Window Object Tests
test('Window object should have expected properties', () => {
    assertNotNull(window.location);
    assertNotNull(window.document);
    assertNotNull(window.console);
});

// Performance Tests
test('Performance timing should be available', () => {
    assertNotNull(performance);
    assertNotNull(performance.now);
    assertTrue(typeof performance.now() === "number");
});

// Browser API Tests
test('Fetch API should be available', () => {
    assertNotNull(fetch);
    assertTrue(typeof fetch === "function");
});

test('RequestAnimationFrame should be available', () => {
    assertNotNull(requestAnimationFrame);
    assertTrue(typeof requestAnimationFrame === "function");
});

// Console Tests
test('Console methods should be available', () => {
    assertNotNull(console.log);
    assertNotNull(console.error);
    assertNotNull(console.warn);
    assertNotNull(console.info);
    assertTrue(typeof console.log === "function");
});
