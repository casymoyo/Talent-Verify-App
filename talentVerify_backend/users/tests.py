from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from .models import User
from .serializers import UserSerializer

class TestUserView(TestCase):
    def test_user_creation(self):
        url = reverse('user-view')
        
        data = {'username': 'casy', 'password': 'moyo', 'email': 'casy@gmail.com'}
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().username, 'john')

    def test_user_login(self):
        user = User.objects.create_user('casy', 'casy@gmail.com', 'moyo')
        
        url = reverse('login')
        data = {'username': 'casy', 'password': 'moyo'}
        
        response = self.client.post(url, data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['user']['username'], 'casy')
