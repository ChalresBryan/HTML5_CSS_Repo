var userDatabase = [
    {
        username: "Charles",
        password: "password123"
    },
    {
        username: "John",
        password: "p123"
    },
    {
        username: "Jane",
        password: "pword123"
    }
];

var newsFeed = [
    {
        username: "Bob",
        timeline: "Happy Monday!"
    },
    {
        username: "Sally",
        password: "Can't wait for the weekend!"
    },
    {
        username: "Dan",
        password: "What is today's weather?"
    }
];

function validUser(userName,userPassword)
{
    let foundUser = false;
    let userIndex = -1;

    for(let i=0; i<userDatabase.length; ++i)
    {
        if( userName === userDatabase[i].username && 
            userPassword === userDatabase[i].password )
        {
            foundUser = true;
            userIndex = i;
        }
    }

    return userIndex;
}

function signIn(userName,userPassword)
{
    let userId = validUser(userName,userPassword);

    if( userId != -1 )
    {
        console.log("Sign In: Sucess");
        console.log("Welcome back, " + userDatabase[userId].username);
        console.log(newsFeed);
    }
    else // foundUser === false
    {
        console.log("Sign In: Failure");
    }

    return userId;
}

var userNamePrompt = prompt("Input user name");
var userPasswordPrompt = prompt("Input password");

signIn(userNamePrompt,userPasswordPrompt);

// console.log()