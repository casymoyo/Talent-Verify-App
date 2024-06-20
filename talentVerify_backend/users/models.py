from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    role_choices = [
        ('Admin', 'Admin'),
        ('Employee', 'Employee'),
        ('Support', 'Support')
    ]
    role = models.CharField(max_length=20, choices=role_choices)
    profile_image = models.ImageField(upload_to='Profile_images', blank=True, null=True)
    
    def __str__(self):
        return f'{self.username} {self.role}'
