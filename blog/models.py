from django.db import models
from ckeditor.fields import RichTextField

class Blog(models.Model):
	title =  models.CharField(max_length=200, null=True)
	content = RichTextField(null=True)
	tag = models.CharField(max_length=100, null=True)
	date_posted = models.DateTimeField(null=True)

	def __str__(self):
		return self.title

