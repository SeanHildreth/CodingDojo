from django.db import models
from .validations import *
import bcrypt


class UserManager(models.Manager):
    def validate(self, postData):
        errors = {}
        if isValidName(postData['fname']) == False:
            errors['fname'] = 'First name must be valid!'
        if isValidName(postData['lname']) == False:
            errors['lname'] = 'Last name must be valid!'
        if isValidAge(postData['bday']) == False:
            errors['bday'] = 'You must be older than 13 to register!'
        if postData['cpass'] != postData['pass']:
            errors['pass'] = 'Passwords must match!'
        if isValidEmail(postData['email']) == False:
            errors['email'] =  'This is not a valid email address!'
        elif User.objects.filter(email=postData['email']):
            errors['email'] = 'This email address is already taken!'
        if isValidUsername(postData['username']) == False:
            errors['username'] = 'This is not a valid username!'
        elif User.objects.filter(username=postData['username']):
            errors['username'] = 'This username is already taken!'
        if isValidPassword(postData['pass']) == False:
            errors['pass'] = 'Invalid Password! Must be between 8 - 32 characters, include at least one number, one Uppercase letter, one lowercase letter, and one special character.'
        return errors
    def validate_login(self, postData):
        errors = {}
        try:
            user = User.objects.get(username=postData['username'])
        except:
            errors['login'] = 'Login Invalid!'
            return errors
        if bcrypt.checkpw(postData['pass'].encode(), user.password.encode()):
            return errors
        errors['login'] = 'Login Invalid!'
        return errors


class User(models.Model):
    email = models.CharField(max_length=255)
    username = models.CharField(max_length=64)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    bday = models.DateField()
    password = models.CharField(max_length=32)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()