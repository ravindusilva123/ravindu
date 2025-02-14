from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MarksViewSet

router = DefaultRouter()
router.register(r'marks', MarksViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]