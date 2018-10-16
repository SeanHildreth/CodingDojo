from django.db import models


class ShowManager(models.Manager):
    def basic_validation(self, postData):
        errors = {}
        if len(postData['title']) < 2:
            errors['title'] = 'Show Title must be at least 2 characters long.'
        if len(postData['network']) < 2:
            errors['network'] = 'Show Network must be at least 2 characters long.'
        if postData['release_date'] == '':
            errors['release_date'] = 'Show Release Date must be a valid date.'
        if len(postData['desc']) < 10:
            errors['desc'] = 'Show Description must be at least 10 characters long.'
        return errors


class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.DateField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()