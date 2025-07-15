import { Groq } from 'groq-sdk';
import { NextRequest, NextResponse } from 'next/server';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { code, fromLanguage, toLanguage } = await request.json();

    if (!code || !fromLanguage || !toLanguage) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const prompt = `Translate the following ${fromLanguage} code to ${toLanguage}. 
    Only return the translated code without any explanations or markdown formatting:

    ${code}`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama3-8b-8192",
      temperature: 0.1,
      max_tokens: 2048,
      top_p: 1,
      stream: false,
    });

    const translatedCode = chatCompletion.choices[0]?.message?.content || '';

    return NextResponse.json({ translatedCode });
  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { error: 'Failed to translate code' },
      { status: 500 }
    );
  }
}



