import os
import requests

def download_image(image_url, save_directory="images", file_name=None):
    """
    Downloads an image from the given URL and saves it to the specified directory.
    
    Parameters:
        image_url (str): The URL of the image to download.
        save_directory (str): The directory where the image will be saved. Default is "images".
        file_name (str): The name to save the image as. If None, the name will be inferred from the URL.
    """
    try:
        # Ensure the save directory exists
        if not os.path.exists(save_directory):
            os.makedirs(save_directory)
        
        # Infer the file name from the URL if not provided
        if not file_name:
            file_name = os.path.basename(image_url.split("?")[0])
        
        # Path to save the image
        save_path = os.path.join(save_directory, file_name)
        
        # Fetch the image content
        response = requests.get(image_url, stream=True)
        response.raise_for_status()  # Raise an exception for HTTP errors
        
        # Save the image to the file
        with open(save_path, "wb") as image_file:
            for chunk in response.iter_content(1024):
                image_file.write(chunk)
        
        print(f"Image successfully downloaded: {save_path}")
    except requests.exceptions.RequestException as e:
        print(f"Failed to download the image. Error: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

# Example usage
if __name__ == "__main__":
    image_url = "https://staticimg.amarujala.com/assets/images/2022/06/26/optical-illusion-hindi_1656231523.jpeg"  # Replace with your image URL
    download_image(image_url)
