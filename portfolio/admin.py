from django.contrib import admin
from .models import Project

# class ProjectAdmin(admin.ModelAdmin):
# 	readonly_fields = ("date_created", )

admin.site.register(Project)
