from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),

    path('projects/', views.projects, name='projects'),
    path('certifications/', views.certifications, name='certifications'),
    path('internships/', views.internships, name='internships'),


    path('contact/', views.contact, name='contact'),
    path('resume/', views.resume, name='resume'),
]
