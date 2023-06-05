const menuItems = [
    { name: "Lomo Saltado", price: 10, description: "Una explosión de sabores en cada bocado. Tierno lomo de res salteado con cebollas, tomates y pimientos. Una fusión perfecta de la cocina peruana y china que te transportará a nuevos horizontes culinarios. ¡Deléitate con el sabor único del Lomo Saltado y descubre por qué es un clásico!", image: "lomo_saltado.jpg" },
    { name: "Tallarin Rojo", price: 12, description: "Un deleite para los sentidos. Fideos rojos bañados en una irresistible salsa de ají panca. Acompañados de pollo jugoso y verduras frescas. El Tallarín Rojo te llevará a un viaje de sabores intensos y auténticos. ¡Disfruta de la perfecta combinación de sabores que solo encontrarás aquí!", image: "tallarin_rojo.jpg" },
    { name: "Papa a la Huancaína", price: 15, description: "Una delicia de texturas y sabores. Papas amarillas suaves y cremosas, cubiertas con una seductora salsa de ají amarillo y queso fresco. Un toque de aceitunas y huevo duro para completar la experiencia. La Papa a la Huancaina te sorprenderá con su combinación única de sabores auténticos. ¡Una entrada irresistible que no querrás dejar de probar!", image: "papa_huancaina.jpg" },
    { name: "Arroz con Pollo", price: 8, description: "La comodidad en cada plato. Pollo jugoso y tierno, con granos de arroz sueltos y aromáticos. Una receta tradicional que te brinda una experiencia de sabor reconfortante. Nuestro Arroz con Pollo te hará sentir como en casa. ¡Descubre el placer de la cocina casera peruana en cada cucharada!", image: "arroz_pollo.jpg" }
  ];
  
  const menuList = document.getElementById("menu-list");
  
  menuItems.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("menu-item");
  
    const details = document.createElement("div");
    details.classList.add("menu-item-details");
    li.appendChild(details);
  
    const namePriceContainer = document.createElement("div");
    namePriceContainer.classList.add("name-price-container");
    details.appendChild(namePriceContainer);
  
    const name = document.createElement("span");
    name.textContent = item.name;
    name.classList.add("menu-item-name");
    namePriceContainer.appendChild(name);
  
    const price = document.createElement("span");
    price.textContent = `S/${item.price.toFixed(2)}`;
    price.classList.add("menu-item-price");
    namePriceContainer.appendChild(price);
  
    const description = document.createElement("p");
    description.textContent = item.description;
    description.classList.add("menu-item-description");
    details.appendChild(description);
  
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    image.classList.add("menu-item-image");
    li.appendChild(image);
  
    menuList.appendChild(li);
  });
