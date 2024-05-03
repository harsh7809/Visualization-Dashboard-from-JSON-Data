from django.contrib import admin
from django.urls import path
from .views import *
from visualapp import views

urlpatterns = [
   path('',views.visualization),
   path('sec',views.visualization_sector),
   path('get_int',home.as_view()),
   # path('get_sec',home_sect.as_view()),
]