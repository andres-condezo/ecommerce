from django.contrib import admin
from .models import Product
from .models import Review
from .models import Order
from .models import OrderItem
from .models import ShippingAddress

# Register your models here.
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
