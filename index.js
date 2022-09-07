//////////////////////////////////////////////////////////////
// Reading via IMAP of incoming emails to
// the user's box and obtaining the validation key
//////////////////////////////////////////////////////////////
// Run this script from terminal: node index.js
// This starts a web service on localhost:3051/new/

const express = require('express');
const bodyParser = require('body-parser');
const { ImapFlow } = require('imapflow');

const app = express();
app.use(bodyParser.json());

    // Listening endpoint for the messages requested with the username and password
    // to register that matches the data of the email box
    app.post('/new/',async (req,res) => {
    try {

    // new Imap type object with the data to log in to the mailbox      
    const client = new ImapFlow({
        host: 'imap.hostinger.com',
        port: 993,
        secure: true,
        auth: {
            user: req.body.usuemail,
            pass:  req.body.usuclave
        }
    });

    // Wait until client connects and authorizes
    await client.connect();
  

    // Select and lock a mailbox. Throws if mailbox does not exist
    let lock = await client.getMailboxLock('INBOX');
  
        // fetch latest message source
        // client.mailbox includes information about currently selected mailbox
        // "exists" value is also the largest sequence number available in the mailbox
        let message = await client.fetchOne(client.mailbox.exists, { source: true });
        
        mensaje = message.source.toString();

        // list subjects for all messages
        // uid value is always included in FETCH response, envelope strings are in unicode.
        for await (let message of client.fetch('1:*', { envelope: true })) {
           // console.log(`${message.uid}: ${message.envelope.subject}`);
 
        }
    // log out and close connection
    await client.logout();
    
    // Remove special html characters that may exist within the email
        newStr1 = mensaje.replace(/(\r\n|\n|\r|\t|=09|=E2=80=8A|=|\/|\<|\>|div|\")/gm, "");
        sacar = 'div';
        newStr = newStr1.replace(sacar , "")
   
    // Look for the phrase within the mail to take as a starting point from the place where the key is.
        ubicacion = newStr.indexOf("Confirm registration and the best")

    // Get the key based on the location of the previous phrase. 
        ultimomsg =  newStr.substring(ubicacion+559,ubicacion+565);
        // retorno el valor de la clave en formato Json
        res.send({ clave: ultimomsg } );
    
    } catch(error) {
    // if an error occurred, return a 404 with the message 'invalid key'
            res.status(404).send({ error: 'clave no válida' });
    }  
    finally {
       try{
        // Force to close the connection in case there are or not failures
        lock.release();
       }catch(error){
        //console.log('error');
       }   
    }
}
);

// Run the server to start the service.
app.listen(3051, () => { console.log('Servidor en 3051')})