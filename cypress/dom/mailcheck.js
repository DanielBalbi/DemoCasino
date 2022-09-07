const { ImapFlow } = require('imapflow');


const client = new ImapFlow({
    host: 'imap.hostinger.com',
    port: 993,
    secure: true,
    auth: {
        user: 'info@institutoweb.com.ar',
        pass: 'Danielito1967-'
    }
});

const mailcheck = async () => {
    // Wait until client connects and authorizes
    await client.connect();

    // Select and lock a mailbox. Throws if mailbox does not exist
    let lock = await client.getMailboxLock('INBOX');
    try {
        // fetch latest message source
        // client.mailbox includes information about currently selected mailbox
        // "exists" value is also the largest sequence number available in the mailbox
        let message = await client.fetchOne(client.mailbox.exists, { source: true });
        //console.log(message.source.toString());
        mensaje = message.source.toString();
        // list subjects for all messages
        // uid value is always included in FETCH response, envelope strings are in unicode.
        for await (let message of client.fetch('1:*', { envelope: true })) {
            //console.log(`${message.uid}: ${message.envelope.subject}`);
 
        }
    } finally {
        // Make sure lock is released, otherwise next `getMailboxLock()` never returns
        lock.release();
    }

    // log out and close connection
    await client.logout();
    console.log("Mensaje:" +mensaje.length)
    ubicacion = mensaje.indexOf("Confirm registration and the best game")
    console.log("Ubicacion:" + ubicacion) //20399
    console.log("Porción: **" + mensaje.slice(ubicacion+712,ubicacion+718) +"******************************************************" )
};

module.exports = new mailcheck();