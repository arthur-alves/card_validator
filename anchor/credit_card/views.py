# -*- coding: utf-8 -*-
from django.views import View
from django.shortcuts import render
from django.http import JsonResponse
from .utils import validate_card_number


class CreditCardValidate(View):
    """Base view to upload and validate credit card number."""

    template_name = "index.html"

    def get(self, request, *args, **kwargs):
        """Init validate screen."""
        return render(request, self.template_name, {})

    def post(self, request, *args, **kwargs):
        """Start validate process."""
        if not request.is_ajax():
            return JsonResponse({"error": "Wrong request"})

        invalid_file = {"error": "Invalid file"}

        file = request.FILES.get("file")

        if not file or not file.content_type == u'text/plain':
            return JsonResponse(invalid_file)

        card_numbers = file.read().split("\n")

        card_numbers = [i for i in card_numbers if i]

        number = card_numbers.pop(0)

        if not len(card_numbers) > 1:
            return JsonResponse(invalid_file)

        try:
            if 0 > int(number) > 100:
                return JsonResponse(
                    {"error": "First number is not valid"}
                )

        except:
            return JsonResponse({"error": "Wrong number in first line"})

        output = [[c, validate_card_number(c)] for c in card_numbers]

        if not output:
            return JsonResponse(invalid_file)

        return JsonResponse({"results": output})


