import {genkit, z} from "genkit";
import {vertexAI} from "@genkit-ai/google-genai";


// a caller's token has a specific claim (optionally matching a specific value)
import {onCallGenkit} from "firebase-functions/https";


// API keys should be stored in Cloud Secret Manager so that access to these

// If you are using Google Developer API (googleAI) you can get an API key at https://aistudio.google.com/app/apikey

// from the Vertex AI Studio Express Mode setup.
import {defineSecret} from "firebase-functions/params";
const apiKey = defineSecret("GOOGLE_GENAI_API_KEY");


// Observability. See https://firebase.google.com/docs/genkit/observability/telemetry-collection.
import {enableFirebaseTelemetry} from "@genkit-ai/firebase";
enableFirebaseTelemetry();

const ai = genkit({
  plugins: [
    // Load the VertexAI provider. You can optionally specify your location
    // and projectID by passing in a config object; if you don't, the provider

    // If you want to use Vertex Express Mode, you can specify apiKey instead.
    vertexAI({location: "global"}),
  ],
});

// Define a simple flow that prompts an LLM to generate menu suggestions.
const menuSuggestionFlow = ai.defineFlow({
  name: "menuSuggestionFlow",
  inputSchema: z.string().describe("A restaurant theme").default("seafood"),
  outputSchema: z.string(),
  streamSchema: z.string(),
}, async (subject, {sendChunk}) => {
// Construct a request and send it to the model API.
  const prompt =
      `Suggest an item for the menu of a ${subject} themed restaurant`;
  const {response, stream} = ai.generateStream({
    model: vertexAI.model("gemini-2.5-flash"),
    prompt: prompt,
    config: {
      temperature: 1,
    },
  });

  for await (const chunk of stream) {
    sendChunk(chunk.text);
  }

  // Handle the response from the model API. In this sample, we just
  // convert it to a string, but more complicated flows might coerce the
  // response into structured output or chain the response into another
  // LLM call, etc.
  return (await response).text;
}
);

export const menuSuggestion = onCallGenkit({

  // app users can use your API. Read more at https://firebase.google.com/docs/app-check/cloud-functions
  // enforceAppCheck: true,
  // will require the user to have the email_verified claim, for example.
  // authPolicy: hasClaim("email_verified"),

  // Grant access to the API key to this function:
  secrets: [apiKey],
}, menuSuggestionFlow);
