from django.shortcuts import render
from django.http import HttpResponse


# Landing page
def home(request):
    # [Home]icons, main-photo, external-links(GitHub, LinkedIn, Facebook, Instagram ...etc)
    return HttpResponse('Hello Django')


# Introduction of myself
def bio(request):
    # [about|biography]skill-map, career, certs, educations as static information
    return HttpResponse('BIO')


# Business side projects
def works(request):
    # [projects]Get projects data from LinkedIn API and render to django template
    return HttpResponse('WORKS')


# Non-business side projects
def scraps(request):
    # [personal-works]Links to homepages created, Songs and media of SonicPi
    # CRUD Implementation with Django models
    return HttpResponse('SCRAPS')


# Personal blogs
def blogs(request):
    # [monologue]Fetch data from medium API and parse contents with rendering to template
    return HttpResponse('BLOGS')


# Mail forms or contacts to my gmail address
def contacts(request):
    return HttpResponse('CONTACTS')
