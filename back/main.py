from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config.config import settings
from views import router as api_router
from contextlib import asynccontextmanager
from model import engine 
from model import SQLModel, HotSearch, HotSearchItem,Top

async def create_tables():
    SQLModel.metadata.create_all(engine)

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("app startup")
    await create_tables()
    yield

app = FastAPI(title=settings.PROJECT_NAME,lifespan=lifespan)


# 配置CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

    
# 包含API路由
app.include_router(api_router)


@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI+SQLModel+MySQL Template"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)