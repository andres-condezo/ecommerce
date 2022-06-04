from rest_framework.decorators import api_view, permission_classes

from rest_framework.response import Response

from rest_framework import status

from base.models import Order, OrderItem, Product, ShippingAddress
from base.serializers import OrderSerializer


@api_view(['POST'])
@permission_classes(['IsAuthenticated'])
def addOrderItems(req):

  user = req.user
  data = req.data
  
  orderItems = data['orderItems']

  if orderItems and len(orderItems):
    return Response({'detail': 'No Order Items'}, status=status.HTTP_400_BAD_REQUEST)

  order = Order.objects.create(
    user=user,
    paymentMethod=data['paymentMethod'],
    taxPrice=data['taxPrice'],
    totalPrice=data['totalPrice']
  )

  shipping = ShippingAddress.objects.create(
    order=order,
    address=data['shippingAddress']['address'],
    city=data['shippingAddress']['city'],
    postalCode=data['shippingAddress']['postalCode'],
    country=data['shippingAddress']['country'],
  )

  for i in orderItems:
    product = Product.objects.get(_id=i['product'])

    item = OrderItem.objects.create(
      product=product,
      order=order,
      name=product.name,
      qty=i['qty'],
      price=i['price'],
      image=product.image.url
    )

    product.countInStock -= item.qty
    product.save()

    serializer = OrderSerializer(order, many=True)

  return Response(serializer.data)
