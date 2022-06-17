function validateEnv<T extends string = string>(
  key: keyof NodeJS.ProcessEnv,
  defaultValue?: T,
  warnDefault = false
): T {
  const value = process.env[key] as T | undefined;

  if (!value) {
    if (typeof defaultValue !== "undefined") {
      if (warnDefault) {
        const message = `validateEnv is using a default value for ${key} and has this warning enabled.`;
        console.warn(new Error(message));
      }

      return defaultValue;
    } else {
      throw new Error(`${key} is not defined in environment variables`);
    }
  }

  return value;
}

export const config = {
  cookieName: "token",
  clientId: validateEnv("CLIENT_ID"),
  clientSecret: validateEnv("CLIENT_SECRET"),
  appUri: validateEnv("APP_URI", "http://localhost:3000", true),
  jwtSecret: validateEnv(
    "JWT_SECRET",
    "this is a development value that should be changed in production!!!!!",
    true
  ),
  botToken: validateEnv(
    "BOT_TOKEN",
    "this is your bot's token",
    true
  ),
  apiURL: validateEnv(
    "API_URL",
    "http://localhost:2000"
  ),
  apiKey: validateEnv(
    "API_KEY"
  )
} as const;
