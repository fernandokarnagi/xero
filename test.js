var bodyJson = {
    events: [],
    firstEventSequence: 0,
    lastEventSequence: 0,
    entropy: 'PFOQNOOYUREBERSGCXDM'
}

let xeroSignature = 'p76deXobxTgD6LKMyoYiG/4JtU+1kHznJinfFRNYQWU=';
var sharedSecret = 'xxxxxxxxxxxxxxxxxxxxxxxx';

// console.log(bodyJsonStr);
var buf = Buffer.from(JSON.stringify(bodyJson));

var signature = crypto.createHmac("sha256", sharedSecret).update(buf).digest("base64");
var signature2 = crypto.createHmac("sha256", sharedSecret).update(JSON.stringify(bodyJson)).digest("base64");
console.log('Xero Shared Secret: ', sharedSecret);
console.log('Xero Signature: ', xeroSignature);
console.log('Payload signature: ', signature);
console.log('Payload signature 2: ', signature2);
