export const CallGPT = async ({ prompt }) => {
  const messages = [
    {
      role: "system",
      content: `You are a psychological counselor who writes and analyzes emotional diaries. Proceed in the following order.`,
    },
    {
      role: "user",
      content: `1. [title] : Think of the diary title after understanding the [events] separated by """ at the bottom.
  2. [summarize] : summarize events in order with one line sentence.
  3. [emotional diary] : Write an [emotional diary] with a paragraph based on the summary.
  4. [evaluates] : The written emotional [evaluates], using explore the unconscious based on the contents of the [emotional diary].
  6. [Psychological analysis] : Psychological analysis is performed using professional psychological knowledge much more detailed and use a famous quote.
  7. [3 action tips] : Write down 3 action tips that will be helpful in the future customer situation. The three action tips must be converted into JSON Array format.
  
  Translate the output into KOREAN and ensure it is in the following JSON format:
  
  {
      "title": here is [title],
      "summary": here is [summarize],
      "emotional_content": here is [emotional diary],
      "emotional_result": here is [evaluates],
      "analysis": here is [Psychological analysis],
      "action_list": here is [3 action tips]
  }
  Ensure the response is valid JSON format. Do not include any extra explanations or text. If any part is missing, fill it in with an empty string or an empty array. DO NOT forget translate the output into KOREAN`,
    },
    {
      role: "user",
      content: `
  """
  ${prompt}
  """`,
    },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
      max_tokens: 1_000,
    }),
  });
  const responseData = await response.json();
  console.log(">>responseData", responseData);

  const message = responseData.choices[0].message.content;

  return message;
};
