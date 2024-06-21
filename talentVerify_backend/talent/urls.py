from django.urls import path
from .views import EmployeeUploadView

urlpatterns = [
    path('create/employee', EmployeeUploadView.as_view(), name='create')
]