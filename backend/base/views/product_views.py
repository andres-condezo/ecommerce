from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from rest_framework.response import Response

from rest_framework import status

from base.models import Product, Review
from base.serializers import (ProductSerializer)


@api_view(['GET'])
def getProducts(request):
  products = Product.objects.all()
  serializer = ProductSerializer(products, many=True)
  return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
  product = Product.objects.get(_id=pk)
  serializer = ProductSerializer(product, many=False)
  return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
  user = request.user
  
  product = Product.objects.create(
    user=user,
    name='Sample name',
    price=0,
    brand='Sample Brand',
    countInStock=0,
    category='Sample Category',
    description=''
  )

  serializer = ProductSerializer(product, many=False)
  return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
  data = request.data
  product = Product.objects.get(_id=pk)

  product.name = data['name']
  product.price = data['price']
  product.brand = data['brand']
  product.countInStock = data['countInStock']
  product.category = data['category']
  product.description = data['description']
  product.save()
  
  serializer = ProductSerializer(product, many=False)
  return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
  product = Product.objects.get(_id=pk)
  product.delete()
  return Response('Product deleted')


@api_view(['POST'])
def uploadImage(request):
  data = request.data

  product_id = data['product_id']
  product = Product.objects.get(_id=product_id)
  product.image = request.FILES.get('image')
  product.save()
  
  return Response('Image was uploaded')


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
  user = request.user

  product = Product.objects.get(_id=pk)
  data = request.data

  #1 - Review already exists
  alreadyExists = product.review_set.filter(user=user).exists()
  if alreadyExists:
    content = {'detail': 'Product already reviewed'}
    return Response(content, status=status.HTTP_400_BAD_REQUEST)

  #2 - Norating or 0
  if data['rating'] == 0:
    content = {'detail': 'Please select a rating'}
    return Response(content, status=status.HTTP_400_BAD_REQUEST)

  #3 - Create review
  review = Review.objects.create(
    user=user,
    product=product,
    name=user.first_name,
    rating=data['rating'],
    comment=data['comment']
  )

  reviews = product.review_set.all()
  product.numReviews = len(reviews)

  total = 0
  for review in reviews:
    total += review.rating

  product.rating = total / len(reviews)
  product.save()

  return Response('Review added')
