# Test My Functions - Write tests for your functions!

import pytest
from my_functions import *

def test_add_numbers():
    """Test adding numbers"""
    assert add_numbers(2, 3) == 5
    assert add_numbers(-1, 1) == 0
    assert add_numbers(0, 0) == 0

def test_multiply_numbers():
    """Test multiplying numbers"""
    assert multiply_numbers(3, 4) == 12
    assert multiply_numbers(0, 5) == 0
    assert multiply_numbers(-2, 3) == -6

# TODO: Write tests for the remaining functions!
# You need to write tests for 8 more functions

def test_is_even():
    """Test even number checking"""
    # TODO: Write tests for is_even()
    # Test cases to consider:
    # - Even numbers (4, 6, 8)
    # - Odd numbers (3, 5, 7)
    # - Zero (is 0 even or odd?)
    # - Negative numbers
    assert is_even(4) is True
    assert is_even(0) is True
    assert is_even(-2) is True
    assert is_even(3) is False
    assert is_even(-5) is False

def test_reverse_string():
    """Test string reversal"""
    # TODO: Write tests for reverse_string()
    # Test cases to consider:
    # - Simple strings ("hello", "abc")
    # - Single character ("a")
    # - Empty string ("")
    # - Strings with spaces
    assert reverse_string("hello") == "olleh"
    assert reverse_string("a") == "a"
    assert reverse_string("") == ""
    assert reverse_string("abc def") == "fed cba"

def test_count_vowels():
    """Test vowel counting"""
    # TODO: Write tests for count_vowels()
    # Test cases to consider:
    # - Strings with vowels ("hello", "AEIOU")
    # - Strings with no vowels ("xyz", "123")
    # - Mixed case ("Hello World")
    # - Empty string
    assert count_vowels("hello") == 2
    assert count_vowels("AEIOU") == 5
    assert count_vowels("xyz") == 0
    assert count_vowels("Hello World") == 3
    assert count_vowels("") == 0

def test_factorial():
    """Test factorial calculation"""
    # TODO: Write tests for factorial()
    # Test cases to consider:
    # - Small numbers (3!, 4!, 5!)
    # - Zero (0! = 1)
    # - One (1! = 1)
    # - What happens with negative numbers?
    assert factorial(0) == 1
    assert factorial(1) == 1
    assert factorial(3) == 6
    assert factorial(5) == 120

def test_is_palindrome():
    """Test palindrome checking"""
    # TODO: Write tests for is_palindrome()
    # Test cases to consider:
    # - Palindromes ("racecar", "level", "a")
    # - Not palindromes ("hello", "abc")
    # - Empty string
    # - Single character
    assert is_palindrome("racecar") is True
    assert is_palindrome("level") is True
    assert is_palindrome("a") is True
    assert is_palindrome("") is True
    assert is_palindrome("hello") is False
    assert is_palindrome("abc") is False
    assert is_palindrome("A man, a plan, a canal, Panama") is True

def test_find_max():
    """Test finding maximum value"""
    # TODO: Write tests for find_max()
    # Test cases to consider:
    # - Lists with positive numbers
    # - Lists with negative numbers
    # - Mixed positive and negative
    # - Single element list
    # - What happens with empty list?
    assert find_max([1, 2, 3, 4, 5]) == 5
    assert find_max([-1, -2, -3]) == -1
    assert find_max([3, -5, 10, 0]) == 10
    assert find_max([42]) == 42

def test_remove_duplicates():
    """Test removing duplicates"""
    # TODO: Write tests for remove_duplicates()
    # Test cases to consider:
    # - Lists with duplicates
    # - Lists with no duplicates
    # - Empty list
    # - Single element
    # - Different data types (strings, numbers)
    assert remove_duplicates([1,2,2,3]) == [1,2,3]
    assert remove_duplicates([1,2,3]) == [1,2,3]
    assert remove_duplicates([]) == []
    assert remove_duplicates([5]) == [5]
    assert remove_duplicates(["a","b","a"]) == ["a","b"]

def test_validate_email():
    """Test email validation"""
    # TODO: Write tests for validate_email()
    # Test cases to consider:
    # - Valid emails ("user@example.com", "test@domain.org")
    # - Invalid emails (missing @, missing ., empty string)
    # - Edge cases (multiple @, spaces, etc.)
    assert validate_email("user@example.com") is True
    assert validate_email("test@domain.org") is True
    assert validate_email("invalid-email") is False
    assert validate_email("user@domain") is False
    assert validate_email("") is False

# Bonus: Write some edge case tests
def test_edge_cases():
    """Test edge cases and error handling"""
    # TODO: What edge cases can you think of?
    # - What happens with very large numbers?
    # - What happens with special characters?
    # - What happens with None or empty inputs?
    pass
