from sqlmodel import Field, SQLModel, Relationship, Index, ForeignKeyConstraint
from sqlalchemy.dialects.mysql import MEDIUMTEXT
from typing import List, Optional
from sqlalchemy import event
from datetime import datetime


class HotSearch(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    word: str 
    node: str 
    current_num: int = Field(default=None)
    rank: int = Field(default=None)
    create_time: datetime = Field(default_factory=datetime.now)
    update_time: datetime =Field(default_factory=datetime.now)
    history_top_num: int = Field(default=None)
    hot_search_item: List['HotSearchItem'] = Relationship(back_populates='hot_search')



class Top(SQLModel, table=True):

    id: int = Field(default=None, primary_key=True)
    name: str 
    word: str 
    create_time: datetime = Field(default_factory=datetime.now)


class HotSearchItem(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    hot_search_id: int = Field(default=None)
    node: str 
    num: int = Field(default=None)
    create_time: datetime = Field(default_factory=datetime.now)
    update_time: datetime = Field(default_factory=datetime.now)
    hot_search: Optional[HotSearch] = Relationship(back_populates='hot_search_items')
    

@event.listens_for(HotSearch, "before_update")
@event.listens_for(HotSearchItem, "before_update")
def update_updated_at(mapper, connection, target):
    target.update_time = datetime.now()