from rest_framework import generics
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    ChildrenFull, ChildrenFullFavouritesUser, ChildrenFullViewsUser
)
from sections.serializer import (
    ChildrenFullSerializer, ChildrenFullSerializerEN, ChildrenFullSerializerRU,
    ChildrenFullSerializerTR, ChildrenFullSerializerDetail, ChildrenFullFavouritesUserSerializer,
    ChildrenFullViewsUserSerializer
)
from sections.service import (
    FilterChildren, FilterChildrenViews, FilterChildrenFavourites
)
from sections.utils import query_list_lang

model_children = ChildrenFull.objects.filter(publisher=True)


class ChildrenLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class ChildrenFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = ChildrenFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterChildren
    pagination_class = ChildrenLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': model_children,
                'serializer_class': ChildrenFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': model_children,
                'serializer_class': ChildrenFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': model_children,
                'serializer_class': ChildrenFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(model_children, ChildrenFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(model_children, ChildrenFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(model_children, ChildrenFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class ChildrenFullAPIListCreate(generics.CreateAPIView):
    queryset = model_children
    serializer_class = ChildrenFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):
        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        request_data_set = []
        for lang in ['_ru', '_en', '_tr']:
            request_data_set.append([s for s in filter(lambda x: lang in x, [i for i in request_data])])
        request_data_set = [x for x in request_data_set if x != []][0]

        request_data = [request_data[i] for i in request_data_set]

        lang = request_data_set[0][-2:]
        if lang == "tr":
            lang_ru = [Translator().translate(i, 'ru', 'tr').result for i in request_data]
            lang_en = [Translator().translate(i, 'en', 'tr').result for i in request_data]
            if serializer.is_valid():
                serializer.save(
                    title_en=lang_en[0],
                    title_ru=lang_ru[0],
                    category_en=lang_en[1],
                    category_ru=lang_ru[1],
                    sub_category_en=lang_en[2],
                    sub_category_ru=lang_ru[2],
                )
        elif lang == "en":
            lang_ru = [Translator().translate(i, 'ru', 'en').result for i in request_data]
            lang_tr = [Translator().translate(i, 'tr', 'en').result for i in request_data]
            if serializer.is_valid():
                serializer.save(
                    title_tr=lang_tr[0],
                    title_ru=lang_ru[0],
                    category_tr=lang_tr[1],
                    category_ru=lang_ru[1],
                    sub_category_tr=lang_tr[2],
                    sub_category_ru=lang_ru[2],
                )
        elif lang == "ru":
            lang_en = [Translator().translate(i, 'en', 'ru').result for i in request_data]
            lang_tr = [Translator().translate(i, 'tr', 'ru').result for i in request_data]
            if serializer.is_valid():
                serializer.save(
                    title_tr=lang_tr[0],
                    title_en=lang_en[0],
                    category_tr=lang_tr[1],
                    category_en=lang_en[1],
                    sub_category_tr=lang_tr[2],
                    sub_category_en=lang_en[2],
                )
        else:
            return Response({'message': 'bad'})
        return Response({'message': 'good'})


class ChildrenFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_children
    serializer_class = ChildrenFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ChildrenFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterChildrenViews
    queryset = ChildrenFullViewsUser.objects.all()
    serializer_class = ChildrenFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ChildrenFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterChildrenFavourites
    queryset = ChildrenFullFavouritesUser.objects.all()
    serializer_class = ChildrenFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ChildrenFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = ChildrenFullFavouritesUser.objects.all()
    serializer_class = ChildrenFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
