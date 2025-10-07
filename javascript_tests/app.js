/**
 * Application Logic for Testing Playground
 * Contains the interactive functionality for the HTML page
 */

// Global variables for the application
let todoList = [];
let eventCounter = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 JavaScript Testing Playground initialized');
    setupEventListeners();
    loadTodos();
});

// Setup event listeners for interactive elements
function setupEventListeners() {
    // Todo input enter key
    const todoInput = document.getElementById('todo-input');
    if (todoInput) {
        todoInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
    }
    
    // Click test button
    const clickTestBtn = document.getElementById('click-test-btn');
    if (clickTestBtn) {
        clickTestBtn.addEventListener('click', function() {
            eventCounter++;
            updateEventLog('Button clicked! Count: ' + eventCounter);
        });
    }
    
    // Input test
    const inputTest = document.getElementById('input-test');
    if (inputTest) {
        inputTest.addEventListener('input', function() {
            updateEventLog('Input changed: ' + this.value);
        });
    }
}

// Math Operations Testing
function testMathOperations() {
    const resultDiv = document.getElementById('math-result');
    let results = [];
    
    try {
        // Basic operations
        results.push('Addition: 2 + 2 = ' + (2 + 2));
        results.push('Subtraction: 10 - 3 = ' + (10 - 3));
        results.push('Multiplication: 4 * 5 = ' + (4 * 5));
        results.push('Division: 15 / 3 = ' + (15 / 3));
        results.push('Power: 2^3 = ' + Math.pow(2, 3));
        results.push('Square root of 16: ' + Math.sqrt(16));
        results.push('Absolute value of -5: ' + Math.abs(-5));
        results.push('Round 3.7: ' + Math.round(3.7));
        results.push('Ceiling of 3.2: ' + Math.ceil(3.2));
        results.push('Floor of 3.8: ' + Math.floor(3.8));
        
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '<strong>✅ Math Operations Test Passed!</strong><br>' + results.join('<br>');
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ Math Operations Test Failed!</strong><br>' + error.message;
    }
}

// String Operations Testing
function testStringOperations() {
    const resultDiv = document.getElementById('string-result');
    let results = [];
    
    try {
        const testString = "  Hello World  ";
        
        results.push('Original: "' + testString + '"');
        results.push('Length: ' + testString.length);
        results.push('Uppercase: "' + testString.toUpperCase() + '"');
        results.push('Lowercase: "' + testString.toLowerCase() + '"');
        results.push('Trimmed: "' + testString.trim() + '"');
        results.push('Replaced: "' + testString.replace("World", "JavaScript") + '"');
        results.push('Substring (0,5): "' + testString.substring(0, 5) + '"');
        results.push('Includes "Hello": ' + testString.includes("Hello"));
        results.push('Starts with "Hello": ' + testString.trim().startsWith("Hello"));
        results.push('Ends with "World": ' + testString.trim().endsWith("World"));
        
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '<strong>✅ String Operations Test Passed!</strong><br>' + results.join('<br>');
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ String Operations Test Failed!</strong><br>' + error.message;
    }
}

// Array Operations Testing
function testArrayOperations() {
    const resultDiv = document.getElementById('array-result');
    let results = [];
    
    try {
        let testArray = [1, 2, 3, 4, 5];
        
        results.push('Original array: [' + testArray.join(', ') + ']');
        results.push('Length: ' + testArray.length);
        
        // Push
        testArray.push(6);
        results.push('After push(6): [' + testArray.join(', ') + ']');
        
        // Pop
        const popped = testArray.pop();
        results.push('After pop(): [' + testArray.join(', ') + '] (popped: ' + popped + ')');
        
        // Shift
        const shifted = testArray.shift();
        results.push('After shift(): [' + testArray.join(', ') + '] (shifted: ' + shifted + ')');
        
        // Unshift
        testArray.unshift(0);
        results.push('After unshift(0): [' + testArray.join(', ') + ']');
        
        // Map
        const doubled = testArray.map(x => x * 2);
        results.push('Mapped (x2): [' + doubled.join(', ') + ']');
        
        // Filter
        const evens = testArray.filter(x => x % 2 === 0);
        results.push('Filtered (evens): [' + evens.join(', ') + ']');
        
        // Reduce
        const sum = testArray.reduce((acc, curr) => acc + curr, 0);
        results.push('Reduced (sum): ' + sum);
        
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '<strong>✅ Array Operations Test Passed!</strong><br>' + results.join('<br>');
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ Array Operations Test Failed!</strong><br>' + error.message;
    }
}

