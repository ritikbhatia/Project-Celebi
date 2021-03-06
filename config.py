from dotenv import load_dotenv
from pytz import timezone
import os


DEFAULTS = {
    "MONGO_URL": "mongodb://localhost:27017",
    "MONGO_DB": "mydatabase",

    "LOG_FOLDER": "_logs",
    "IS_DEBUG": False,
}

DATETIME_FORMAT = "%Y-%m-%d %H:%M:%S"
DATE_FORMAT = "%Y-%m-%d"


def load_config():
    # read out existing os environment
    load_dotenv()
    config = {
        "MONGO_URL": os.getenv("MONGO_URL"),
        "MONGO_DB": os.getenv("MONGO_DB"),

        "LOG_FOLDER": os.getenv("LOG_FOLDER"),
        "IS_DEBUG": os.getenv("IS_DEBUG") == "1",
    }

    # apply defaults for missing config params
    for key in DEFAULTS:
        if key not in config or config[key] is None:
            config[key] = DEFAULTS[key]

    # check if log folder exists
    if not os.path.isdir(config["LOG_FOLDER"]):
        os.mkdir(config["LOG_FOLDER"])

    return config


def get_log_folder():
    config = load_config()
    return config["LOG_FOLDER"]


def get_mongodb_config():
    config = load_config()
    return config["MONGO_URL"], config["MONGO_DB"]


def get_timezone():
    # TODO: replace with your time zone
    return timezone("Australia/Melbourne")


def is_debug():
    config = load_config()
    return config["IS_DEBUG"]
