from django.shortcuts import render
from .models import Blog

def blogs(request):
	if request.method == "POST":
		text = request.POST.get("searchText")
		blogs = Blog.objects.filter(tag__contains=text)
	else:
		text=""
		blogs = Blog.objects.all()
	context = {
		"blogs": blogs,
		"text": text,
	}
	return render(request, 'portfolio/blogs.html', context)

def blog(request, blog_id):
	blog = Blog.objects.get(id=blog_id)
	context = {
		"blog": blog
	}
	return render(request, 'portfolio/blog-detail.html', context)