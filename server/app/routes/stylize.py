import time
import os
from fastapi import APIRouter, UploadFile, Form, HTTPException
from fastapi.responses import JSONResponse
from stylizer import stylize_image
from ..utils.model_utils import validate_model_name
from ..utils.image_utils import save_upload_locally, remove_files
from ..utils.cloudinary_utils import upload_to_cloudinary

router = APIRouter()

@router.post("/stylize")
async def stylize(content_image: UploadFile, model_name: str = Form(...)):
    if not validate_model_name(model_name):
        raise HTTPException(status_code=400, detail="Model not found.")

    input_path, original_filename = save_upload_locally(content_image)
    stylized_filename = f"stylized_{original_filename}"
    output_path = os.path.join("data/stylized", stylized_filename)

    start = time.time()
    stylize_image(input_path, model_name, output_path)
    duration = round(time.time() - start, 2)

    original_url = upload_to_cloudinary(input_path, "vincitizer/originals")
    stylized_url = upload_to_cloudinary(output_path, "vincitizer/stylized")

    remove_files(input_path, output_path)

    return JSONResponse(content={
        "original_url": original_url,
        "stylized_url": stylized_url,
        "model_used": model_name,
        "inference_time_sec": duration
    })
