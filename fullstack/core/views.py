from django.shortcuts import render
from .models import *
from rest_framework import viewsets,generics
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .Serializers import *
# Create your views here.
class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ClientList(generics.ListAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    
class ContactCreate(generics.CreateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSerializer

class NewsletterSubscriptionCreate(generics.CreateAPIView):
    queryset = NewsletterSubscription.objects.all()
    serializer_class = NewsletterSubscriptionSerializer    