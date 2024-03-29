import json
import logging

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer


class RoomConsumer(WebsocketConsumer):
    def connect(self):
        self.room_group_id = self.scope["url_route"]["kwargs"]["roomID"]

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_id, self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_id, self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        logging.debug(text_data)
        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_id, {"type": "room_message", "data": text_data_json}
        )

    # Receive message from room group
    def room_message(self, event):
        # Send message to WebSocket
        self.send(text_data=json.dumps(event["data"]))
