from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/')

def vehicle_data():

    data = {

        "speed": random.randint(0, 180),

        "rpm": random.randint(700, 6000),

        "fuel_level": random.randint(10, 100),

        "engine_temp": random.randint(70, 120),

        "battery_voltage": round(random.uniform(11.5, 14.5), 2)

    }

    alerts = []

    if data['engine_temp'] > 110:
        alerts.append("⚠ Engine Overheating Risk")

    if data['speed'] > 160:
        alerts.append("⚠ Dangerous Speed Detected")

    return jsonify({
        "vehicle_data": data,
        "alerts": alerts
    })

if __name__ == '__main__':
    app.run(debug=True)