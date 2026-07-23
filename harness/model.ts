// import { openai } from "@ai-sdk/openai";
import { createOpenAI } from "@ai-sdk/openai";
// The one place the model is configured.
//   - cheaper for a workshop → a "-mini" / "-nano" variant (e.g. "gpt-5-mini")
//   - this default            → "glm-5.2"
//
// The provider reads OPENAI_API_KEY from the environment at request time
// (the server loads it from .dev.vars on startup).
const provider = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

export const model = provider("glm-5.2");