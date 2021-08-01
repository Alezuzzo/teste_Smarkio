const mysql = require("mysql");
const path = require("path");
const fs = require("fs");
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const text_to_speech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: "J7lF3XVN1SYq4B0iwFTARkhRu_Lhm9ig7EVSSQ-Xs5E7",
  }),
  serviceUrl:
    "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/338f9aed-f8a3-4793-b7b4-3a447aa84e1a",
});

connection = mysql.createConnection({
  host: "localhost",
  user: `root`,
  password: ``,
  database: "text_to_speech",
});

async function insertNewComment(request, response) {
  let clientId = 0;
  let { text } = request.body;

  connection.connect(function (err) {
    let sql = `INSERT INTO comments(comment) VALUES ('${text}')`;

    let query = connection.query(sql, function (err, result) {
      if (err) throw err;
      clientId = result.insertId;

      return response.json(result.insertId);
    });
    console.log(query)
  });
  console.log(clientId);
  
}

async function selectAllComments(request, response) {
  connection.connect(function (err) {
    connection.query("SELECT * FROM comments", function (err, result, fields) {
      if (err) throw err;
      return response.json(result);
    });
  });
}

async function play(request, response) {
  const { text, id } = request.body;
  const params = {
    text,
    voice: "pt-BR_IsabelaV3Voice",
    accept: "audio/wav",
  };

  text_to_speech
    .synthesize(params)
    .then((response) => {
      const audio = response.result;
      return text_to_speech.repairWavHeaderStream(audio);
    })
    .then((repairedFile) => {
      fs.writeFileSync(
        `../front-smarkio/public/audio/${id}.wav`,
        repairedFile,
        (err) => {
          if (err) return err;
          console.log("Directory and File Saved");
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });

  return response.json(text);
}

module.exports = { selectAllComments, insertNewComment, play };
