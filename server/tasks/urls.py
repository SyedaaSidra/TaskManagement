from rest_framework.routers import DefaultRouter
from .views import TaskViewSet
from django.urls import path, include
from .auth_views import UserRegisterView
router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='tasks')

urlpatterns = [
    path('', include(router.urls)),
     path('register/', UserRegisterView.as_view(), name='register'),
]



