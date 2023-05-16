const mainProducts = document.querySelector(".mainProducts")
const input = document.querySelector(".input");
const inputt = document.querySelector("#inputt");
const select = document.querySelector("select");
const phones = document.querySelector("#phones");
const loader = document.querySelector(".loader");
const modalText = document.querySelector(".modalText");

setInterval(()=>{
	loader.classList.add("hide"); 
},5000)

let products = [
	{
		img: "./img/phone1.png",
		name: "Redmi Note 11",
		price: 300,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 1
	},
	{
		img: "./img/phone2.png",
		name: "Redmi Note 10 Pro",
		price: 350,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 2
	},
	{
		img: "./img/phone3.png",
		name: "Redmi Note 9",
		price: 200,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 3
	},
	{
		img: "./img/phone4.png",
		name: "Redmi 9",
		price: 180,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 4
	},
	{
		img: "./img/phone5.png",
		name: "Redmi 10 A",
		price: 145,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 5
	},
	{
		img: "./img/phone6.png",
		name: "Samsung ZTE",
		price: 800,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 6
	},
	{
		img: "./img/phone7.png",
		name: "Samsung Galaxy Note 9",
		price: 500,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 7
	},
	{
		img: "./img/phone8.png",
		name: "Samsung Galaxy S10",
		price: 450,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 8
	},
	{
		img: "./img/phone9.png",
		name: "Samsung Galaxy Z Fold",
		price: 780,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 9
	},
	{
		img: "./img/phone10.png",
		name: "Samsung S20 Ultra",
		price: 420,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 10
	},
	{
		img: "./img/phone11.png",
		name: "iPhone Tab 7",
		price: 1200,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 11
	},
	{
		img: "./img/phone12.png",
		name: "iPhone 14 Pro Max",
		price: 1700,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 12
	},
	{
		img: "./img/phone13.png",
		name: "iPhone 13 Pro Max",
		price: 1200,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 13
	},
	{
		img: "./img/phone14.png",
		name: "iPhone 14 Mini",
		price: 1400,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 14
	},
	{
		img: "./img/phone15.png",
		name: "iPhone 11 Pro",
		price: 780,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 15
	},
	{
		img: "./img/phone16.png",
		name: "Infinix 11",
		price: 120,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 16
	},
	{
		img: "./img/phone17.png",
		name: "Infinix Note 12",
		price: 123,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 17
	},
	{
		img: "./img/phone18.png",
		name: "Infinix 12 Pro Play",
		price: 145,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 18
	},
	{
		img: "./img/phone19.png",
		name: "Infinix 8",
		price: 125,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 19
	},
	{
		img: "./img/phone20.png",
		name: "Infinix Smart",
		price: 149,
		description: "Phone a device that uses either a system of wires along which electrical signals are sent or a system of radio signals to make it possible for you to speak to someone in another place who has a similar device: Just then, his phone rang",
		id: 20
	},
]
const getData = (data) =>{
	data.forEach(item => {
		const {img, name, price, description, id} = item;
		mainProducts.innerHTML += `
		<div class="mainShop">
		<img src="${img}" alt="">
		<h1 class="mainTexts">${name}</h1>
		<p>$${price}</p>
		<button onclick="show(${id-1})">Order Now</button>
	</div>` 
	})
}

getData(products);

const modal = document.querySelector(".modal")

function show(idx) {
	modalText.innerHTML = ''
	modal.classList.add("active");
	let {img, name, price, description} = products[idx];
	modalText.innerHTML += `
	<div class="modalDiv">
		<div class="imgDiv"><img src="${img}" alt=""></div>
			<div>
				<h2 class="modalH1">${name}</h2>
				<p class="modalP1">${description}</p>
				<p class="modalP2">$${price}</p>
			</div>
	</div>
	<h1 class="umidjon">${name}</h1>
	`
}

const modalExit = document.querySelector(".modalExit")
modalExit.addEventListener("click", exitModal)

document.addEventListener("click",(e)=>{
	if(e.target.classList.contains("modal")){
		exitModal()
	}
})

function exitModal() {
	modal.classList.remove("active")
}



const mainTexts = document.getElementsByClassName("mainTexts")
inputt.addEventListener("input", () => {
	const search = inputt.value.toLowerCase().trim();

	Array.from(mainTexts).forEach((item) => {
	const productName = item.textContent.toLowerCase().trim();
	if (!productName.includes(search)) {
		item.parentElement.classList.add("hidden");
	}else{
		item.parentElement.classList.remove("hidden");
	}
	phones.value = "All";
});
})

phones.addEventListener("change", () => {
	const phoneEl = phones.value.toLowerCase();
	Array.from(mainTexts).forEach((item) => {
	const productName = item.textContent.toLowerCase();
	if(phoneEl == "all"){
		item.parentElement.classList.remove("hidden");
	}else if(!productName.includes(phoneEl)){
		item.parentElement.classList.add("hidden");
	}else{
		item.parentElement.classList.remove("hidden");
	}
	inputt.value=""
	});
	})
