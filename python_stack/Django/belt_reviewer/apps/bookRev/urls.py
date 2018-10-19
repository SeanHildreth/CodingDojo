from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.welcome),
    url(r'^addform$', views.addform),
    url(r'^addbook$', views.addbook),
    url(r'^addreview$', views.addreview),
    url(r'^(?P<id>\d+)$', views.book),
    url(r'^users/(?P<id>\d+)$', views.users),
    url(r'^delete$', views.delete),
]