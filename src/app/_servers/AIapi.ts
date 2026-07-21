import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_AI_API_KEY;
export async function askAi(question: string) {
  if (!apiKey) throw new Error("GOOGLE_AI_API_KEY is not defined");

  const genAI = new GoogleGenerativeAI(apiKey);
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

    const result = await model.generateContent(question);
    return result.response.text();
  } catch (error) {
    throw error;
  }
}

export async function generateAiImage(prompt: string) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ID}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_WORKER_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const imageBuffer = await response.arrayBuffer();
    const imageData = Buffer.from(imageBuffer);
    return imageData;
  } catch (error) {
    console.error("Error generating or uploading image:", error);
    throw error;
  }
}
