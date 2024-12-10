
import "./globals.css";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-lg">
    <h1 className="text-3xl font-bold mb-4">School Serve API Documentation</h1>
    <p className="mb-4">
        This API is my Project and is supposed to digitalize paper worksheets.<br/>
        It provides functionalities for uploading images in various formats, converting them to the web-optimized WebP format, and accessing them through unique identifiers, creator IDs, or upload timestamps.
    </p>
    <p className="mb-4">
        This documentation provides a guide to the APIs endpoints, request parameters, responses, and data storage mechanisms. <br/>
    </p>
    <h2 className="text-2xl font-bold mb-4">Technologies Used:</h2>
    <ul className="list-disc ml-8 mb-4">
        <li><a href="" className="underline text-blue-500" >Java</a></li>
        <li><a href="https://javalin.io/" className="underline text-blue-500">Javalin</a></li>
        <li><a href="https://maven.apache.org/" className="underline text-blue-500">Maven</a></li>
        <li><a href="https://imagemagick.org/index.php" className="underline text-blue-500">Image Magick</a></li>
      </ul> 
    <h2 className="text-2xl font-bold mb-4">Current Status</h2>
    <p className="mb-4">
      I have underestimated the Project size and complexity so not all functions are available.<br/>
      I worked on all functions but i dont want to upload unfinished or buggy code so i have focused on the core functions.<br/>
      Things like Authentication are of course missing but i took care of proper error handling and logging.<br/>
      These are the functions that are available:
    </p>
    <ul className="list-disc ml-8 mb-4">
        <li>Upload an image by providing an user_ID</li>
        <li>Search for an image by its ID</li>
        <li>Search for all images uploaded from an user_ID</li>
        <li>Search for all images uploaded at a specific Day</li>
        <li>Images get converted to WEBP to save storage</li>
      </ul>
    <h2 className="text-2xl font-bold mb-4">Structure</h2>
    <p className="mb-4">
      The Project has a folder called school_serve where all the code is located.<br/>
      The README file just contains a link to this documentation.<br/>
      Inside the school_serve folder you will find the following folders:<br/>
      - images: This is where the images are stored as well as the image.json and the last_id.txt<br/>
      - src/main/java/com/example: This is where the code is located<br/>
    </p>
</div>
  );
}
