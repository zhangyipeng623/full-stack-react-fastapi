from sqlmodel import Session, create_engine
from config.config import settings

engine = create_engine(settings.get_database_url, echo=True)


def get_session():
    with Session(engine) as session:
        try:
            yield session
        finally:
            session.close()