from django.urls import path
from . import db_requests

urlpatterns = [
    path('new_room/', db_requests.new_room),
    path('auth/<int:room_id>/<slug:name>/', db_requests.auth),
    path('deal_cards/<int:room_id>/', db_requests.deal_cards),
    path('get_my_cards/<int:room_id>/<int:user_id>/', db_requests.get_my_cards),
    path('get_members/<int:room_id>/', db_requests.get_members),
]