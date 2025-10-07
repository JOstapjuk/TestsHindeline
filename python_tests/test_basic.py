import pytest
import math


class TestBasicMath:
    """Basic math operations tests"""
    
    def test_addition(self):
        """Test basic addition"""
        assert 2 + 2 == 4
        assert 10 + 5 == 15
        assert -1 + 1 == 0
    
    def test_subtraction(self):
        """Test basic subtraction"""
        assert 5 - 3 == 2
        assert 10 - 7 == 3
        assert 0 - 5 == -5
    
    def test_multiplication(self):
        """Test basic multiplication"""
        assert 3 * 4 == 12
        assert 2 * 0 == 0
        assert -2 * 3 == -6
    
    def test_division(self):
        """Test basic division"""
        assert 10 / 2 == 5
        assert 15 / 3 == 5
        assert 7 / 2 == 3.5
    
    def test_square_root(self):
        """Test square root function"""
        assert math.sqrt(16) == 4
        assert math.sqrt(25) == 5
        assert math.sqrt(0) == 0
    
    def test_power(self):
        """Test power function"""
        assert 2 ** 3 == 8
        assert 5 ** 2 == 25
        assert 10 ** 0 == 1


class TestStringOperations:
    """String operations tests"""
    
    def test_string_length(self):
        """Test string length"""
        assert len("hello") == 5
        assert len("") == 0
        assert len("Python") == 6
    
    def test_string_concatenation(self):
        """Test string concatenation"""
        assert "Hello" + " " + "World" == "Hello World"
        assert "Python" + "3" == "Python3"
    
    def test_string_upper(self):
        """Test string uppercase"""
        assert "hello".upper() == "HELLO"
        assert "python".upper() == "PYTHON"
    
    def test_string_lower(self):
        """Test string lowercase"""
        assert "HELLO".lower() == "hello"
        assert "PYTHON".lower() == "python"
    
    def test_string_strip(self):
        """Test string strip"""
        assert "  hello  ".strip() == "hello"
        assert "\tpython\n".strip() == "python"


@pytest.fixture
def sample_list():
    """Fixture providing a sample list"""
    return [1, 2, 3, 4, 5]


class TestListOperations:
    """List operations tests using fixtures"""
    
    def test_list_length(self, sample_list):
        """Test list length using fixture"""
        assert len(sample_list) == 5
    
    def test_list_append(self, sample_list):
        """Test list append"""
        sample_list.append(6)
        assert len(sample_list) == 6
        assert sample_list[-1] == 6
    
    def test_list_index(self, sample_list):
        """Test list indexing"""
        assert sample_list[0] == 1
        assert sample_list[-1] == 5
    
    def test_list_slice(self, sample_list):
        """Test list slicing"""
        assert sample_list[1:3] == [2, 3]
        assert sample_list[:3] == [1, 2, 3]
        assert sample_list[3:] == [4, 5]


# Parametrized test example
@pytest.mark.parametrize("input_value,expected", [
    (2, 4),
    (3, 9),
    (4, 16),
    (5, 25),
])
def test_square_parametrized(input_value, expected):
    """Test square function with multiple inputs"""
    assert input_value ** 2 == expected


# Test that should fail (for demonstration)
def test_failing_example():
    """This test intentionally fails for demonstration purposes"""
    assert 2 + 2 == 5  # This will fail
