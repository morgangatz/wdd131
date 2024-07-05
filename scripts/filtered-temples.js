const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
	const temples = [
		{
		  templeName: "Aba Nigeria",
		  location: "Aba, Nigeria",
	 	  dedicated: "2005, August, 7",
		  area: 11500,
		  imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
		},
		{
		  templeName: "Manti Utah",
		  location: "Manti, Utah, United States",
		  dedicated: "1888, May, 21",
		  area: 74792,
		  imageUrl:
	 	 "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
		},
		{
		  templeName: "Payson Utah",
		  location: "Payson, Utah, United States",
		  dedicated: "2015, June, 7",
		  area: 96630,
		  imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
		},
		{
		  templeName: "Yigo Guam",
		  location: "Yigo, Guam",
		  dedicated: "2020, May, 2",
		  area: 6861,
		  imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
		},
		{
		  templeName: "Washington D.C.",
		  location: "Kensington, Maryland, United States",
		  dedicated: "1974, November, 19",
		  area: 156558,
		  imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
		},
		{
		  templeName: "Lima Perú",
		  location: "Lima, Perú",
		  dedicated: "1986, January, 10",
		  area: 9600,
		  imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
		},
		{
		  templeName: "Mexico City Mexico",
		  location: "Mexico City, Mexico",
		  dedicated: "1983, December, 2",
		  area: 116642,
		  imageUrl:
		  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
		},
		{
			templeName: "Seoul Korea",
			location: "Seoul, South Korea",
			dedicated: "1985, December, 14",
			area: 28057,
			imageUrl:
			"https://www.churchofjesuschrist.org/imgs/c85632672919c0424997855308294168fc7a226f/full/1600%2C/0/default"
		  },
		  {
			templeName: "Copenhagen, Denmark",
			location: "Copenhagen Denmark",
			dedicated: "2004, May, 23",
			area: 25000,
			imageUrl:
			"https://www.churchofjesuschrist.org/imgs/327d372c89e0e01fc2ea425649f8573023346fed/full/1280%2C/0/default"
		  },
		  {
			templeName: "Fort Collins Colorado",
			location: "Fort Collins, Colorado",
			dedicated: "2016, October, 16",
			area: 42000,
			imageUrl:
			"https://www.churchofjesuschrist.org/imgs/0ee8dba52740f86515cb279b3f51768bc59b4fb5/full/1280%2C/0/default"
	  	}
  	];

	createTempleCard(temples); 

 // *** Navigation Links and Page Title Section ***
  	// Event Listeners for Navigation Links
	  const homeLink = document.querySelector('#home');
	  const oldTemplesLink = document.querySelector('#old');
	  const newTemplesLink = document.querySelector('#new');
	  const largeTemplesLink = document.querySelector('#large');
	  const smallTemplesLink = document.querySelector('#small');
	  const pageTitle = document.querySelector('#page-title');
  
	  homeLink.addEventListener("click", () => {
		  createTempleCard(temples);
		  pageTitle.textContent = "Home";
	  });
  
	  oldTemplesLink.addEventListener("click", () => {
		  const oldTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) < 1900);
		  createTempleCard(oldTemples);
		  pageTitle.textContent = "Old Temples";
	  });
  
	  newTemplesLink.addEventListener("click", () => {
		  const newTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) > 2000);
		  createTempleCard(newTemples);
		  pageTitle.textContent = "New Temples";
	  });
  
	  largeTemplesLink.addEventListener("click", () => {
		  const largeTemples = temples.filter(temple => temple.area >= 90000);
		  createTempleCard(largeTemples);
		  pageTitle.textContent = "Large Temples";
	  });
  
	  smallTemplesLink.addEventListener("click", () => {
		  const smallTemples = temples.filter(temple => temple.area < 10000);
		  createTempleCard(smallTemples);
		  pageTitle.textContent = "Small Temples";
	  });
  
	  // Initial load
	  createTempleCard(temples);

	function createTempleCard(filteredTemples){
		const grid = document.querySelector(".res-grid");
    	grid.innerHTML = '';
		document.querySelector(".res-grid").innerHTML = "";
		filteredTemples.forEach(temple => {
			let card = document.createElement("section");
			let name = document.createElement("h3");
			let location = document.createElement("p");
			let dedication = document.createElement("p");
			let area = document.createElement("p");
			let img = document.createElement("img");

			name.textContent = temple.templeName;
			location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
			dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
			area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
			img.setAttribute("src", temple.imageUrl);
			img.setAttribute("alt", `${temple.templeName} Temple`);
			img.setAttribute("loading", "lazy");

			card.appendChild(name);
			card.appendChild(location);
			card.appendChild(dedication);
			card.appendChild(area);
			card.appendChild(img);

			document.querySelector(".res-grid").appendChild(card);
		});
	}
});