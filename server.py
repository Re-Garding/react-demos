from flask import Flask, render_template, request, flash, redirect, session, jsonify


app = Flask(__name__)
app.secret_key = ";ajshdfakhs"

@app.route("/")
def home():
    return render_template("index.html")




if __name__ == "__main__":

    app.run()
    host="0.0.0.0",
    use_reloader=True,
    use_debugger=True,
