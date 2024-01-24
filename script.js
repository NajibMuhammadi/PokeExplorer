'use strict';
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form').classList.add('d-none');
    document.querySelector('#randomGen').classList.add('d-none');
});

window.addEventListener('load', () => {
    const pokedexBtn = document.querySelector('button:nth-of-type(1)')
    const searchPokemonBtn = document.querySelector('button:nth-of-type(2)');
    const generatePokemonBtn = document.querySelector('button:nth-of-type(3)');
    const formContainer = document.querySelector('#form');
    const randomGenContainer = document.querySelector('#randomGen');

    pokedexBtn.addEventListener('click', () => {
        pokemons.forEach(pokemon => {
            renderCard(pokemon);
        });
        hideElements([searchPokemonBtn, generatePokemonBtn, formContainer, randomGenContainer]);
    });
    searchPokemonBtn.addEventListener('click', () => {
        document.querySelector('#searchBtn').addEventListener('click', (event) => {
            event.preventDefault();
            const pokemonName = document.querySelector('#pokemonName').value.toLowerCase();
            for (let i = 0; i < pokemons.length; i++) {
                if (pokemons[i].name.toLowerCase().includes(pokemonName)) {
                    renderCard(pokemons[i]);
                    document.querySelector('#cardContainer').classList.remove('d-none');
                }
            }
        });
        document.querySelector('#genBtn').addEventListener('click', (event) => {
            event.preventDefault();
            const numberInputString = document.querySelector('#numberInput').value;
            const numberInput = parseInt(numberInputString);
            if (!isNaN(numberInput)) {
                for (let i = 0; i < pokemons.length; i++) {
                    if (pokemons[i].id === numberInput) {
                        renderCard(pokemons[i]);
                        document.querySelector('#cardContainer').classList.remove('d-none');
                        return;
                    }
                }
                window.alert('Ingen Pokémon hittades med det angivna numret.');
            } else {
                window.alert('Ange ett giltigt nummer för att söka efter en Pokémon.');
            }
        });
        document.querySelector('#form').classList.remove('d-none');
        document.querySelector('#randomGen').classList.remove('d-none');
        hideElements([pokedexBtn, generatePokemonBtn]);
        document.querySelector('#cardContainer').classList.add('d-none');
    });
    generatePokemonBtn.addEventListener('click', (event) => {
        const randomIndices = [];
        for (let i = 0; i < 5; i++) {
            randomIndices.push(Math.floor(Math.random() * pokemons.length));
        }
        randomIndices.forEach((index) => {
            renderCard(pokemons[index]);
        });
        document.querySelector('#cardContainer').classList.remove('d-none');
        hideElements([pokedexBtn, searchPokemonBtn]);
    });
});

function hideElements(elements) {
    elements.forEach(element => {
        element.classList.add('d-none');
    });
}



document.querySelector
function renderCard(pokemon) {
    console.log(pokemon.name);
    const containerRef = document.querySelector('#cardContainer');
    const cardRef = document.createElement('div');
    cardRef.classList.add('card');
    containerRef.appendChild(cardRef);

    let divRef = document.createElement('div');
    divRef.classList.add('image-container');
    cardRef.appendChild(divRef);

    const imgRef = document.createElement('img');
    imgRef.classList.add('card-image');
    imgRef.style.backgroundColor = pokemon.type[0].color;
    imgRef.src = pokemon.image;
    imgRef.alt = 'Bild på ' + pokemon.name;
    divRef.appendChild(imgRef);

    const spanRef = document.createElement('span');
    spanRef.classList.add('index-span');
    spanRef.textContent = '#' + pokemon.id;
    divRef.appendChild(spanRef);

    divRef = document.createElement('div');
    divRef.classList.add('card-info');
    cardRef.appendChild(divRef);

    let headingRef = document.createElement('h2');
    headingRef.textContent = pokemon.name;
    divRef.appendChild(headingRef);

    let textRef = document.createElement('p');
    if (pokemon.type.length === 1) {
        textRef.textContent = pokemon.type[0].name;
    } else {
        textRef.textContent = pokemon.type[0].name + ' / ' + pokemon.type[1].name;
    }
    divRef.appendChild(textRef);

    divRef = document.createElement('div');
    divRef.classList.add('card-stats');
    cardRef.appendChild(divRef);

    headingRef = document.createElement('h3');
    headingRef.textContent = 'Base Stats:';
    divRef.appendChild(headingRef);

    const tableRef = document.createElement('table');
    tableRef.classList.add('table');
    divRef.appendChild(tableRef);

    let rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);

    rowRef.appendChild(renderCell('HP', pokemon.stats.hp));
    rowRef.appendChild(renderCell('Speed', pokemon.stats.speed));

    rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);

    rowRef.appendChild(renderCell('Attack', pokemon.stats.attack));
    rowRef.appendChild(renderCell('Special Attack', pokemon.stats.specialAttack));

    rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);

    rowRef.appendChild(renderCell('Defense', pokemon.stats.defense));
    rowRef.appendChild(renderCell('Special Defense', pokemon.stats.specialDefense));

    rowRef = document.createElement('tr');
    tableRef.appendChild(rowRef);

    rowRef.appendChild(renderCell('Total', pokemon.stats.total));
}

function renderCell(statName, stat) {
    let cellRef = document.createElement('td');
    cellRef.classList.add('table-cell');
    cellRef.textContent = statName + ': ' + stat;
    return cellRef;
}