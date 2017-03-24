# -*- coding: utf-8 -*-
import rows
from django.views import View
from django.shortcuts import render
from django.http import JsonResponse
from .utils import valid_card_brand


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

        file = request.FILES.get("file")

        if not file:
            return JsonResponse({"error": "Invalid file"})

        card_numbers = file.read().split("\n")

        card_numbers = [i for i in card_numbers if i]

        number = card_numbers.pop(0)

        try:
            if 0 > int(number) > 100:
                return JsonResponse(
                    {"error": "First number is not valid"}
                )

        except:
            return JsonResponse({"error": "Wrong number in first line"})

        output = [[c, valid_card_brand(c)] for c in card_numbers]

        return JsonResponse({"results": output})


