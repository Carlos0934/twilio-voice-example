import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { callerService } from "./config";
const app = new Hono();

app.use(
  "/api/*",
  cors({
    origin: "*",
  })
);

app.post("/api/call", async (c) => {
  const { to } = await c.req.json();
  if (!to) {
    return c.json({ error: "Missing to or from" }, 400);
  }

  const call = await callerService.call(to);
  return c.json(call);
});

app.post("/api/token", async (c) => {
  const { identity } = await c.req.json();
  if (!identity) {
    return c.json({ error: "Missing identity" }, 400);
  }

  const token = callerService.generateToken(identity);
  return c.json({ token });
});

app.get("/api/connect", async (c) => {
  const params = c.req.query();

  console.log(params);

  const message = callerService.connectCall(params.To);

  return c.newResponse(message, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
});

serve(app, ({ port }) => console.log(`Listening on port ${port}`));
