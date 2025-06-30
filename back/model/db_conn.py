
from config.config import settings
from sqlmodel import create_engine, Session

engine = create_engine(settings.get_database_url, echo=True)


def get_session():
    with Session(engine) as session:
        try:
            yield session
        finally:
            session.close()
