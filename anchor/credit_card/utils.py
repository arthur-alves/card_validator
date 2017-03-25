# -*- coding:utf-8 -*-
import re
from itertools import groupby


def validate_card_number(card_number):
    """Validation credit card number."""
    if not card_number:
        return "Invalid"

    card_number = card_number.strip()

    start_numbers = [4, 5, 6]
    try:
        only_digits = re.sub('[^0-9]', '', card_number)
        start_check = int(card_number[0]) in start_numbers
        left = len(re.sub(r'[\d\-]', '', card_number)) > 0
        len_check = len(only_digits) == 16
        groups = groupby(only_digits)
        count_repeat = [
            sum(1 for i in count) >= 4 for num, count in groups
        ]

        is_repeated = True in count_repeat

    except:
        return 'Invalid'

    if not start_check or left or not len_check or is_repeated:
        return 'Invalid'

    return 'Valid'


