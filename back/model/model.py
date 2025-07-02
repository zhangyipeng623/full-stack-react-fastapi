from sqlmodel import Field, SQLModel, Relationship, Index, ForeignKeyConstraint
from sqlalchemy.dialects.mysql import MEDIUMTEXT
from typing import List, Optional
from sqlalchemy import event
from datetime import datetime


class User(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    username: str = Field(index=True)
    password: str
    email: str = Field(index=True)
    create_time: datetime = Field(default_factory=datetime.now)
    update_time: datetime = Field(default_factory=datetime.now)


@event.listens_for(User, "before_update")
def update_updated_at(mapper, connection, target):
    target.update_time = datetime.now()
