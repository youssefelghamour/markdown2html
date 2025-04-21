from flask import Flask, jsonify, request
from flask_cors import CORS
from markdown2html import convert


app = Flask(__name__)
cors = CORS(app)



@app.route('/')
def home():
    """ Home route to check status """
    return jsonify({"message": "API running on PORT 5000"}), 200



@app.route('/convert', methods=['POST'], strict_slashes=False)
def get_data():
    """ Convert markdown to HTML """
    data = request.get_json().get('data')  # Extract data from the POST request JSON
    if data:
        markdown = convert(data)
        return jsonify({"html": markdown}), 200
    return jsonify({"error": "No markdown data provided"}), 400



@app.errorhandler(404)
def not_found(error):
    """ 404 Error handler """
    return jsonify({"error": "Not found"}), 404



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, threaded=True, debug=True)