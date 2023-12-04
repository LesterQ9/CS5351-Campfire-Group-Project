from flask import Flask, request, jsonify
from utilization.file_read import read_file_line_by_line
from utilization.file_parse import parse_results
import os

app = Flask(__name__)

UPLOAD_FOLDER = 'assets/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'py'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/api/upload", methods=['POST'])
def upload_file():
    # Check if the post request has the file part
    if 'file' not in request.files:
        return {"error": "No file provided"}, 400

    file = request.files['file']

    # Check if the file is selected
    if file.filename == '':
        return {"error": "No file selected"}, 400

    # Check if the file has an allowed file extension
    if file and allowed_file(file.filename):
        # Save the file to the specified upload folder
        filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        print(f"Saving file to: {filename}")
        file.save(filename)
        contents = read_file_line_by_line(filename)

        # Handle the file as needed (e.g., process its content, etc.)
        # For demonstration purposes, just returning a success message
        return {
            "filename": file.filename,
            "contents": contents
        }

    return {"error": "Invalid file type"}, 400

# Report API route
@app.route("/report", methods=['GET'])
def report():
    filepath = "assets/test_files/c.py"
    contents = read_file_line_by_line(filepath)
    file = {
            "filename": 'c.py',
            "contents": contents
        }
    result = []
    result.append(file)
    return result

@app.route("/result", methods=['GET'])
def pytest_report():
    return parse_results()

# Route to handle the "run code" message
@app.route("/run-code", methods=['POST'])
def run_code():
    data = request.json
    if data and 'message' in data and data['message'] == 'run code':
        exe()  # Execute the code
        return {"message": "Code executed"}
    else:
        return {"message": "Invalid request"}

if __name__=="__main__":
    app.run(debug=True)