import watson from '../../watson/client-watson';

class WatsonController {
  async store(req, res) {
    const { text, context = {} } = req.body;
    
    const createSession = await watson.createSession({
      assistantId: '7acd2712-8373-46b0-8484-d2174296bf6d'
    });
    const sessionId = createSession.result.session_id;

    const params = {
      input: { text },
      assistantId: '7acd2712-8373-46b0-8484-d2174296bf6d',
      context,  
      sessionId,
    }

    watson.message(params, (err, response) => {
      console.log(err);
      if (err) res.status(500).json({ error: err });
      res.json(response);
    });
  }
}

export default new WatsonController();