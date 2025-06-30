from pydantic import BaseModel
from typing import Optional

class Settings(BaseModel):
    # 项目基本信息
    PROJECT_NAME: str = "WeHotViz"
    VERSION: str = "1.0.0"
    DESCRIPTION: str = "WeHot 可视化项目"

    # 数据库配置
    DATABASE_USER: str = "root"
    DATABASE_PASSWORD: str = "password"
    DATABASE_HOST: str = "localhost"
    DATABASE_PORT: int = 3306
    DATABASE_NAME: str = "wehotviz"
    DATABASE_URL: Optional[str] = None

    class Config:
        env_file = ".env"
        case_sensitive = True

    @property
    def get_database_url(self):
        if not self.DATABASE_URL:
            return f"mysql+pymysql://{self.DATABASE_USER}:{self.DATABASE_PASSWORD}@{self.DATABASE_HOST}:{self.DATABASE_PORT}/{self.DATABASE_NAME}?charset=utf8mb4"
        return self.DATABASE_URL

settings = Settings()