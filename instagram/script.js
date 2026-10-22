// Instagram


//database
//-Datatypes -
// Instagram

// database
//- Datatypes - c
let database = []
let users = [
    {
        "id":"insta1",
        "name":"John Doe",
        "email":"john@gmail.com",
        "username":"mkadinali",
        "password":"12345676887",
        "followers":100,
        "posts":[
            {
                "imageurl":"asdfghjkloiuytrewdfghj",
                "caption":"Ngumi mbwegzee",
                "likes":34,
            },
            {
                "imageurl":"asdfghjkloiuytrewdfghj",
                "caption":"Ngumi mbwegzee",
                "likes":67,
            }
        ]
    },
    {
        "name":"Jane Doe",
        "email":"jane@gmail.com",
        "username":"pretty princess",
        "password":"87654335467",
        "followers":10000,
        "posts":[
            {
                "imageurl":"asdfghjkloiuytrewdfghj",
                "caption":"Living life",
                "likes":5000,
            },
            {
                "imageurl":"asdfghjkloiuytrewdfghj",
                "caption":"Skin care",
                "likes":670,
            }
        ]
    }
]

function signUp(name,username, email, password){
    let id = "insta" + users.length 

    let newUser  = {
        "id": id,
        "name":name, 
        "email":email,
        "username": username,
        "password":password,
        "followers": 0,
        "posts":[]
    }

    users.push(newUser)
    return newUser

}

signUp("nicolle", "tonka","nicole@gmail.com","1234567890")
signUp("Said", "Said","said@gmail.com","5432167890")
signUp("Sandra", "Sandra","sandra@gmail.com","6789054321")


function newPost(username,password, imageurl, caption){
   for(let i = 0; i <= users.length; i++){
        console.log(users[i].username)
        if(username == users[i].username && password == users[i].password){
            console.log("Username",username, users[i].username )

            let newPost = {
                "imageurl":imageurl,
                "caption": caption,
                "likes": 0
            }
            console.log("Username",users[i].username)
            users[i].posts.push(newPost)
            return newPost
        }
        else{
            let message = "Incorrect Credentials"
            return message
        }
        
   }
}
console.log(newPost("mkadinali","1234567890","wasedrtfgyuheyhwtdcet","Clock it")
)

console.log(users)


// LIKE A POST
function likePost(username, postIndex) {

    // Find the user who owns the post
    let user = users.find(user =>
        user.username === username
    );

    if (!user) {
        return "User not found";
    }

    // Check whether the post exists
    if (
        !Number.isInteger(postIndex) ||
        postIndex < 0 ||
        postIndex >= user.posts.length
    ) {
        return "Post not found";
    }

    // Increase the number of likes
    user.posts[postIndex].likes++;

    return "Post liked successfully";
}


// TEST THE FUNCTION

console.log(likePost("pretty princess", 0));

console.log(users.find(user =>
    user.username === "pretty princess"
).posts);

// CHANGE USERNAME
function changeUsername(currentUsername, newUsername, password) {

    // Find the account
    let user = users.find(user =>
        user.username === currentUsername &&
        user.password === password
    );

    if (!user) {
        return "Incorrect username or password";
    }

    // Check that the new username is not empty
    if (!newUsername || !newUsername.trim()) {
        return "Username cannot be empty";
    }

    newUsername = newUsername.trim();

    // Check if the new username is already taken
    let usernameExists = users.some(user =>
        user.username.toLowerCase() === newUsername.toLowerCase()
    );

    if (usernameExists) {
        return "Username already taken";
    }

    // Update the username
    user.username = newUsername;

    return "Username changed successfully";
}

// TEST CHANGE USERNAME
console.log(
    changeUsername(
        "mkadinali",
        "john_official",
        "12345676887"
    )
);

// Check the updated user
console.log(users.find(user =>
    user.username === "john_official"
));
