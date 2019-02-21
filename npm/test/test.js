var SaltShaker = require("../index.js").SaltShaker;


var x = SaltShaker.create();

var y = null;

console.log(y = SaltShaker.sign("Hello",x.privatekey));

console.log(SaltShaker.verify(y,x.publickey));

console.log(y = SaltShaker.encrypt("Test",x.publickey,x.privatekey));

console.log(SaltShaker.decrypt(y.message, y.nonce, x.publickey, x.privatekey));

console.log(y = SaltShaker.encryptPSK("lol","hy"));

console.log(SaltShaker.decryptPSK(y.message,"hy",y.nonce));