// Object Operations Testing
function testObjectOperations() {
    const resultDiv = document.getElementById('object-result');
    let results = [];
    
    try {
        let testObj = { name: 'John', age: 30 };
        
        results.push('Original object: ' + JSON.stringify(testObj));
        results.push('Name: ' + testObj.name);
        results.push('Age: ' + testObj['age']);
        
        // Add property
        testObj.city = 'New York';
        results.push('After adding city: ' + JSON.stringify(testObj));
        
        // Modify property
        testObj.age = 31;
        results.push('After modifying age: ' + JSON.stringify(testObj));
        
        // Get keys
        const keys = Object.keys(testObj);
        results.push('Keys: [' + keys.join(', ') + ']');
        
        // Get values
        const values = Object.values(testObj);
        results.push('Values: [' + values.join(', ') + ']');
        
        // Check property existence
        results.push('Has name property: ' + testObj.hasOwnProperty('name'));
        results.push('Has country property: ' + testObj.hasOwnProperty('country'));
        
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '<strong>✅ Object Operations Test Passed!</strong><br>' + results.join('<br>');
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ Object Operations Test Failed!</strong><br>' + error.message;
    }
}

// Element Manipulation Testing
function testElementManipulation() {
    const resultDiv = document.getElementById('element-result');
    let results = [];
    
    try {
        const testParagraph = document.getElementById('test-paragraph');
        const testDiv = document.getElementById('test-div');
        
        // Test text content
        const originalText = testParagraph.textContent;
        testParagraph.textContent = 'Modified by JavaScript test!';
        results.push('Text content modified successfully');
        
        // Test innerHTML
        testParagraph.innerHTML = '<strong>Bold text with <em>emphasis</em></strong>';
        results.push('InnerHTML modified successfully');
        
        // Test style modification
        const originalColor = testDiv.style.backgroundColor;
        testDiv.style.backgroundColor = 'red';
        testDiv.style.width = '200px';
        results.push('Style modified: color=red, width=200px');
        
        // Test class manipulation
        testDiv.classList.add('test-class');
        results.push('Class added successfully');
        
        // Test attribute manipulation
        testDiv.setAttribute('data-test', 'test-value');
        results.push('Attribute added: data-test="test-value"');
        
        // Restore original state
        testParagraph.textContent = originalText;
        testDiv.style.backgroundColor = originalColor;
        testDiv.style.width = '100px';
        testDiv.classList.remove('test-class');
        testDiv.removeAttribute('data-test');
        
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '<strong>✅ Element Manipulation Test Passed!</strong><br>' + results.join('<br>');
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ Element Manipulation Test Failed!</strong><br>' + error.message;
    }
}

// Event Handling Testing
function testEventHandling() {
    const resultDiv = document.getElementById('event-result');
    let results = [];
    
    try {
        // Test programmatic click
        const clickTestBtn = document.getElementById('click-test-btn');
        clickTestBtn.click();
        results.push('Programmatic click triggered');
        
        // Test input programmatically
        const inputTest = document.getElementById('input-test');
        inputTest.value = 'Test input value';
        inputTest.dispatchEvent(new Event('input'));
        results.push('Input event dispatched');
        
        // Test keyboard event
        inputTest.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        results.push('Keyboard event dispatched');
        
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '<strong>✅ Event Handling Test Passed!</strong><br>' + results.join('<br>');
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ Event Handling Test Failed!</strong><br>' + error.message;
    }
}

