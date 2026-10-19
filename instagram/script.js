// Instagram


//database
//-Datatypes -
let database = []
let users = [
    {
        "name": "john_doe",
        "email": "john.doe@gmail.com",
        "username":"mkadinali",
        "password": "123456",
        "posts": [
            {
                "imageurl":"asdfghjhjkl",
                "caption":"Ngumi mbwegezer",
                "likes":34
            },
            {
                "imageurl":"asdfghjhjkl",
                "caption":"Ngumi mbwegezer",
                "likes":67
            }
        ]
    },
    {
        "name": "jane_doe",
        "email": "jane.doe@gmail.com",
        "username":"prettyprincess",
        "followers": 1000,
        "password": "123456",
        "posts": [
            {
                "imageurl":"asdfghjhjkl",
                "caption":"Ngumi mbwegezer",
                "likes": 5000
            },
            {
                "imageurl":"asdfghjhjkl",
                "caption":"Ngumi mbwegezer",
                "likes": 670
            }
        ]
    }
];

function signup(name, email, username, password) {
    let user = {
        "name": name,
        "email": email,
        "username": username,
        "password": password,
        "followers": 0,
        "posts": []
    }



    users.push(user);
    return user;
}

signup("nicole","tonka", "nicole@gmail.com", "12345678");
signup("said", "said", "said@gmail.com", "12345678");
signup("sandra", "sandra", "sandra@gmail.com", "12345789");

console.log(users);

function newPost(username,imageurl,caption){
    if(){
        
    }

}

