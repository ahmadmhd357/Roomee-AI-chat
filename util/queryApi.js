import openAi from "./chatgpt";

const query = async (message) => {
  const res = await openAi
    .createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 1,
      max_tokens: 200,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `Roomee was unable to find you answer right now maybe you try later ${err}`
    );

  return res;
};

export default query;
