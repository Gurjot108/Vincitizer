from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from fastapi.responses import JSONResponse

class LimitUploadSizeMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, max_upload_size: int):
        super().__init__(app)
        self.max_upload_size = max_upload_size  # bytes

    async def dispatch(self, request: Request, call_next):
        if request.method == "POST":
            content_length = request.headers.get("Content-Length")
            if content_length and int(content_length) > self.max_upload_size:
                return JSONResponse(
                    status_code=413,
                    content={"error": "Uploaded file is too large. Max allowed is 5MB."}
                )
        return await call_next(request)
