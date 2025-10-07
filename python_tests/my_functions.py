# My Functions - Implement these functions and then test them!

def add_numbers(a, b):
    """Add two numbers together
    
    Args:
        a (int): First number
        b (int): Second number
        
    Returns:
        int: Sum of a and b
        
    Examples:
        add_numbers(2, 3) should return 5
        add_numbers(-1, 1) should return 0
    """
    return a + b

def multiply_numbers(a, b):
    """Multiply two numbers
    
    Args:
        a (int): First number
        b (int): Second number
        
    Returns:
        int: Product of a and b
        
    Examples:
        multiply_numbers(3, 4) should return 12
        multiply_numbers(0, 5) should return 0
    """
    return a * b

def is_even(number):
    """Check if a number is even
    
    Args:
        number (int): Number to check
        
    Returns:
        bool: True if even, False if odd
        
    Examples:
        is_even(4) should return True
        is_even(7) should return False
    """
    return number % 2 == 0

def reverse_string(text):
    """Reverse a string
    
    Args:
        text (str): String to reverse
        
    Returns:
        str: Reversed string
        
    Examples:
        reverse_string("hello") should return "olleh"
        reverse_string("abc") should return "cba"
    """
    return text[::-1]

def count_vowels(text):
    """Count vowels in a string (a, e, i, o, u - case insensitive)
    
    Args:
        text (str): String to count vowels in
        
    Returns:
        int: Number of vowels
        
    Examples:
        count_vowels("hello") should return 2
        count_vowels("AEIOU") should return 5
    """
    return sum(1 for i in text.lower() if i in "aeiou")

def factorial(n):
    """Calculate factorial of n (n!)
    
    Args:
        n (int): Number to calculate factorial for
        
    Returns:
        int: Factorial of n
        
    Examples:
        factorial(5) should return 120 (5! = 5*4*3*2*1)
        factorial(3) should return 6 (3! = 3*2*1)
    """
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

def is_palindrome(text):
    """Check if text reads the same forwards and backwards
    
    Args:
        text (str): String to check
        
    Returns:
        bool: True if palindrome, False otherwise
        
    Examples:
        is_palindrome("racecar") should return True
        is_palindrome("hello") should return False
    """
    cleaned = ''.join(i.lower() for i in text if i.isalnum())
    return cleaned == cleaned[::-1]

def find_max(numbers):
    """Find the largest number in a list
    
    Args:
        numbers (list): List of numbers
        
    Returns:
        int: Largest number in the list
        
    Examples:
        find_max([1, 5, 3, 9, 2]) should return 9
        find_max([-1, -5, -3]) should return -1
    """
    return max(numbers)

def remove_duplicates(items):
    """Remove duplicate items from a list
    
    Args:
        items (list): List with possible duplicates
        
    Returns:
        list: List with duplicates removed
        
    Examples:
        remove_duplicates([1, 2, 2, 3, 3, 3]) should return [1, 2, 3]
        remove_duplicates(['a', 'b', 'a', 'c']) should return ['a', 'b', 'c']
    """
    return list(dict.fromkeys(items))

def validate_email(email):
    """Check if email format is valid (contains @ and .)
    
    Args:
        email (str): Email address to validate
        
    Returns:
        bool: True if valid format, False otherwise
        
    Examples:
        validate_email("user@example.com") should return True
        validate_email("invalid-email") should return False
    """
    if "@" not in email:
        return False
    return "." in email.split("@")[-1]
