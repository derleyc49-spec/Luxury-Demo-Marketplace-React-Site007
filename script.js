let cart = 0

function addToCart(){
  cart++
  document.getElementById("cartCount").innerText = cart
}

function scrollToSection(){
  document.getElementById("cars").scrollIntoView({behavior:"smooth"})
}

function card(item){
  return `
    <div class="card">
      <img src="${item.img}">
      <div class="cardContent">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button onclick="addToCart()">Adicionar</button>
      </div>
    </div>
  `
}

function generateCars(){
  const brands = ["Mercedes","BMW","Audi","Ferrari","Porsche","Lambo"]

  let cars = []

  for(let i=1;i<=100;i++){
    cars.push({
      name: brands[i % brands.length] + " Model " + i,
      price: (120000 + i * 2500) + "€",
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
    })
  }

  document.getElementById("carsProducts").innerHTML =
    cars.map(card).join("")
}

function generateHomes(){

  let homes = []

  for(let i=1;i<=100;i++){
    homes.push({
      name: "Luxury House " + i,
      price: (600000 + i * 12000) + "€",
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
    })
  }

  document.getElementById("homesProducts").innerHTML =
    homes.map(card).join("")
}

function generateTech(){

  const techNames = [
    "iPhone 16 Pro",
    "MacBook Pro M4",
    "Galaxy S25 Ultra",
    "Dell XPS",
    "AirPods Pro"
  ]

  let tech = []

  for(let i=1;i<=30;i++){
    tech.push({
      name: techNames[i % techNames.length],
      price: (800 + i * 40) + "€",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
    })
  }

  document.getElementById("techProducts").innerHTML =
    tech.map(card).join("")
}

generateCars()
generateHomes()
generateTech()
