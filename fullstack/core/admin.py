from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Project)
admin.site.register(Client)
admin.site.register(ContactSubmission)
admin.site.register(NewsletterSubscription)

