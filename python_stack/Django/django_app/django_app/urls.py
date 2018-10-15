"""django_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url, include

urlpatterns = [
    url(r'^blogs/', include('apps.blogs.urls')),
    url(r'^time_display/', include('apps.time_display.urls')),
    url(r'^random_word/', include('apps.random_word.urls')),
    url(r'^session_words/', include('apps.session_words.urls')),
    url(r'^ninja_gold/', include('apps.ninja_gold.urls')),
    url(r'^surveys/', include('apps.surveys.urls')),
    url(r'^users/', include('apps.users.urls')),
]
