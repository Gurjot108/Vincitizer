from fastapi import APIRouter
from ..utils.model_utils import list_models

router = APIRouter()

@router.get("/models")
def get_models():
    return {"models": list_models()}
