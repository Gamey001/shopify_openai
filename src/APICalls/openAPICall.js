export const openAPICall = async (promptField) => {
    const data = {
      prompt: promptField,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
  
    return await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .catch(() => ({ error: "Unable to connect to server. Please try again" }));
  };
  