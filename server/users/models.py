from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Profile(models.Model):
    phone_number = models.CharField(max_length=50, blank=True, null=True, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.user.username