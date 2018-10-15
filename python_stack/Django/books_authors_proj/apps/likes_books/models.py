from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Book(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField(max_length=1000)
    uploader = models.ForeignKey(User, related_name='uploaded', on_delete=models.CASCADE)
    users_liked = models.ManyToManyField(User, related_name='books_liked')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)