from django.shortcuts import render


def index(request):
    return render(request, "room/index.html")

def room(request, room_name):
    return render(request, "room/room.html", {"room_name": room_name})

def send_free_ID():
    return 