// Form Validation Testing
function testFormValidation() {
    const resultDiv = document.getElementById('form-result');
    let results = [];
    
    try {
        const form = document.getElementById('test-form');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const ageInput = document.getElementById('age');
        const countrySelect = document.getElementById('country');
        
        // Test required field validation
        nameInput.value = '';
        emailInput.value = '';
        results.push('Empty form validation: ' + !form.checkValidity());
        
        // Test name validation
        nameInput.value = 'John Doe';
        results.push('Name validation: ' + nameInput.checkValidity());
        
        // Test email validation
        emailInput.value = 'invalid-email';
        results.push('Invalid email validation: ' + !emailInput.checkValidity());
        
        emailInput.value = 'john@example.com';
        results.push('Valid email validation: ' + emailInput.checkValidity());
        
        // Test age validation
        ageInput.value = '150';
        results.push('Invalid age validation: ' + !ageInput.checkValidity());
        
        ageInput.value = '25';
        results.push('Valid age validation: ' + ageInput.checkValidity());
        
        // Test select validation
        countrySelect.value = '';
        results.push('Empty select validation: ' + !countrySelect.checkValidity());
        
        countrySelect.value = 'US';
        results.push('Valid select validation: ' + countrySelect.checkValidity());
        
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '<strong>✅ Form Validation Test Passed!</strong><br>' + results.join('<br>');
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ Form Validation Test Failed!</strong><br>' + error.message;
    }
}

// Form Submission Testing
function testFormSubmission() {
    const resultDiv = document.getElementById('form-result');
    let results = [];
    
    try {
        // Fill out form with valid data
        document.getElementById('name').value = 'John Doe';
        document.getElementById('email').value = 'john@example.com';
        document.getElementById('age').value = '30';
        document.getElementById('country').value = 'US';
        document.getElementById('comments').value = 'This is a test comment.';
        
        // Collect form data
        const formData = new FormData(document.getElementById('test-form'));
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        results.push('Form data collected: ' + JSON.stringify(data));
        results.push('Form is valid: ' + document.getElementById('test-form').checkValidity());
        results.push('All required fields filled: ' + (data.name && data.email && data.country));
        
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '<strong>✅ Form Submission Test Passed!</strong><br>' + results.join('<br>');
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ Form Submission Test Failed!</strong><br>' + error.message;
    }
}

// Todo Functionality Testing
function testTodoFunctionality() {
    const resultDiv = document.getElementById('todo-result');
    let results = [];
    
    try {
        // Test adding todos
        addTodoItem('Test Todo 1');
        addTodoItem('Test Todo 2');
        results.push('Added 2 test todos');
        
        // Test todo list length
        results.push('Todo list length: ' + todoList.length);
        
        // Test todo completion
        if (todoList.length > 0) {
            toggleTodo(0);
            results.push('Toggled first todo completion');
            results.push('First todo completed: ' + todoList[0].completed);
        }
        
        // Test todo deletion
        if (todoList.length > 1) {
            deleteTodo(1);
            results.push('Deleted second todo');
            results.push('Todo list length after deletion: ' + todoList.length);
        }
        
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '<strong>✅ Todo Functionality Test Passed!</strong><br>' + results.join('<br>');
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ Todo Functionality Test Failed!</strong><br>' + error.message;
    }
}

// Promise Testing
function testPromises() {
    const resultDiv = document.getElementById('async-result');
    let results = [];
    
    try {
        // Test Promise.resolve
        const resolvedPromise = Promise.resolve('Success!');
        resolvedPromise.then(value => {
            results.push('Promise resolved with: ' + value);
            updateAsyncResults(resultDiv, results);
        });
        
        // Test Promise.reject
        const rejectedPromise = Promise.reject(new Error('Test error'));
        rejectedPromise.catch(error => {
            results.push('Promise rejected with: ' + error.message);
            updateAsyncResults(resultDiv, results);
        });
        
        // Test Promise.all
        const promises = [
            Promise.resolve('First'),
            Promise.resolve('Second'),
            Promise.resolve('Third')
        ];
        
        Promise.all(promises).then(values => {
            results.push('Promise.all result: [' + values.join(', ') + ']');
            updateAsyncResults(resultDiv, results);
        });
        
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ Promise Test Failed!</strong><br>' + error.message;
    }
}

