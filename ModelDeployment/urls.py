from django.urls import path
from . import views

urlpatterns = [
    # path('', views.main_page, name='main_page'),
    # path('', views.detect_emotion, name='main_page'),
    path('result/', views.show_results, name='show_results'),
    path('', views.show_results, name='main'),

]
