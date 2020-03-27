from django.contrib import admin
from django.urls import path
from django.conf.urls import url

from intro.views import HomeTemplateView
from intro.views import BlogTemplateView


urlpatterns = [
    url(r'^blog', view=BlogTemplateView.as_view(), name='blog'),
    url(r'^$', view=HomeTemplateView.as_view(), name='home'),
]
