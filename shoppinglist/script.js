document.querySelector("#remove").addEventListener("click", () => {
    document.querySelector("#allItems").textContent = "";
  })

  document.querySelector("#userInput").addEventListener("keydown", (event) => {
    if(event.key == "Enter")
      addItem();
  });
  
  addItem = () => {
    const item = document.createElement("h2")
    item.textContent = "- " + document.querySelector("#userInput").value;
  
    item.addEventListener("click", () => {
      if(item.style.textDecoration != "line-through")
        item.style.textDecoration = "line-through";
      else
        item.style.textDecoration = "none";
    })
  
    document.querySelector("#allItems").appendChild(item);
    document.querySelector("#userInput").value = "";
  }