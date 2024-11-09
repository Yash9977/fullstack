from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('', ProjectList.as_view()),
    path('Client/', ClientList.as_view()),
    path('Contact/', ContactCreate.as_view()),
    path('New/', NewsletterSubscriptionCreate.as_view()),
]