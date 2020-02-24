from django.contrib import admin
from django.urls import path
from django.conf.urls import url

from intro import views


urlpatterns = [
    url(r'^bio', views.bio, name='bio'),
    url(r'^works', views.works, name='works'),
    url(r'^scraps', views.scraps, name='scraps'),
    url(r'^blogs', views.blogs, name='blogs'),
    url(r'^contact', views.contacts, name='contact'),
    url(r'^$', views.home, name='home'),
]
