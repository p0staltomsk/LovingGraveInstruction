   // grog.js

   const express = require('express');
   const fetch = require('node-fetch');
   const router = express.Router();

   router.post('/api/groq', async (req, res) => {
     const { prompt, model } = req.body;
     const apiKey = process.env.GROQ_API_KEY;

     try {
       const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
         method: "POST",
         headers: {
           "Authorization": `Bearer ${apiKey}`,
           "Content-Type": "application/json"
         },
         body: JSON.stringify({
           model: model || "llama3-8b-8192",
           max_tokens: 120,
           messages: [{ role: "user", content: prompt }]
         })
       });

       if (!response.ok) 
         throw new Error(`HTTP error! status: ${response.status}`);

       const data = await response.json();
       res.json(data);
     } catch (error) {
       console.error("Error executing Groq request:", error);
       res.status(500).json({ error: "An error occurred while executing the request" });
     }
   });

   module.exports = router;