from django.http import JsonResponse
from database.models import Rooms
from database.models import Cards
import json
import random

def send_free_ID(request):
    answer = Rooms.objects.order_by("id").values("id").last()
    return JsonResponse(answer)

def new_room(request):
    room_id = Rooms.objects.all().last().room_id + 1
    room = Rooms(room_id=room_id, members=json.dumps({'members': []}))
    room.save()
    return JsonResponse({'id': room_id})

def auth(request, room_id, name):
    room = Rooms.objects.get(room_id=room_id)
    members = json.loads(room.members)
    members['members'].append(name)
    room.members = json.dumps(members)
    room.save()
    return JsonResponse({'members': members['members']})

def deal_cards(request, room_id):
    CARDS_PER_ONE = 2
    room = Rooms.objects.get(room_id=room_id)
    members = json.loads(room.members)['members']
    members_count = len(members)
    cards = list(map(lambda card: card.card_text, Cards.objects.all()))
    cards_set = random.sample(cards, members_count * CARDS_PER_ONE)
    card_index = 0
    cards_distrib = []
    for i in range(members_count):
        player_cards = []
        for j in range(CARDS_PER_ONE):
            player_cards.append(cards_set[card_index])
            card_index = card_index + 1
        cards_distrib.append(player_cards)
    room.cards = json.dumps({'cards': cards_distrib}, ensure_ascii=False)
    print(room.cards)
    room.save()
    return 0

def get_my_cards(request, room_id, user_id):
    room = Rooms.objects.get(room_id=room_id)
    all_cards = json.loads(room.cards)
    my_cards = all_cards['cards'][user_id]
    print(json.loads(room.cards)['cards'][user_id])
    #cards_utf = list(map(lambda card: str(card), cards_unic))
    return JsonResponse({'cards': my_cards})

def get_members(request, room_id):
    room = Rooms.objects.get(room_id=room_id)
    members = json.loads(room.members)
    return JsonResponse({'members': members['members']})
