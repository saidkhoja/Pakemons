const elPokeList = document.querySelector(".js-poke-list");
const elPokeTemplate = document.querySelector(".js-poke-temp").content;
const newPokeFragment = new DocumentFragment();

pokemons.forEach((poke) => {
    const elPokeTempClone = elPokeTemplate.cloneNode(true);

    elPokeTempClone.querySelector(".js-poke-number").textContent = poke.num;
    elPokeTempClone.querySelector(".js-poke-img").src = poke.img;
    elPokeTempClone.querySelector(".js-poke-img").alt = poke.name;
    elPokeTempClone.querySelector(".js-poke-title").textContent = "Name: " + poke.name;
    elPokeTempClone.querySelector(".js-poke-type").textContent = "Type: " + poke.type.join(", ");
    elPokeTempClone.querySelector(".js-poke-weak").textContent = "Weaknesses: " + poke.weaknesses.join(" - ");
    elPokeTempClone.querySelector(".js-poke-time").textContent = poke.spawn_time;
    elPokeTempClone.querySelector(".js-poke-time").setAttribute("datetime", poke.spawn_time);

    newPokeFragment.appendChild(elPokeTempClone);
});

elPokeList.appendChild(newPokeFragment);