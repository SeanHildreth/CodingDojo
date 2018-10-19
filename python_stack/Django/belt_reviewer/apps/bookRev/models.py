from django.db import models
from ..loginReg.models import User
from datetime import *


def dateformat(arg):
    arg = datetime.date(arg)
    arg = datetime.strftime(arg, '%B %d, %Y')
    return arg


class ReviewManager(models.Manager):
    def validate(self, postData):
        errors = {}
        if len(postData['title']) < 1:
            errors['title'] = 'Book title must be included!'
        if len(postData['review']) < 10:
            errors['review'] = 'Book review must be at least 10 characters!'
        if Author.objects.filter(name=postData['newauthor']):
            errors['author'] = 'This author already exists!'
        if Book.objects.filter(title=postData['title']):
            errors['book'] = 'This book already exists!'
        return errors
    def rev_validate(self, postData):
        errors = {}
        if len(postData['review']) < 10:
            errors['review'] = 'Book review must be at least 10 characters!'
        return errors


class Author(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def created_at_formatted(self):
        return dateformat(self.created_at)


class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name='books', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def created_at_formatted(self):
        return dateformat(self.created_at)


class Review(models.Model):
    review = models.TextField()
    rating = models.IntegerField()
    book = models.ForeignKey(Book, related_name='reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='reviews', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ReviewManager()
    def created_at_formatted(self):
        return dateformat(self.created_at)