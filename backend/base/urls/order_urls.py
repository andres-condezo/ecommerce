from django.urls import path
from base.views import order_views as views

urlpatterns = [
  path('', views.getOrders, name='all-orders'),

  path('add/', views.addOrderItems, name='orders-add'),
  path('myorders/', views.getMyOrders, name='my-orders'),

  path('<str:pk>/', views.getOrderById, name='user-order'),
  path('<str:pk>/deliver/', views.updateOrderAsDelivered, name='order-delivered'),
  path('<str:pk>/pay/', views.updateOrderToPay, name='pay'),
]
