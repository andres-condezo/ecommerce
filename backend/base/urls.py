from django.urls import path
from . import views

from .views import MyTokenObtainPairView


urlpatterns = [
  path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
  
  path('', views.getRoutes, name='routes'),

  path('users/profile/', views.geUserProfile, name='users_profile'),
  path('users/', views.getUsers, name='users'),

  path('products/', views.getProducts, name='products'),
  path('products/<str:pk>', views.getProduct, name='product'),
]
