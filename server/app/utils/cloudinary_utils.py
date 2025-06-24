import cloudinary.uploader

def upload_to_cloudinary(local_path, folder):
    return cloudinary.uploader.upload(local_path, folder=folder)["secure_url"]
