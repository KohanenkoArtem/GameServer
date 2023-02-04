from django.db import models

class Rooms(models.Model):
    room_id = models.IntegerField()
    members = models.TextField()
    cards = models.TextField()

    def __str__(self):
        return str(self.room_id)

class Cards(models.Model):
    card_text = models.TextField()

    def __str__(self):
        return self.TextField