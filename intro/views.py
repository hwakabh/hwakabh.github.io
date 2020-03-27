from django.shortcuts import render
from django.http import HttpResponse

HTML = 'intro/index.html'

# Landing page
def home(request):
    # [Home]icons, main-photo, external-links(GitHub, LinkedIn, Facebook, Instagram ...etc)
    message = 'This is Home section'
    return render(request, HTML, {
        'msg': message,
    })


# Introduction of myself
def bio(request):
    # [about|biography]skill-map, career, certs, educations as static information
    message = 'This is bio section'
    return render(request, HTML, {
        'msg': message,
    })


# Business side projects
def works(request):
    # [projects]Get projects data from LinkedIn API and render to django template
    message = 'This is works section'
    return render(request, HTML, {
        'msg': message,
    })


# Non-business side projects
def scraps(request):
    # [personal-works]Links to homepages created, Songs and media of SonicPi
    # CRUD Implementation with Django models
    message = 'This is scraps section'
    return render(request, HTML, {
        'msg': message,
    })


# Personal blogs
def blogs(request):
    # [monologue]Fetch data from medium API and parse contents with rendering to template
    message = 'This is blogs section'
    return render(request, HTML, {
        'msg': message,
    })


# Mail forms or contacts to my gmail address
def contacts(request):
    message = 'This is contact section'
    return render(request, HTML, {
        'msg': message,
    })
