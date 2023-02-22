let temp = {
    "id": 2,
    "image": "https://img4.nbstatic.in/tr:w-350/61c41a491e2731000ba4280d.jpg",
    "name": "TEO - Lounge & Bar",
    "address": "Punjabi Bagh West",
    "deal": "Drinks with Starters",
    "price": 600,
    "bought": 11102
  }

  let titleEl = document.querySelector("title");
  titleEl.textContent = temp.name;

  let detailsEl = document.getElementById("data");

  detailsEl.innerHTML = `
    <div>
        <div>
            <p id="deal">${temp["deal"].toUpperCase()}</p>
            <p id="bought">Based on <span>${temp.bought}</span> ratings</p>
        </div>
        <div>
            <h2 id="name">${temp.name}</h2>
        </div>
        <p id="address">${temp.address}</p>
    </div>
    <div>
        <img src=${temp.image} alt="" id="image">
    </div>
  `;