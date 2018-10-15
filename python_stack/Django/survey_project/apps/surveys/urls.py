from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^submit/$', views.submit),
    url(r'^posted/$', views.posted),
    url(r'^reset/$', views.reset),
]