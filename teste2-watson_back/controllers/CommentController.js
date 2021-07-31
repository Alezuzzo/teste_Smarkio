const mysql = require ('mysql');

connection = mysql.createConnection({
    host: "localhost",
    user: `root`,
    password: ``,
    database: "text_to_speech",
});

async function insertNewComment(request, response){
    let {text} = request.body;

    connection.connect(function(err){ 
        let sql = `INSERT INTO comments(comment) VALUES ('${text}')`;

        connection.query(sql, function(err, result){
            if(err) throw err;
            return result;
        });


    });
    return response.json(text);
}

async function selectAllComments(request, response){
    connection.connect(function(err){
        connection.query('SELECT * FROM comments', function(err, result, fields){
            if(err) throw err;
            return response.json(result);
        });
    });
}

module.exports = {selectAllComments, insertNewComment};