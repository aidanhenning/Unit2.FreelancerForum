// Array with all possible freelanders, price, and occupaton
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
// Initial freelancers
const maxFreelancers = 10;
const initialFreelancers= [
  {
    name: "Dr. Corin Reveck",
    price: 99,
    occupation: "chemist",
  },
  {
    name: "Prof. Heimerdinger",
    price: 55,
    occupation: "teacher",
  },
];

// Calculate average starting price
function calculateAveragePrice(freelancers) {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0)
    return total / freelancers.length;
}

// Page setup
const body = document.querySelector("body");
const title = document.createElement("h1");
title.textContent = "Freelancer Forum";

body.append(title);

const averageDisplay = document.createElement("p");
averageDisplay.textContent = `The average starting price is .`;

body.append(averageDisplay);

const availableFreelancers = document.createElement("h2");
availableFreelancers.textContent = "Available Freelancers";

body.append(availableFreelancers);

// Create the initial table and append to the body
const table = createTable(initialFreelancers);
body.appendChild(table);

// Add the initial freelancers to the table
initialFreelancers.forEach(freelancer => addFreelancerRow(freelancer));

// Update the average price for the initial freelancers
updateAveragePrice(initialFreelancers);

// Table setup
function createTable(){
    // create a table element
    const table = document.querySelector("#table");
    table.setAttribute('border', '1');
    // create table header
    const headerRow = document.createElement("tr");
    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    const occupationHeader = document.createElement("th");
    occupationHeader.textContent = "Occupation";
    const priceHeader = document.createElement("th");
    priceHeader.textContent = "Price";
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(occupationHeader);
    headerRow.appendChild(priceHeader);
    table.appendChild(headerRow);

    // Populate with freelancers
    freelancers.forEach(freelancer => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = freelancer.name;
        const occupationCell = document.createElement("td");
        occupationCell.textContent = freelancer.occupation;
        const priceCell = document.createElement("td");
        priceCell.textContent = `$${freelancer.price}`;

        row.appendChild(nameCell);
        row.appendChild(occupationCell);
        row.appendChild(priceCell);
        table.appendChild(row);
    });
    return table;
}

// Function to add a new freelancer to the table
function addFreelancerRow(freelancer) {
    const table = document.querySelector("table");  // Get the existing table

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = freelancer.name;
    const occupationCell = document.createElement("td");
    occupationCell.textContent = freelancer.occupation;
    const priceCell = document.createElement("td");
    priceCell.textContent = `$${freelancer.price}`;

    row.appendChild(nameCell);
    row.appendChild(occupationCell);
    row.appendChild(priceCell);

    table.appendChild(row);  // Append the new row to the table
}

// Function to update the average price display
function updateAveragePrice(freelancers) {
    const averagePrice = calculateAveragePrice(freelancers);
    averageDisplay.textContent = `The average starting price is $${averagePrice.toFixed(2)}.`;
}

let allFreelancers = [...initialFreelancers]; // Start with initial freelancers
const newFreelancers = freelancers.slice(0, maxFreelancers - initialFreelancers.length); // Limit number of new freelancers to max

let index = 0;
setInterval(() => {
    if (index < newFreelancers.length) {
        const newFreelancer = newFreelancers[index];
        allFreelancers.push(newFreelancer);  // Add freelancer to the array

        // Add the new freelancer to the table (existing table)
        addFreelancerRow(newFreelancer);

        // Update the average price
        updateAveragePrice(allFreelancers);

        index++;
    }
}, 3000); // Add a new freelancer every 3 seconds