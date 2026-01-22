from datetime import timedelta
from django.utils import timezone
from django.db.models import Count
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView

from .models import Slider, About, Checkup, Doctor, Contact, ContentBlock, SiteSettings, SeoMeta
from .serializers import (
    SliderSerializer, AboutSerializer, CheckupSerializer, DoctorSerializer,
    ContactCreateSerializer, ContentBlockSerializer, SiteSettingsSerializer, SeoMetaSerializer
)
from .bitrix import send_lead


class SliderListView(ListAPIView):
    queryset = Slider.objects.filter(is_active=True).order_by('order', '-id')
    serializer_class = SliderSerializer


class AboutListView(ListAPIView):
    queryset = About.objects.all().order_by('-id')
    serializer_class = AboutSerializer


class CheckupListView(ListAPIView):
    # ✅ MUHIM: tests/benefits chiqishi uchun prefetch
    queryset = (
        Checkup.objects
        .filter(is_active=True)
        .prefetch_related("tests", "benefits")
        .order_by('order', 'name_uz')
    )
    serializer_class = CheckupSerializer


class DoctorListView(ListAPIView):
    queryset = Doctor.objects.filter(is_active=True).order_by('order', 'full_name')
    serializer_class = DoctorSerializer


class SiteSettingsListView(ListAPIView):
    queryset = SiteSettings.objects.all().order_by('-id')
    serializer_class = SiteSettingsSerializer

    # ✅ doim bitta object qaytaradi
    def list(self, request, *args, **kwargs):
        obj = self.get_queryset().first()
        if not obj:
            return Response({})
        serializer = self.get_serializer(obj)
        return Response(serializer.data)


class ContentBlockListView(ListAPIView):
    serializer_class = ContentBlockSerializer

    def get_queryset(self):
        qs = ContentBlock.objects.filter(is_active=True).order_by('page_key', 'order', 'key')
        page_key = self.request.query_params.get('page_key')
        key = self.request.query_params.get('key')
        if page_key:
            qs = qs.filter(page_key=page_key)
        if key:
            qs = qs.filter(key=key)
        return qs


class SeoMetaRetrieveView(RetrieveAPIView):
    queryset = SeoMeta.objects.all()
    serializer_class = SeoMetaSerializer
    lookup_field = 'page_key'


class ContactCreateView(CreateAPIView):
    serializer_class = ContactCreateSerializer

    def perform_create(self, serializer):
        obj = serializer.save()
        send_lead(obj.name, obj.phone, obj.message)


class AdminStatsView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        now = timezone.now()
        since = now - timedelta(days=13)

        daily = (
            Contact.objects.filter(created_at__date__gte=since.date())
            .extra({'day': "date(created_at)"})
            .values('day')
            .annotate(count=Count('id'))
            .order_by('day')
        )

        data = {
            'counts': {
                'contacts': Contact.objects.count(),
                'sliders': Slider.objects.count(),
                'checkups': Checkup.objects.count(),
                'doctors': Doctor.objects.count(),
                'blocks': ContentBlock.objects.count(),
                'seo_pages': SeoMeta.objects.count(),
            },
            'daily_contacts': list(daily),
            'recent_contacts': list(
                Contact.objects.order_by('-created_at').values('id', 'name', 'phone', 'message', 'created_at')[:10]
            ),
        }
        return Response(data)
