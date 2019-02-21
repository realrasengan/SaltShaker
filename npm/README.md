# SaltShaker

Use nacl (tweetnacl) easily to create public private keypairs to sign, verify, encrypt and decrypt messages.  This provides 
a simple wrapper interface around dchests's tweetnacl.js which is based on tweetnacl.

```

SaltShaker.create()
= Create a new keypair

SaltShaker.create(private-key)
= Create a new keypair from private key

SaltShaker.sign(message, private-key)
= Sign a message with your private key

SaltShaker.verify(signed-message, public-key)
= Verify a sign message with a public key

SaltShaker.encrypt(message, public-key, private-key)
= Encrypt a message with a target public-key and private-key

SaltShaker.decrypt(message, nonce, public-key, private-key)
= Decrypt a message with a target public-key and private-key

SaltShaker.encryptPSK(msg,key)
= Encrypt a msg with a symmetric key

SaltShaker.decryptPSK(msg,key,nonce)
= Decrypt a msg with a symmetric key and nonce

```

## Example

```
var SaltShaker = require("saltshaker-crypto").SaltShaker;

var x = SaltShaker.create();

var y = null;

console.log(y = SaltShaker.sign("Hello",x.privatekey));

console.log(SaltShaker.verify(y,x.publickey));

console.log(y = SaltShaker.encrypt("Test",x.publickey,x.privatekey));

console.log(SaltShaker.decrypt(y.message, y.nonce, x.publickey, x.privatekey));

console.log(y = SaltShaker.encryptPSK("lol","hy"));

console.log(SaltShaker.decryptPSK(y.messsage,"hy",y.nonce));

```

## License

Copyright (c) 2019 Andrew Lee

## Thanks to

- https://github.com/dchest/tweetnacl-js
- https://code.google.com/archive/p/crypto-js/
- https://github.com/dchest/ed2curve-js
- https://github.com/dchest/tweetnacl-util-js

