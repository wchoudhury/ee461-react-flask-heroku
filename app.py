from flask import Flask
import os

app = Flask(__name__, static_url_path='', static_folder='ui/build/')

@app.route('/checkin/<projectid>/<qty>')
def checkIn_hardware(projectid, qty):
    return '{qty} sets checked in to {projectid}'.format(qty=qty, projectid=projectid)

@app.route('/checkout/<projectid>/<qty>')
def checkOut_hardware(projectid,qty):
    return '{qty} sets checked out of {projectid}'.format(qty=qty, projectid=projectid)

@app.route('/join/<projectid>')
def joinProject(projectid):
    return "Wafee Choudhury joined " + str(projectid)

@app.route('/leave/<projectid>')
def leaveProject(projectid):
    return "Wafee Choudhury left " + str(projectid)

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 80))