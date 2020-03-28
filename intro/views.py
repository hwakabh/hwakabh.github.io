from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView


# Landing page
class HomeTemplateView(TemplateView):
    template_name = 'intro/home.html'

    def get_context_data(self, **kwargs):
        content = super().get_context_data(**kwargs)
        content['message'] = 'This is Home Section'
        return content


# Personal blogs
class BlogTemplateView(TemplateView):
    template_name = 'intro/blog.html'

    def get_context_data(self, **kwargs):
        posts = super().get_context_data(**kwargs)
        return posts
