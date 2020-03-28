from django.contrib import admin
from django.urls import path
from django.conf.urls import url

from intro.views import ProjectListView
from intro.views import BlogTemplateView


urlpatterns = [
    url(r'^blog', view=BlogTemplateView.as_view(), name='blog'),
    url(r'^$', view=ProjectListView.as_view(), name='home'),
]
