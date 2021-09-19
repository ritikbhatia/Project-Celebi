from flask import Flask
from dotenv import load_dotenv
import os

if __name__ == "__main__":
    load_dotenv()
    app = Flask(__name__)
    app.debug = False
    app.run()