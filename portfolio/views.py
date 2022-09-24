from django.shortcuts import render
from blog.models import Blog
from .models import Project

def home(request):
	latest_blogs = Blog.objects.order_by('-date_posted')[:3]
	latest_projects = Project.objects.order_by('-date_created')[:3]
	context = {
		"latest_blogs": latest_blogs,
		"latest_projects": latest_projects
	}
	return render(request, 'portfolio/home.html', context)

def about(request):
	return render(request, 'portfolio/about.html')

def projects(request):
	projects = Project.objects.all()
	context = {
		"projects": projects
	}
	return render(request, 'portfolio/projects.html', context)

def project(request, project_id):
	project = Project.objects.get(id=project_id)
	context = {
		"project": project
	}
	return render(request, 'portfolio/project-detail.html', context)	


def contact(request):
	return render(request, 'portfolio/contact.html')
