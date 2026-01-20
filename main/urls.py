from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from .views import (
    SliderListView, AboutListView, CheckupListView, DoctorListView,
    SiteSettingsListView, ContentBlockListView, SeoMetaRetrieveView,
    ContactCreateView, AdminStatsView,
)

urlpatterns = [
    path('sliders/', SliderListView.as_view()),
    path('about/', AboutListView.as_view()),
    path('checkups/', CheckupListView.as_view()),
    path('doctors/', DoctorListView.as_view()),
    path('site-settings/', SiteSettingsListView.as_view()),
    path('blocks/', ContentBlockListView.as_view()),
    path('seo/<str:page_key>/', SeoMetaRetrieveView.as_view()),
    path('contact/', ContactCreateView.as_view()),

    # JWT auth
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Admin dashboard stats
    path('admin/stats/', AdminStatsView.as_view()),
]
