from sqlmodel import SQLModel, create_engine
from config.config import settings

# 导入所有模型以确保它们被注册
from model.model import User

engine = create_engine(settings.get_database_url, echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


if __name__ == "__main__":
    create_db_and_tables()