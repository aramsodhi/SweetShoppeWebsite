const flavor_container = document.querySelector(".flavor-container");

console.log(flavor_container.childNodes);

flavor_container.childNodes.forEach((flavor, index) => {
    if (index % 2 == 1) {
        flavor.style = `rotate: ${Math.floor(Math.random() * 10 - 5)}deg`;
    }
});
