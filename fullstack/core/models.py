from django.db import models
from datetime import datetime
# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        now=datetime.now()
        self.img.name=now.strftime("%Y-%m-%d,%H-%M-%S") 
        super(Project,self).save( *args, **kwargs)

class Client(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='clients/')
    designation = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class ContactSubmission(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=15)
    city = models.CharField(max_length=100)
    submitted_at = models.DateTimeField(auto_now_add=True)        
    
    def __str__(self):
        return f"{self.full_name} - {self.email}"

class NewsletterSubscription(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)  
    
    def __str__(self):
        return self.email  