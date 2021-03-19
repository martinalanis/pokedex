const baseUrl = 'http://beta.soldai.com/bill-cipher'
const soldAiKey = process.env.VUE_APP_SOLDAI_KEY

export default
{
  askQuestion: async (sessionId, question) => {
    return await fetch(`${baseUrl}/askquestion?session_id=${sessionId}&key=${soldAiKey}&log=${sessionId}&question=${question}`).then(res => res.json())
  }
}
