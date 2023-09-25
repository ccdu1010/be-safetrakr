#  Safetrakr API

This project is an API for the mobile app Safetrakr. Currently it is only used for sending SMS messages.

An overview of each endpoint, including a description, example requests and responses can be found on the /api route.

## Running the API locally
### Prerequisites
To run this API locally, you will require the following dependencies to be installed.

* **Node.js** - minimum version 18 is required.  Go to [here](https://nodejs.org/en/download) to install.

### Installation
Follow the steps below to install the API

1. Clone the repository
```
git clone https://github.com/ccdu1010/be-safetrakr.git
```

2. Install dependencies by running the following command from the be-safetrakr (root) directory
```
npm install
```

3. To allow the API to connect to twilio (the SMS provider), environment variables must be set to determine which account to use. To do this, please add a file named `.env.development` to the root directory with the following content: 

``` 
TWILIO_ACCOUNT_SID = twilio-sid-here
TWILIO_AUTH_TOKEN = twilio-auth-token-here
TWILIO_NUMBER = twilio-phone-number-here
```

4. Firebase is used for authentication to the API.  To set this up please use a firebase project here - https://console.firebase.google.com/.  From the firebase console go to project settings, service accounts and generate a new private key.  Copy this file into the firebase folder and rename it to ServiceAccount.json.  You can then use tokens from any authenticated user on this firebase project as a bearer toke n in the request to send an SMS.

6. Run the API
```
npm run start
```

### Running tests

The tests for the API use [SuperTest](https://www.npmjs.com/package/supertest). For the tests to run, another environment file named `.env.test` should be added to the root directory with the following content: 

```
TWILIO_ACCOUNT_SID = twilio-sid-here
TWILIO_AUTH_TOKEN = twilio-auth-token-here
TWILIO_NUMBER = twilio-phone-number-here
```

Then to run the tests:
```
npm test
```