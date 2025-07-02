from pydantic import BaseModel
from typing import Optional


class Settings(BaseModel):
    # 项目基本信息
    PROJECT_NAME: str = "project_name"
    VERSION: str = "1.0.0"
    DESCRIPTION: str = "project description"

    # 项目启动配置
    APP_IP: str = "0.0.0.0"
    APP_PORT: int = 8000
    RELOAD: bool = True

    # 数据库配置
    DATABASE_USER: str = "mysql"
    DATABASE_PASSWORD: str = "passwd"
    DATABASE_HOST: str = "mysql-server"
    DATABASE_PORT: int = 3306
    DATABASE_NAME: str = "db_mysql"
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
