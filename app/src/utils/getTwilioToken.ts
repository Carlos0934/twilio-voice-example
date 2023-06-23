const getTwilioToken = async (controller?: AbortController) => {
  const response = await fetch("http://localhost:3000/api/token", {
    signal: controller?.signal,
    method: "POST",
    body: JSON.stringify({
      identity: "test",
    }),
  });

  const { token } = await response.json();

  if (!token) {
    throw new Error("Unable to fetch token, please reload this page");
  }

  return token;
};

export default getTwilioToken;
