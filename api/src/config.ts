import { CallerService } from "./caller.service";

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_NUMBER,
  TWILIO_API_SID,
  TWILIO_API_SECRET,
  TWILIO_APP_SID,
} = process.env;

export const callerService = new CallerService({
  accountSid: TWILIO_ACCOUNT_SID!,
  authToken: TWILIO_AUTH_TOKEN!,
  twilioNumber: TWILIO_NUMBER!,
  apiKey: TWILIO_API_SID!,
  apiSecret: TWILIO_API_SECRET!,
  appSid: TWILIO_APP_SID!,
});
