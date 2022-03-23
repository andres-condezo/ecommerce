from django.shortcuts import render
from django.http import JsonResponse
from .products import products

# Create your views here.
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
  return JsonResponse(routes, safe=False)


def getProducts(request):
  return JsonResponse(products, safe=False)
