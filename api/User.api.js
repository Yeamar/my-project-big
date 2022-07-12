const fs    = require('fs');
const path  = require('path');
const Userspath = path.join(__dirname + '/../data/users.json');


function ReadUsers() {
   const MyUsers = JSON.parse(fs.readFileSync(Userspath, 'utf8'));
    console.log(MyUsers);
    return MyUsers
}

function AddaUser(user) {
    const MyUsers = ReadUsers();
    MyUsers.push(user);
    fs.writeFileSync(Userspath, JSON.stringify(MyUsers));
}












module.exports = {ReadUsers  , AddaUser    };