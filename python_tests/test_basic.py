import pytest


class TestBasicMath:
    """Basic math operations tests"""
    
    def test_addition(self):
        """Test basic addition"""
        assert 2 + 2 == 4
        assert 10 + 5 == 15
    
    def test_multiplication(self):
        """Test basic multiplication"""
        assert 3 * 4 == 12
        assert 2 * 0 == 0


@pytest.fixture
def sample_list():
    """Fixture providing a sample list"""
    return [1, 2, 3, 4, 5]


def test_list_operations(sample_list):
    """Test list operations using fixture"""
    assert len(sample_list) == 5
    sample_list.append(6)
    assert len(sample_list) == 6
    assert sample_list[-1] == 6
