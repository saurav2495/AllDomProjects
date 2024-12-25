const data = [
  {
    username: "Saurav",
    age: 22,
    city: "Bhopal",
    salary: 6000,
  },
  {
    username: "Suman",
    age: 25,
    city: "Hazaribagh",
    salary: 5000,
  },
  {
    username: "Sachin",
    age: 28,
    city: "Ranchi",
    salary: 30000,
  },
  {
    username: "Pawan",
    age: 26,
    city: "tana tan",
    salary: 4000,
  },
];

let sum = "";

data.forEach((elem) => {
  sum += `  <div class="card" id="card">
      <h1>${elem.username}</h1>
      <div class="detail" id="detail">
        <h2>${elem.age}</h2>
        <h2>${elem.city}</h2>
      </div>
      <h4>Salary : ${elem.salary}</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
        numquam!
      </p>
    </div>`;
});

var body = document.querySelector("body");
body.innerHTML = sum;
