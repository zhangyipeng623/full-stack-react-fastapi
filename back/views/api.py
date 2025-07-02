from fastapi import Depends, APIRouter

router = APIRouter(prefix="")


@router.get("/hello")
def hello():
    return {"message": "hello world"}
