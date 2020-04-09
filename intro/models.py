from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=100)
    start = models.DateField()
    end = models.DateField()
    description = models.TextField()
    stacks = models.TextField()

    def __str__(self):
        return "{0}".format(self.name)
