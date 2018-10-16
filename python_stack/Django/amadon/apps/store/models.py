from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=45)
    desc = models.TextField()
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)