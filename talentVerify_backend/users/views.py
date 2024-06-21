from .models import User
from rest_framework import status
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout

class UserView(APIView):
    
    def get(self, request, pk=None):
        if pk:
            try:
                user = User.objects.get(pk=pk)
                serializer = UserSerializer(user)
            except User.DoesNotExist:
                return Response(status=404)
        else:
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
        
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        
        if serializer.is_valid():
            user = serializer.save()
            return Response({'user':user}, status=201)
        return Response(serializer.error, status=400)
    
    def patch(self, request, pk):
        user = User.objects.get(pk=pk)
        serializer = UserSerializer(user, data=request.data, partial=True)
        
        if serializer.is_valid():
            user = serializer.save()
            return Response({'user':user}, status=201)
        return Response(serializer.error, status=404)
    
    def delete(self, request, pk):
        user = User.objects.get(pk=pk)
        user.delete
        return Response(status=204) 
    
    def login(self, request):
        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            serializer = UserSerializer(user)
            return Response({'user': serializer.data}, status=200)
        return Response(status=401)

    def logout(self, request):
        logout(request)
        return Response(status=204)

