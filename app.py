import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='ui/build/')

@app.route('/')
def index():
    return send_from_directory('ui/build/', 'index.html')

@app.route('/checkin/<projectname>/<qty>')
def checkIn_hardware(projectId, qty):
     return str(qty) + " checked in " + str(projectname)
    
@app.route('/checkout/<projectname>/<qty>')
def checkOut_hardware(projectid, qty):
    return str(qty) + " checked out " + str(projectname)

@app.route('/join/<projectname>')
def joinProject(projectid):
    return "Wafee Choudhury joined " + str(projectname)

@app.route('/leave/<projectname>')
def leaveProject(projectid):
    return "Wafee Choudhury left " + str(projectname)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))