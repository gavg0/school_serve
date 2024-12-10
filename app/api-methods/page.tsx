export default function ApiMethods() {
    return (
        <div className="mx-auto max-w-4xl text-lg">
        <h1 className="text-2xl font-bold pb-8">API-Methods</h1>
        <p>
            The School_serve API provides several methods for interacting with the School_serve service. <br/>
            The methods allow you to upload images, retrieve images by creator ID, and retrieve images by image ID. <br/>
            These are all Methos that are available:<br/>
        </p>
        <div className="h-1 w-full bg-gray-400 rounded-full my-4"></div>
            <div className="bg-green-500/50 p-4 rounded-2xl mb-4 border-2 border-green-500 shadow-lg shadow-green-500"><strong>GET</strong> <code>/</code> - This is the school_serve API.</div>
            <p>This is just the default Route</p>
            <div className="h-1 w-full bg-gray-400 rounded-full my-4"></div>
            <div className="bg-green-500/50 p-4 rounded-2xl mb-4 border-2 border-green-500 shadow-lg shadow-green-500"><strong>GET</strong> <code>/ImageByID/{'{ID}'}</code> - Retrieve image by ID.</div>
            <p><strong>Required:</strong> Image_ID: INT<br/>
            <strong>Receive:</strong> IMAGE.webp<br/></p>
            <div className="h-1 w-full bg-gray-400 rounded-full my-4"></div>
            <div className="bg-green-500/50 p-4 rounded-2xl mb-4 border-2 border-green-500 shadow-lg shadow-green-500"><strong>GET</strong> <code>/ImageByCreatorID/{'{creatorId}'}</code> - Retrieve images by creator ID.</div>
            <p><strong>Required:</strong> Creator_ID: INT <br/>
            <strong>Receive:</strong> IMAGE.webp</p>
            <div className="h-1 w-full bg-gray-400 rounded-full my-4"></div>
            <div className="bg-green-500/50 p-4 rounded-2xl mb-4 border-2 border-green-500 shadow-lg shadow-green-500"><strong>GET</strong> <code>/ImageAtTimeStamp/{'{timeStamp}'}</code> - Retrieve images by timestamp.</div>
            <p><strong>Required:</strong> Timestamp of any time of the Day required<br/>
            <strong>Receive:</strong> IMAGE.webp</p>
            <div className="h-1 w-full bg-gray-400 rounded-full my-4"></div>
            <div className="bg-red-500/50 p-4 rounded-2xl mb-4 border-2 border-red-500 shadow-lg shadow-red-500"><strong>POST</strong> <code>/Upload/{'{UserID}'}</code> - Upload an image.</div>
            <p><strong>Required:</strong> UserID: INT, Image: FILE<br/>
            <strong>Receive:</strong> Success message or error<br/>
            Example Curl Command:</p>
            <div className="font-bold bg-gray-900 text-green-400 p-4 rounded-2xl shadow-2x">
            curl -X POST -F "image=@test.png" http://localhost:7070/Upload/1
            </div>
        </div>
    );
    }