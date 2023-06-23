
# Twilio Voice SDK Example for node.js

This example demonstrates how to use the Twilio Voice SDK to make outbound calls from your node.js server.

![image](https://github.com/Carlos0934/twilio-voice-example/assets/46497770/9e40ba83-4e7d-4180-a785-ac32d783ee1c)

## Setup

To run this example, you'll need to gather your Twilio account credentials and configure them in a file named `.env`. To create the file, make a copy of `.env.example` and rename it to `.env`. Then, open the file and update the values for env variables with values from your [Twilio account](https://www.twilio.com/console).

### Install ngrok

This example uses [ngrok](https://ngrok.com/) to expose your local server to the twilio service. Install ngrok by following the instructions [here](https://ngrok.com/download).

### Run services with docker compose

```bash
docker-compose up
```

### Expose your local server to the internet

```bash
ngrok http 3000
```

### Configure your ngrok URL in your Twilio account
Copy the ngrok URL and configure it as the Voice Request URL for your Twilio TwiML App. You can create a new TwiML App [here](https://www.twilio.com/console/voice/twiml/apps). Make sure to configure the Voice "REQUEST URL" to be your ngrok URL followed by `/api/connect` (e.g. `https://<your-ngrok-subdomain>.ngrok.io/api/connect`).






