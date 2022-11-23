var userDatabase = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "johnDoe@gmail.com",
        phone: "444-333-7777",
        password: "p123",
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

var SignUpFirstName = document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('input')[0];
var SignUpLastName =document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('input')[1];
var SignUpEmail = document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('input')[2];
var SignUpPhone =document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('input')[3];
var SignUpPassword =document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('input')[4];
var SignUpRegister = document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('button');
var SignUpReset = document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('button')[1];

/*
SignUpRegister.addEventListener("click",
    function()
    {
        console.log("ooooo");
    }
)

        // ✅ Arrays
        const arr = userDatabase || [];
        arr[0].firstName = SignUpFirstName.value;
        arr[0].lastName = SignUpLastName.value;
        arr[0].email = SignUpEmail.value;
        arr[0].phone = SignUpPhone.value;


                const newObjArr = userDatabase.map
        (obj => 
            {
            if( ['Charles'].includes(obj.firstName) )
            {
                return {...obj, firstName: SignUpFirstName.value}
            }
                return obj
            }
        );
*/

function updateValue() 
{

    if( SignUpFirstName.value.length > 0 &&
        SignUpLastName.value.length > 0 &&
        SignUpEmail.value.length > 0 &&
        SignUpPhone.value.length > 0 // && SignInPassword.value.length > 0
      )
    {     
        var newUser = new Object;

        newUser = {
            firstName: SignUpFirstName.value,
            lastName: SignUpLastName.value,
            email: SignUpEmail.value,
            phone: SignUpPhone.value,
            password: SignUpPhone.value,
        };

        userDatabase.push(newUser);
    }
}

SignUpReset.addEventListener("click", updateValue);


var SignInEmail = document.querySelectorAll("div")[3].getElementsByTagName('form')[0].getElementsByTagName('input')[0];
var SignInPassword = document.querySelectorAll("div")[3].getElementsByTagName('form')[0].getElementsByTagName('input')[1];
var SignInSubmit = document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('button');
var SignInReset = document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('button')[1];

// console.log()

function updateValue() 
{

    if( SignInEmail.value.length > 0 
        &&
        SignInPassword.value.length > 0 )
    {     
        userDatabase.forEach()
    }
}

SignUpReset.addEventListener("click", updateValue);