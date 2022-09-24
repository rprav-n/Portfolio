from django.urls import path
from . import views

urlpatterns = [
    path('', views.blogs, name='all-blogs'),
    path('<int:blog_id>/', views.blog, name='blog-detail'),
]
