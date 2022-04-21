const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");

function newCard() {
    
    let res = fetch("db.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((e) => {
          let content = document.createElement("div");
          content.classList.toggle("content");
          // карточка
          let card = document.createElement("div");
          card.classList.toggle("card");
  
          // изображение
          let img = document.createElement("img");
          img.classList.toggle("card-img");
  
          // цена
          let price = document.createElement("span");
          price.classList.toggle("price");
  
          //название продукта
          let nameOfProduct = document.createElement("h2");
          nameOfProduct.classList.toggle("card-title");
          //описание
          let description = document.createElement("p");
          description.classList.toggle("description");
          description.innerHTML = e.desc;
          img.src = e.img;
          price.innerHTML = e.price;
          nameOfProduct.innerHTML = e.title;
          wrapper.appendChild(card);
          card.appendChild(img);
          card.appendChild(content);
          content.appendChild(nameOfProduct);
          content.appendChild(price);
          content.appendChild(description);
        });
      });
  }
  newCard();