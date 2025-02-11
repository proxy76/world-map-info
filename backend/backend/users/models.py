from django.db import models
from django.contrib.auth.models import AbstractUser

class Country(models.Model):  # Ensure it inherits from models.Model
    name = models.CharField(max_length=255, null=True)

    def serializer(self):
        return {
            "name": self.name
        }

class User(AbstractUser):
    user_address = models.CharField(max_length=255, null=True)
    profile_picture = models.ImageField(
        upload_to='user_images/',
        default='user_images/anonymous.png'
    )
    countries = models.ManyToManyField(Country, blank=True)
    
    # Fix reverse accessor name clashes
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_groups',
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions',
        blank=True
    )

    def serializer(self):
        return {
            "username": self.username,
            "email": self.email,
            "address": self.user_address,  # Fixed spelling typo
            "profile_picture": self.profile_picture.url if self.profile_picture else None,
        }
