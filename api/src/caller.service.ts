import { Twilio, twiml, jwt } from "twilio";

interface Config {
  accountSid: string;
  authToken: string;
  twilioNumber: string;
  apiKey: string;
  apiSecret: string;
  appSid: string;
}
export class CallerService {
  private twilioClient: Twilio;

  constructor(private readonly config: Config) {
    this.twilioClient = new Twilio(config.accountSid, config.authToken);
  }

  public async call(to: string) {
    const message = new twiml.VoiceResponse().say(
      "Hello world! This is a test call."
    );
    return await this.twilioClient.calls.create({
      to: to,
      from: this.config.twilioNumber,
      twiml: message,
    });
  }

  public generateToken(identity: string) {
    const token = new jwt.AccessToken(
      this.config.accountSid,
      this.config.apiKey,
      this.config.apiSecret,
      {
        identity: identity,
      }
    );

    const grant = new jwt.AccessToken.VoiceGrant({
      outgoingApplicationSid: this.config.appSid,
      incomingAllow: true,
    });

    token.addGrant(grant);

    return token.toJwt();
  }

  public connectCall(to?: string): string {
    const response = new twiml.VoiceResponse();

    const dial = response.dial({ callerId: this.config.twilioNumber }, to);

    if (to) {
      dial.number(to);
    } else {
      response.say("We couldn't connect your call.");
    }

    return response.toString();
  }
}
