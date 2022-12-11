var userDatabase = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "gmail",
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

var SignUpFirstName = document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('input')[0];
var SignUpLastName =document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('input')[1];
var SignUpEmail = document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('input')[2];
var SignUpPhone =document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('input')[3];
var SignUpPassword =document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('input')[4];
var SignUpRegister = document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('button')[0];
var SignUpReset = document.querySelectorAll("div")[2].getElementsByTagName('form')[0].getElementsByTagName('button')[1];

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
            password: SignUpPassword.value,
        };

        userDatabase.push(newUser);
    }
}

var SignInEmail = document.querySelectorAll("div")[3].getElementsByTagName('form')[0].getElementsByTagName('input')[0];
var SignInPassword = document.querySelectorAll("div")[3].getElementsByTagName('form')[0].getElementsByTagName('input')[1];
var SignInSubmit = document.querySelectorAll("div")[3].getElementsByTagName('form')[0].getElementsByTagName('button')[0];
var SignInReset = document.querySelectorAll("div")[3].getElementsByTagName('form')[0].getElementsByTagName('button')[1];

function validUser()
{
    console.log("---validUser function---");

    let foundUser = false;
    let userIndex = -1;

    for(let i=0; i<userDatabase.length; ++i)
    {
        if( SignInEmail.value === userDatabase[i].email && 
            SignInPassword.value === userDatabase[i].password )
        {
            foundUser = true;
            userIndex = i;
        }
    }

    return userIndex;
}

function signIn()
{
    console.log("---signIn function---");
    
    var userId = validUser();

    if( userId === -1 ) // foundUser === false
    {
        console.log("Sign In: Failure");
    }
    else // foundUser === true
    {
        console.log("Sign In: Sucess");
        //console.log("Welcome back, " + userDatabase[userId].firstName);
        console.log(newsFeed);
    }

    return userId;
}

// console.log()

function clearSignUpData()
{
    SignUpFirstName.value = "";
    SignUpLastName.value = "";
    SignUpEmail.value = "";
    SignUpPhone.value = "";
    SignUpPassword.value = "";
}

function clearSignInData()
{
    SignInEmail.value = "";
    SignInPassword.value = "";
}

// note use of Callback Functions below
SignUpRegister.addEventListener("click", updateValue);
SignUpReset.addEventListener("click", clearSignUpData);

SignInSubmit.addEventListener("click", signIn);
SignInReset.addEventListener("click", clearSignInData);
