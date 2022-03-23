from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .products import products

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
  routes = [
    '/api/products/',
    '/api/products/create/',

    '/api/products/upload/',

    '/api/products/<id>/reviews/',

    '/api/products/top/',
    '/api/products/<id>/',

    '/api/products/delete/<id>/',
    '/api/products/<update>/<id>/',
  ]
  # return JsonResponse(routes, safe=False)
  return Response(routes)


@api_view(['GET'])
def getProducts(request):
  # return JsonResponse(products, safe=False)
  return Response(products)


@api_view(['GET'])
def getProduct(request, pk):
  for prod in products:
    if prod['_id'] == pk:
      return Response(prod)

  return Response(None)
