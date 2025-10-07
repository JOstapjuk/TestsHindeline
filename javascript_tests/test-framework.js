/**
 * Simple JavaScript Testing Framework
 * A lightweight testing framework for running tests in the browser
 */

class TestFramework {
    constructor() {
        this.tests = [];
        this.results = [];
        this.currentTest = null;
    }

    // Add a test to the test suite
    test(name, testFunction) {
        this.tests.push({ name, testFunction });
    }

    // Assertion methods
    assert(condition, message = 'Assertion failed') {
        if (!condition) {
            throw new Error(message);
        }
    }

    assertEqual(actual, expected, message = 'Values are not equal') {
        if (actual !== expected) {
            throw new Error(`${message}. Expected: ${expected}, Actual: ${actual}`);
        }
    }

    assertNotEqual(actual, expected, message = 'Values are equal') {
        if (actual === expected) {
            throw new Error(`${message}. Expected: not ${expected}, Actual: ${actual}`);
        }
    }

    assertTrue(condition, message = 'Condition is not true') {
        if (condition !== true) {
            throw new Error(`${message}. Expected: true, Actual: ${condition}`);
        }
    }

    assertFalse(condition, message = 'Condition is not false') {
        if (condition !== false) {
            throw new Error(`${message}. Expected: false, Actual: ${condition}`);
        }
    }

    assertNull(value, message = 'Value is not null') {
        if (value !== null) {
            throw new Error(`${message}. Expected: null, Actual: ${value}`);
        }
    }

    assertNotNull(value, message = 'Value is null') {
        if (value === null) {
            throw new Error(`${message}. Expected: not null, Actual: null`);
        }
    }

    assertUndefined(value, message = 'Value is not undefined') {
        if (value !== undefined) {
            throw new Error(`${message}. Expected: undefined, Actual: ${value}`);
        }
    }

    assertNotUndefined(value, message = 'Value is undefined') {
        if (value === undefined) {
            throw new Error(`${message}. Expected: not undefined, Actual: undefined`);
        }
    }

    assertThrows(fn, expectedError = null, message = 'Function did not throw') {
        try {
            fn();
            throw new Error(message);
        } catch (error) {
            if (expectedError && !(error instanceof expectedError)) {
                throw new Error(`Expected error type ${expectedError.name}, got ${error.constructor.name}`);
            }
        }
    }

    assertContains(array, item, message = 'Array does not contain item') {
        if (!array.includes(item)) {
            throw new Error(`${message}. Array: [${array.join(', ')}], Item: ${item}`);
        }
    }

    assertNotContains(array, item, message = 'Array contains item') {
        if (array.includes(item)) {
            throw new Error(`${message}. Array: [${array.join(', ')}], Item: ${item}`);
        }
    }

    // Run all tests
    async runAll() {
        this.results = [];
        let passed = 0;
        let failed = 0;

        console.log('🧪 Running JavaScript Tests...');
        console.log('='.repeat(50));

        for (const test of this.tests) {
            this.currentTest = test;
            try {
                await test.testFunction();
                this.results.push({ name: test.name, status: 'PASSED', error: null });
                passed++;
                console.log(`✅ ${test.name}`);
            } catch (error) {
                this.results.push({ name: test.name, status: 'FAILED', error: error.message });
                failed++;
                console.log(`❌ ${test.name}: ${error.message}`);
            }
        }

        console.log('='.repeat(50));
        console.log(`Tests completed: ${passed} passed, ${failed} failed`);
        
        return { passed, failed, total: this.tests.length };
    }

    // Get formatted results for display
    getResults() {
        return this.results;
    }

    // Clear all tests
    clear() {
        this.tests = [];
        this.results = [];
    }
}

// Create global test framework instance
window.testFramework = new TestFramework();

// Global test function
window.test = (name, testFunction) => {
    testFramework.test(name, testFunction);
};

// Global assertion functions
window.assertEqual = (actual, expected, message) => testFramework.assertEqual(actual, expected, message);
window.assertNotEqual = (actual, expected, message) => testFramework.assertNotEqual(actual, expected, message);
window.assertTrue = (condition, message) => testFramework.assertTrue(condition, message);
window.assertFalse = (condition, message) => testFramework.assertFalse(condition, message);
window.assertNull = (value, message) => testFramework.assertNull(value, message);
window.assertNotNull = (value, message) => testFramework.assertNotNull(value, message);
window.assertUndefined = (value, message) => testFramework.assertUndefined(value, message);
window.assertNotUndefined = (value, message) => testFramework.assertNotUndefined(value, message);
window.assertThrows = (fn, expectedError, message) => testFramework.assertThrows(fn, expectedError, message);
window.assertContains = (array, item, message) => testFramework.assertContains(array, item, message);
window.assertNotContains = (array, item, message) => testFramework.assertNotContains(array, item, message);

// Utility functions for testing
window.runAllTests = async () => {
    const resultsContainer = document.getElementById('test-results');
    resultsContainer.classList.remove('hidden');
    resultsContainer.innerHTML = '<h4>Running tests...</h4>';
    
    const results = await testFramework.runAll();
    
    let html = `<h4>Test Results (${results.passed}/${results.total} passed)</h4>`;
    
    testFramework.getResults().forEach(result => {
        const statusClass = result.status === 'PASSED' ? 'success' : 'error';
        html += `<div class="${statusClass}">`;
        html += `<strong>${result.status}:</strong> ${result.name}`;
        if (result.error) {
            html += `<br><small>Error: ${result.error}</small>`;
        }
        html += '</div>';
    });
    
    resultsContainer.innerHTML = html;
};

window.clearTestResults = () => {
    const resultsContainer = document.getElementById('test-results');
    resultsContainer.classList.add('hidden');
    resultsContainer.innerHTML = '';
};
