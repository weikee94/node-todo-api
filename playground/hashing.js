const {SHA256} = require('crypto-js');

const bcrypt = require('bcryptjs');

var password = '123abc';

//call two method to hash password

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     })
// })

var hashedPassword = '$2a$10$76LsCfrVV2j6jSKfKEHz0uBnVhEt0batAWqacUnPOIwM2Bsl4M95.';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// var message = 'I am user number one';
// var hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Dont trust!');
// }

// const jwt = require('jsonwebtoken');

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123Abc');
// console.log(token);

// var decoded = jwt.verify(token, '123Abc');
// console.log(decoded);