import { Device } from "@twilio/voice-sdk";
import { useCallback, useEffect, useMemo, useState } from "react";
import getTwilioToken from "../utils/getTwilioToken";
function useCall() {
  const [device, setDevice] = useState<Device>();

  const state = useMemo(() => {
    if (!device) return "disconnected";

    return device.state;
  }, [device]);
  const call = useCallback(
    async (to: string) => {
      if (!device) return;

      const connection = await device.connect({
        params: {
          To: to,
        },
      });

      return connection;
    },
    [device]
  );

  const disconnect = useCallback(() => {
    if (!device) return;

    device.disconnectAll();
  }, [device]);

  useEffect(() => {
    const controller = new AbortController();

    const token = getTwilioToken(controller);

    token.then((token) => {
      const device = new Device(token);

      setDevice(device);

      return device.register();
    });

    return () => controller.abort();
  }, []);

  return { call, disconnect, state };
}

export default useCall;
