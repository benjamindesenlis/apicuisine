
let userData = [];

const fetchUser = async () => {
await fetch("https://randomuser.me/api/?results=12")
.then((res) => res.json())
.then((data) => (userData = data.results));
};

const userDisplay = async () => {
await fetchUser();

console.log(userData);

document.body.innerHTML = userData
.map(
    (userX) => 
    `
    <div class="div-user">
    <img src="${userX.picture.medium}" alt="Photo"> <br>
    <span>${userX.name.first}</span> 
    <span>${userX.name.last}</span> <br>
    <span>${userX.phone}</span> <br>
    </div>
    `  
)
.join("");
};

userDisplay();