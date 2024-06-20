
from django.urls import path
from .views import UserView

urlpatterns = [
    path('', UserView.as_view(), name='user_list'),  
    path('login/', UserView.as_view(), name='login'), 
    path('logout/', UserView.as_view(), name='logout'), 
    path('create/', UserView.as_view(), name='user_create'),  
    path('<int:pk>/', UserView.as_view(), name='user_detail'), 
    path('<int:pk>/update/', UserView.as_view(), name='user_update'),  
    path('<int:pk>/delete/', UserView.as_view(), name='user_delete'),  
]

