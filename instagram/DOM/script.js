let p1 = document.getElementById("p1")
let mybutton = document.getElementById("home101")
let form1 = document.getElementById("form1")


let users = []


form1.addEventListener("submit", function(event){
    event.preventDefault()
    console.log("Form submitted!")
    let formData = new FormData(form1)

    let data = {
        name: formData.get("input1"),
        email: formData.get("input2"),
        password: formData.get("input3")
    }
    console.log(data)
    users.push(data)
    console.log(users)
    form1.style.display = "none"
    p1.innerHTML = "Thank you for signing up, " + data.name + "!"
    p1.style.color = "green"

})




p1.innerHTML = "Hello, World! This is my first JavaScript project."

p1.style.color = "blue"

mybutton.addEventListener("click", function(){
    alert("You clicked the button!")
})

mybutton.addEventListener("mouseover", function(){
    mybutton.style.backgroundColor = "green"
})

let mybtn = document.createElement("button")
mybtn.innerHTML = "Sign up!"
p1.appendChild(mybtn)
