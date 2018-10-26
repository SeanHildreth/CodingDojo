from django.db import models
from ..login.models import User


class Progress(models.Model):
    character_lvl = models.IntegerField()
    world_lvl = models.IntegerField()
    prestige_lvl = models.IntegerField()
    total_candy = models.IntegerField()
    user = models.ForeignKey(User, related_name='progress', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
