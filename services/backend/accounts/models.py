from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils import timezone
from accounts.managers import UserManager


class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField('username', max_length=255, unique=True)
    email = models.EmailField('email address', null=True, blank=True)
    phone = models.CharField('phone number', max_length=30, null=True, blank=True)
    date_joined = models.DateTimeField('date joined', default=timezone.now)
    is_active = models.BooleanField('active', default=False)
    is_staff = models.BooleanField('staff', default=False)
    first_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255, null=True, blank=True)
    middle_name = models.CharField(max_length=255, null=True, blank=True)
    upload_user = models.FileField(upload_to='user/', null=True, blank=True)
    addres = models.CharField(max_length=255, null=True, blank=True)

    is_verified = models.BooleanField('verified', default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'
