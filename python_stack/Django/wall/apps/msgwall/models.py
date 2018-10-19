from django.db import models
from ..loginReg.models import User
from datetime import *

class Message(models.Model):
    user_message = models.ForeignKey(User, related_name='user_msgs', on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def created_at_formatted(self):
        return dateformat(self.created_at)

class Comment(models.Model):
    message = models.ForeignKey(Message, related_name='msg_comments', on_delete=models.CASCADE)
    user_comment = models.ForeignKey(User, related_name='user_comments', on_delete=models.CASCADE)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def created_at_formatted(self):
        return dateformat(self.created_at)


def dateformat(arg):
    arg = datetime.date(arg)
    arg = datetime.strftime(arg, '%B %d, %Y')
    return arg