from django.db import models
from ckeditor.fields import RichTextField

class Project(models.Model):
	title = models.CharField(max_length=200, null=True)
	image = models.URLField(null=True)
	content = RichTextField(null=True)
	date_created = models.DateTimeField(null=True)

	def __str__(self):
		return self.title

    
