export default function Installation() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Installation</h1>
            <p className="mb-8 text-lg">
                To get the Application up and running, you need to install Image Magick on your system.<br/>
                On MacOS, you can install Image Magick using Homebrew:<br/>
            </p>
            <code className="font-bold bg-gray-900 text-green-400 p-4 rounded-2xl shadow-2xl">brew install imagemagick</code>
            <p className="my-8 text-lg">
                Incase Maven is not installed on your system, you can install it using Homebrew as well:<br/>
            </p>
            <code className="font-bold bg-gray-900 text-green-400 p-4 rounded-2xl shadow-2xl">brew install maven</code>
            <p className="my-8 text-lg">
                After that, move to the school_serve directory and run the following command to install the dependencies:
            </p>
            <code className="font-bold bg-gray-900 text-green-400 p-4 rounded-2xl shadow-2xl">mvn clean install</code>
            <p className="my-8 text-lg">
                To run the application, use the following command:
            </p>
            <code className="font-bold bg-gray-900 text-green-400 p-4 rounded-2xl shadow-2xl">mvn exec:java -Dexec.mainClass="com.example.Main"</code>

        </div>
    );
}