// Async/Await Testing
async function testAsyncAwait() {
    const resultDiv = document.getElementById('async-result');
    let results = [];
    
    try {
        // Simulate async operation
        const asyncFunction = () => {
            return new Promise(resolve => {
                setTimeout(() => resolve('Async operation completed'), 100);
            });
        };
        
        const result = await asyncFunction();
        results.push('Async/await result: ' + result);
        
        // Test multiple async operations
        const promises = [
            new Promise(resolve => setTimeout(() => resolve('First'), 50)),
            new Promise(resolve => setTimeout(() => resolve('Second'), 100)),
            new Promise(resolve => setTimeout(() => resolve('Third'), 150))
        ];
        
        const results_array = await Promise.all(promises);
        results.push('Multiple async results: [' + results_array.join(', ') + ']');
        
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '<strong>✅ Async/Await Test Passed!</strong><br>' + results.join('<br>');
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ Async/Await Test Failed!</strong><br>' + error.message;
    }
}

// Fetch API Testing
async function testFetchAPI() {
    const resultDiv = document.getElementById('fetch-result');
    let results = [];
    
    try {
        // Test fetch with httpbin (a testing service)
        const response = await fetch('https://httpbin.org/json');
        results.push('Fetch response status: ' + response.status);
        results.push('Fetch response ok: ' + response.ok);
        
        if (response.ok) {
            const data = await response.json();
            results.push('Fetch response data received: ' + typeof data);
            results.push('Response has slideshow property: ' + data.hasOwnProperty('slideshow'));
        }
        
        resultDiv.className = 'result success';
        resultDiv.innerHTML = '<strong>✅ Fetch API Test Passed!</strong><br>' + results.join('<br>');
    } catch (error) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '<strong>❌ Fetch API Test Failed!</strong><br>' + error.message;
    }
}

// Todo Application Functions
function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    
    if (text) {
        addTodoItem(text);
        input.value = '';
        renderTodos();
    }
}

function addTodoItem(text) {
    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date()
    };
    todoList.push(todo);
    saveTodos();
}

function toggleTodo(index) {
    if (index >= 0 && index < todoList.length) {
        todoList[index].completed = !todoList[index].completed;
        saveTodos();
        renderTodos();
    }
}

function deleteTodo(index) {
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
        saveTodos();
        renderTodos();
    }
}

function renderTodos() {
    const todoListDiv = document.getElementById('todo-list');
    todoListDiv.innerHTML = '';
    
    todoList.forEach((todo, index) => {
        const todoDiv = document.createElement('div');
        todoDiv.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        todoDiv.innerHTML = `
            <span>${todo.text}</span>
            <div>
                <button onclick="toggleTodo(${index})">${todo.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        todoListDiv.appendChild(todoDiv);
    });
}

function saveTodos() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function loadTodos() {
    const saved = localStorage.getItem('todoList');
    if (saved) {
        todoList = JSON.parse(saved);
        renderTodos();
    }
}

// Utility Functions
function updateEventLog(message) {
    const eventLog = document.getElementById('event-log');
    if (eventLog) {
        const timestamp = new Date().toLocaleTimeString();
        eventLog.innerHTML += `<div>[${timestamp}] ${message}</div>`;
        eventLog.scrollTop = eventLog.scrollHeight;
    }
}

function updateAsyncResults(resultDiv, results) {
    resultDiv.className = 'result success';
    resultDiv.innerHTML = '<strong>✅ Async Test Passed!</strong><br>' + results.join('<br>');
}
