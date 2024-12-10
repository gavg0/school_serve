export default function DataStorage() {
    return (
        <div className="text-lg max-w-4xl mx-auto">
        <h1 className="text-black text-4xl font-bold">Data Storage</h1>
        <p>
            Do store Image date, ive chosen the most simple way instead of using a database.<br/>
            I am just using one json file to store the image_ID, user_ID and a Timestamp.<br/>
            That this is not the best way to store data is obvious but for this small project it is enough.<br/>
        </p>
        <h2>JSON File</h2>
        <p>
            The JSON File is located in the image folder.<br/>
            It is called images.json and has the following structure:
        </p>
        <pre className="font-bold bg-gray-900 text-green-400 p-4 rounded-2xl shadow-2x">
            <code>
            {JSON.stringify(code, null, 2)}
            </code>
        </pre>
        <p>
            The key is the image_ID and the value is an array with the user_ID and the timestamp.<br/>
            The timestamp is a Unix timestamp.<br/>
            The user_ID is the ID of the user that uploaded the image.<br/>
            Value 0 and the empty string are supposed to help the program find the right spot.<br/>
        </p>
        </div>
    );
}
var code = {
        " 0 ": [0],
        "": [],
        " 1 " : [1, 1731882264] ,
        " 2 " : [1, 1731882708] }
    