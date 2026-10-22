
const contacts = [
    { name: "Amina Wanjiku", phone: "0712 345 678" },
    { name: "Brian Otieno", phone: "0722 456 789" },
    { name: "Grace Mwangi", phone: "0701 234 567" }
];

// Find the HTML elements.
const list = document.getElementById("list");
const form = document.getElementById("contact-form");
const contactCount = document.getElementById("contact-count");
const message = document.getElementById("message");

// Display the contacts on the webpage.
function renderList() {
    list.innerHTML = "";

    contacts.forEach(function(contact) {
        const li = document.createElement("li");
        li.className = "contact-item";

        const name = document.createElement("span");
        name.className = "contact-name";
        name.textContent = contact.name;

        const phone = document.createElement("span");
        phone.className = "contact-phone";
        phone.textContent = contact.phone;

        li.append(name, phone);
        list.appendChild(li);
    });

    contactCount.textContent =
        "Total contacts: " + contacts.length;
}

// Handle form submission.
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name").trim();
    const phone = data.get("phone").trim();

    // Check that neither input is empty.
    if (name === "" || phone === "") {
        message.textContent =
            "Please enter both name and phone number.";
        return;
    }

    // Create a new contact object.
    const newContact = {
        name: name,
        phone: phone
    };

    // Add the contact to the array.
    contacts.push(newContact);

    // Update the webpage and clear the form.
    renderList();
    form.reset();
    message.textContent = "";
});

// Display the starter contacts when the page loads.
renderList();
