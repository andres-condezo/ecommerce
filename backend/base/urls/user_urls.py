from django.urls import path
from base.views import user_views as views

urlpatterns = [
  path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('register/', views.registerUser, name='user_register'),
  path('profile/', views.geUserProfile, name='users_profile'),
  path('', views.getUsers, name='users'),
]
