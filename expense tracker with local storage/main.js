// savetolocal storage

function saveToLocalStorage(event) {
  event.preventDefault();
  let amt = event.target.amt.value;
  let des = event.target.des.value;
  let cat = event.target.cat.value;
  let obj = {
    amount: amt,
    description: des,
    category: cat,
  };
  let id = `${amt}`;
  let user = JSON.stringify(obj);
  localStorage.setItem(id, user);
  displayonscreen(obj);
}

// display on screen
function displayonscreen(obj) {
  document.getElementById("des").value = "";
  document.getElementById("amt").value = "";
  document.getElementById("cat").value = "";

  const parent = document.querySelector("#ul");
  const child = `<li id=${obj.amount} ><strong>Amount is</strong>  : ${obj.amount} <strong>Description is </strong>: ${obj.description}  <strong>Category is</strong> : ${obj.category}
                                       <button onclick=deleteU('${obj.amount}')> Delete</button>
                                       <button onclick=edit('${obj.amount}','${obj.description}','${obj.category}')> Edit</button>
                                        </li>`;
  parent.innerHTML += child;
}

// delete

function deleteU(id) {
  if (localStorage.getItem(id) != null) {
    localStorage.removeItem(id);
  }

  const parent = document.querySelector("#ul");
  child = document.getElementById(id);
  parent.removeChild(child);
}
function edit(amt,des,cat) {
  document.getElementById("des").value = des;
  document.getElementById("amt").value = amt;
  document.getElementById("cat").value = cat;
  deleteU(amt);


}
