# -*- coding: utf-8 -*-
from django.conf.urls import url
from .views import CreditCardValidate


urlpatterns = [
    url(r'^$', CreditCardValidate.as_view(), name="credit_card_index"),
]


