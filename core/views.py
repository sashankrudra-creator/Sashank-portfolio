from django.shortcuts import render

def index(request):
    return render(request, 'core/home.html')

def about(request):
    return render(request, 'core/about.html')


def projects(request):
    return render(request, 'core/projects.html')

def certifications(request):
    return render(request, 'core/certifications.html')

def contact(request):
    return render(request, 'core/contact.html')

def resume(request):
    return render(request, 'core/resume.html')


def internships(request):
    return render(request, 'core/internships.html')



