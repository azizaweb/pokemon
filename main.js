
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const typeFilter = document.getElementById("typeFilter");
    const sortSelect = document.getElementById("sort");
    const searchBtn = document.getElementById("searchBtn");

    function filterAndSortPokemons() {
        let searchText = searchInput.value.toLowerCase();
        let selectedType = typeFilter.value;
        let sortBy = sortSelect.value;

        let filteredPokemons = pokemons.filter(pokemon => {
            let matchesSearch = pokemon.name.toLowerCase().includes(searchText);
            let matchesType = selectedType === "all" || pokemon.type.includes(selectedType);
            return matchesSearch && matchesType;
        });

        if (sortBy === "name") {
            filteredPokemons.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "id") {
            filteredPokemons.sort((a, b) => a.id - b.id);
        }

        renderPokemons(filteredPokemons);
    }

    function renderPokemons(pokemonList) {
        const container = document.getElementById("pokemon-container");
        container.innerHTML = ""; 

        pokemonList.forEach(pokemon => {
            let div = document.createElement("div");
            div.className = "pokemon-card";
            div.innerHTML = ` 
                <img src="${pokemon.img}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
                <p>Type: ${pokemon.type.join(", ")}</p>
           ` ;
            container.appendChild(div);
        });
    }

 
    renderPokemons(pokemons);

 
    searchBtn.addEventListener("click", filterAndSortPokemons);
});