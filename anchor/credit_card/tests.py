# -*- coding: utf-8 -*-
"""A simple test for credit_card validator."""

from django.test import TestCase
from .utils import valid_card_brand


class CreditCard(TestCase):
    """Start a simple test case."""

    def test_number_repeated(self, *args):
        """Assert repeated number."""
        args = [valid_card_brand("4444-4444_54164-544646"), "Invalid"]
        self.assertEqual(*args)

    def test_number_with_another_divider(self, *args):
        """Assert number with invalid divider."""
        args = [valid_card_brand("4342/23423 -5446-5454"), "Invalid"]
        self.assertEqual(*args)

    def test_number_starts_digit(self, *args):
        """Assert with invalid start digit."""
        args = [valid_card_brand("2444-4444_54164-544646"), "Invalid"]
        self.assertEqual(*args)

    def test_valid_number(self, *args):
        """Assert valid number."""
        args = [valid_card_brand("61234-567-8912-3456"), "Valid"]
        self.assertEqual(*args)
