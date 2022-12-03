from rest_framework import generics
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from sections.models import *
from sections.serializer import *
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.service import *


class RealtyFullAPIList(generics.ListAPIView):
    queryset = RealtyFull.objects.all()
    serializer_class = RealtyFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterRealty


class RealtyFullAPIListCreate(generics.CreateAPIView):
    queryset = RealtyFull.objects.all()
    serializer_class = RealtyFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealtyFull.objects.all()
    serializer_class = RealtyFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)