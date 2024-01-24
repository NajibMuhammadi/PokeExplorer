let pokemons = [
    {
        id: 1,
        name: 'Bulbasaur',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'p urple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        stats: {
            hp: 45,
            attack: 49,
            specialAttack: 65,
            defense: 49,
            specialDefense: 65,
            speed: 45,
            total: 318
        }
    },
    {
        id: 2,
        name: 'Ivysaur',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
        stats: {
            hp: 60,
            attack: 62,
            specialAttack: 80,
            defense: 63,
            specialDefense: 80,
            speed: 60,
            total: 405
        }
    },
    {
        id: 3,
        name: 'Venusaur',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
        stats: {
            hp: 80,
            attack: 82,
            specialAttack: 100,
            defense: 83,
            specialDefense: 100,
            speed: 80,
            total: 525
        }
    },
    {
        id: 4,
        name: 'Charmander',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        stats: {
            hp: 39,
            attack: 52,
            specialAttack: 60,
            defense: 43,
            specialDefense: 50,
            speed: 65,
            total: 309
        }
    },
    {
        id: 5,
        name: 'Charmeleon',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
        stats: {
            hp: 58,
            attack: 64,
            specialAttack: 80,
            defense: 58,
            specialDefense: 65,
            speed: 80,
            total: 405
        }
    },
    {
        id: 6,
        name: 'Charizard',
        type: [
            { name: 'Fire', color: 'orange' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
        stats: {
            hp: 78,
            attack: 84,
            specialAttack: 109,
            defense: 78,
            specialDefense: 85,
            speed: 100,
            total: 534
        }
    },
    {
        id: 7,
        name: 'Squirtle',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        stats: {
            hp: 44,
            attack: 48,
            specialAttack: 50,
            defense: 65,
            specialDefense: 64,
            speed: 43,
            total: 314
        }
    },
    {
        id: 8,
        name: 'Wartortle',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
        stats: {
            hp: 59,
            attack: 63,
            specialAttack: 65,
            defense: 80,
            specialDefense: 80,
            speed: 58,
            total: 405
        }
    },
    {
        id: 9,
        name: 'Blastoise',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
        stats: {
            hp: 79,
            attack: 83,
            specialAttack: 85,
            defense: 100,
            specialDefense: 105,
            speed: 78,
            total: 530
        }
    },
    {
        id: 10,
        name: 'Caterpie',
        type: [
            { name: 'Bug', color: 'green' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
        stats: {
            hp: 45,
            attack: 30,
            specialAttack: 20,
            defense: 35,
            specialDefense: 20,
            speed: 45,
            total: 195
        }
    },
    {
        id: 11,
        name: 'Metapod',
        type: [
            { name: 'Bug', color: 'green' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
        stats: {
            hp: 50,
            attack: 20,
            specialAttack: 25,
            defense: 55,
            specialDefense: 25,
            speed: 30,
            total: 205
        }
    },
    {
        id: 12,
        name: 'Butterfree',
        type: [
            { name: 'Bug', color: 'green' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
        stats: {
            hp: 60,
            attack: 45,
            specialAttack: 90,
            defense: 50,
            specialDefense: 80,
            speed: 70,
            total: 395
        }
    },
    {
        id: 13,
        name: 'Weedle',
        type: [
            { name: 'Bug', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
        stats: {
            hp: 40,
            attack: 35,
            specialAttack: 20,
            defense: 30,
            specialDefense: 20,
            speed: 50,
            total: 195
        }
    },
    {
        id: 14,
        name: 'Kakuna',
        type: [
            { name: 'Bug', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
        stats: {
            hp: 45,
            attack: 25,
            specialAttack: 25,
            defense: 50,
            specialDefense: 25,
            speed: 35,
            total: 205
        }
    },
    {
        id: 15,
        name: 'Beedrill',
        type: [
            { name: 'Bug', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
        stats: {
            hp: 65,
            attack: 90,
            specialAttack: 45,
            defense: 40,
            specialDefense: 80,
            speed: 75,
            total: 395
        }
    },
    {
        id: 16,
        name: 'Pidgey',
        type: [
            { name: 'Normal', color: 'brown' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
        stats: {
            hp: 40,
            attack: 45,
            specialAttack: 35,
            defense: 40,
            specialDefense: 35,
            speed: 56,
            total: 251
        }
    },
    {
        id: 17,
        name: 'Pidgeotto',
        type: [
            { name: 'Normal', color: 'brown' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
        stats: {
            hp: 63,
            attack: 60,
            specialAttack: 50,
            defense: 55,
            specialDefense: 50,
            speed: 71,
            total: 349
        }
    },
    {
        id: 18,
        name: 'Pidgeot',
        type: [
            { name: 'Normal', color: 'brown' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
        stats: {
            hp: 83,
            attack: 80,
            specialAttack: 70,
            defense: 75,
            specialDefense: 70,
            speed: 101,
            total: 479
        }
    },
    {
        id: 19,
        name: 'Rattata',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
        stats: {
            hp: 30,
            attack: 56,
            specialAttack: 25,
            defense: 35,
            specialDefense: 35,
            speed: 72,
            total: 253
        }
    },
    {
        id: 20,
        name: 'Raticate',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
        stats: {
            hp: 55,
            attack: 81,
            specialAttack: 50,
            defense: 60,
            specialDefense: 70,
            speed: 97,
            total: 413
        }
    },
    {
        id: 21,
        name: 'Spearow',
        type: [
            { name: 'Normal', color: 'brown' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',
        stats: {
            hp: 40,
            attack: 60,
            specialAttack: 31,
            defense: 30,
            specialDefense: 31,
            speed: 70,
            total: 262
        }
    },
    {
        id: 22,
        name: 'Fearow',
        type: [
            { name: 'Normal', color: 'brown' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png',
        stats: {
            hp: 65,
            attack: 90,
            specialAttack: 61,
            defense: 65,
            specialDefense: 61,
            speed: 100,
            total: 442
        }
    },
    {
        id: 23,
        name: 'Ekans',
        type: [
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
        stats: {
            hp: 35,
            attack: 60,
            specialAttack: 40,
            defense: 44,
            specialDefense: 54,
            speed: 55,
            total: 288
        }
    },
    {
        id: 24,
        name: 'Arbok',
        type: [
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
        stats: {
            hp: 60,
            attack: 85,
            specialAttack: 65,
            defense: 69,
            specialDefense: 79,
            speed: 80,
            total: 438
        }
    },
    {
        id: 25,
        name: 'Pikachu',
        type: [
            { name: 'Electric', color: 'yellow' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
        stats: {
            hp: 35,
            attack: 55,
            specialAttack: 50,
            defense: 40,
            specialDefense: 50,
            speed: 90,
            total: 320
        }
    },
    {
        id: 26,
        name: 'Raichu',
        type: [
            { name: 'Electric', color: 'yellow' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
        stats: {
            hp: 60,
            attack: 90,
            specialAttack: 90,
            defense: 55,
            specialDefense: 80,
            speed: 110,
            total: 485
        }
    },
    {
        id: 27,
        name: 'Sandshrew',
        type: [
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
        stats: {
            hp: 50,
            attack: 75,
            specialAttack: 20,
            defense: 85,
            specialDefense: 30,
            speed: 40,
            total: 300
        }
    },
    {
        id: 28,
        name: 'Sandslash',
        type: [
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png',
        stats: {
            hp: 75,
            attack: 100,
            specialAttack: 45,
            defense: 110,
            specialDefense: 55,
            speed: 65,
            total: 450
        }
    },
    {
        id: 29,
        name: 'Nidoran♀',
        type: [
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png',
        stats: {
            hp: 55,
            attack: 47,
            specialAttack: 40,
            defense: 52,
            specialDefense: 40,
            speed: 41,
            total: 275
        }
    },
    {
        id: 30,
        name: 'Nidorina',
        type: [
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
        stats: {
            hp: 70,
            attack: 62,
            specialAttack: 55,
            defense: 67,
            specialDefense: 55,
            speed: 56,
            total: 365
        }
    },
    {
        id: 31,
        name: 'Nidoqueen',
        type: [
            { name: 'Poison', color: 'purple' },
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png',
        stats: {
            hp: 90,
            attack: 82,
            specialAttack: 75,
            defense: 87,
            specialDefense: 85,
            speed: 76,
            total: 505
        }
    },
    {
        id: 32,
        name: 'Nidoran♂',
        type: [
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
        stats: {
            hp: 46,
            attack: 57,
            specialAttack: 40,
            defense: 40,
            specialDefense: 40,
            speed: 50,
            total: 275
        }
    },
    {
        id: 33,
        name: 'Nidorino',
        type: [
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png',
        stats: {
            hp: 61,
            attack: 72,
            specialAttack: 55,
            defense: 57,
            specialDefense: 55,
            speed: 65,
            total: 365
        }
    },
    {
        id: 34,
        name: 'Nidoking',
        type: [
            { name: 'Poison', color: 'purple' },
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
        stats: {
            hp: 81,
            attack: 102,
            specialAttack: 85,
            defense: 77,
            specialDefense: 75,
            speed: 85,
            total: 505
        }
    },
    {
        id: 35,
        name: 'Clefairy',
        type: [
            { name: 'Fairy', color: 'pink' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
        stats: {
            hp: 70,
            attack: 45,
            specialAttack: 60,
            defense: 48,
            specialDefense: 65,
            speed: 35,
            total: 323
        }
    },
    {
        id: 36,
        name: 'Clefable',
        type: [
            { name: 'Fairy', color: 'pink' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png',
        stats: {
            hp: 95,
            attack: 70,
            specialAttack: 95,
            defense: 73,
            specialDefense: 90,
            speed: 60,
            total: 483
        }
    },
    {
        id: 37,
        name: 'Vulpix',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
        stats: {
            hp: 38,
            attack: 41,
            specialAttack: 50,
            defense: 40,
            specialDefense: 65,
            speed: 65,
            total: 299
        }
    },
    {
        id: 38,
        name: 'Ninetales',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
        stats: {
            hp: 73,
            attack: 76,
            specialAttack: 81,
            defense: 75,
            specialDefense: 100,
            speed: 100,
            total: 505
        }
    },
    {
        id: 39,
        name: 'Jigglypuff',
        type: [
            { name: 'Normal', color: 'brown' },
            { name: 'Fairy', color: 'pink' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
        stats: {
            hp: 115,
            attack: 45,
            specialAttack: 45,
            defense: 20,
            specialDefense: 25,
            speed: 20,
            total: 270
        }
    },
    {
        id: 40,
        name: 'Wigglytuff',
        type: [
            { name: 'Normal', color: 'brown' },
            { name: 'Fairy', color: 'pink' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png',
        stats: {
            hp: 140,
            attack: 70,
            specialAttack: 85,
            defense: 45,
            specialDefense: 50,
            speed: 45,
            total: 435
        }
    },
    {
        id: 41,
        name: 'Zubat',
        type: [
            { name: 'Poison', color: 'purple' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png',
        stats: {
            hp: 40,
            attack: 45,
            specialAttack: 35,
            defense: 35,
            specialDefense: 40,
            speed: 55,
            total: 245
        }
    },
    {
        id: 42,
        name: 'Golbat',
        type: [
            { name: 'Poison', color: 'purple' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png',
        stats: {
            hp: 75,
            attack: 80,
            specialAttack: 65,
            defense: 70,
            specialDefense: 75,
            speed: 90,
            total: 455
        }
    },
    {
        id: 43,
        name: 'Oddish',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png',
        stats: {
            hp: 45,
            attack: 50,
            specialAttack: 75,
            defense: 55,
            specialDefense: 65,
            speed: 30,
            total: 320
        }
    },
    {
        id: 44,
        name: 'Gloom',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png',
        stats: {
            hp: 60,
            attack: 65,
            specialAttack: 85,
            defense: 70,
            specialDefense: 75,
            speed: 40,
            total: 395
        }
    },
    {
        id: 45,
        name: 'Vileplume',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png',
        stats: {
            hp: 75,
            attack: 80,
            specialAttack: 110,
            defense: 85,
            specialDefense: 90,
            speed: 50,
            total: 490
        }
    },
    {
        id: 46,
        name: 'Paras',
        type: [
            { name: 'Bug', color: 'green' },
            { name: 'Grass', color: 'green' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png',
        stats: {
            hp: 35,
            attack: 70,
            specialAttack: 45,
            defense: 55,
            specialDefense: 55,
            speed: 25,
            total: 285
        }
    },
    {
        id: 47,
        name: 'Parasect',
        type: [
            { name: 'Bug', color: 'green' },
            { name: 'Grass', color: 'green' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png',
        stats: {
            hp: 60,
            attack: 95,
            specialAttack: 60,
            defense: 80,
            specialDefense: 80,
            speed: 30,
            total: 405
        }
    },
    {
        id: 48,
        name: 'Venonat',
        type: [
            { name: 'Bug', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png',
        stats: {
            hp: 60,
            attack: 55,
            specialAttack: 40,
            defense: 50,
            specialDefense: 55,
            speed: 45,
            total: 305
        }
    },
    {
        id: 49,
        name: 'Venomoth',
        type: [
            { name: 'Bug', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png',
        stats: {
            hp: 70,
            attack: 65,
            specialAttack: 90,
            defense: 60,
            specialDefense: 75,
            speed: 90,
            total: 450
        }
    },
    {
        id: 50,
        name: 'Diglett',
        type: [
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png',
        stats: {
            hp: 10,
            attack: 55,
            specialAttack: 35,
            defense: 25,
            specialDefense: 45,
            speed: 95,
            total: 265
        }
    },
    {
        id: 51,
        name: 'Dugtrio',
        type: [
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png',
        stats: {
            hp: 35,
            attack: 80,
            specialAttack: 50,
            defense: 50,
            specialDefense: 70,
            speed: 120,
            total: 405
        }
    },
    {
        id: 52,
        name: 'Meowth',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png',
        stats: {
            hp: 40,
            attack: 45,
            specialAttack: 40,
            defense: 35,
            specialDefense: 40,
            speed: 90,
            total: 290
        }
    },
    {
        id: 53,
        name: 'Persian',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png',
        stats: {
            hp: 65,
            attack: 70,
            specialAttack: 65,
            defense: 60,
            specialDefense: 65,
            speed: 115,
            total: 440
        }
    },
    {
        id: 54,
        name: 'Psyduck',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png',
        stats: {
            hp: 50,
            attack: 52,
            specialAttack: 65,
            defense: 48,
            specialDefense: 50,
            speed: 55,
            total: 320
        }
    },
    {
        id: 55,
        name: 'Golduck',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png',
        stats: {
            hp: 80,
            attack: 82,
            specialAttack: 95,
            defense: 78,
            specialDefense: 80,
            speed: 85,
            total: 500
        }
    },
    {
        id: 56,
        name: 'Mankey',
        type: [
            { name: 'Fighting', color: 'red' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png',
        stats: {
            hp: 40,
            attack: 80,
            specialAttack: 35,
            defense: 35,
            specialDefense: 45,
            speed: 70,
            total: 305
        }
    },
    {
        id: 57,
        name: 'Primeape',
        type: [
            { name: 'Fighting', color: 'red' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png',
        stats: {
            hp: 65,
            attack: 105,
            specialAttack: 60,
            defense: 60,
            specialDefense: 70,
            speed: 95,
            total: 455
        }
    },
    {
        id: 58,
        name: 'Growlithe',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png',
        stats: {
            hp: 55,
            attack: 70,
            specialAttack: 50,
            defense: 45,
            specialDefense: 50,
            speed: 60,
            total: 350
        }
    },
    {
        id: 59,
        name: 'Arcanine',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png',
        stats: {
            hp: 90,
            attack: 110,
            specialAttack: 80,
            defense: 80,
            specialDefense: 80,
            speed: 95,
            total: 555
        }
    },
    {
        id: 60,
        name: 'Poliwag',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png',
        stats: {
            hp: 40,
            attack: 50,
            specialAttack: 40,
            defense: 40,
            specialDefense: 40,
            speed: 90,
            total: 300
        }
    },
    {
        id: 61,
        name: 'Poliwhirl',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png',
        stats: {
            hp: 65,
            attack: 65,
            specialAttack: 50,
            defense: 50,
            specialDefense: 50,
            speed: 90,
            total: 385
        }
    },
    {
        id: 62,
        name: 'Poliwrath',
        type: [
            { name: 'Water', color: 'blue' },
            { name: 'Fighting', color: 'red' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png',
        stats: {
            hp: 90,
            attack: 95,
            specialAttack: 70,
            defense: 90,
            specialDefense: 90,
            speed: 70,
            total: 510
        }
    },
    {
        id: 63,
        name: 'Abra',
        type: [
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png',
        stats: {
            hp: 25,
            attack: 20,
            specialAttack: 105,
            defense: 15,
            specialDefense: 55,
            speed: 90,
            total: 310
        }
    },
    {
        id: 64,
        name: 'Kadabra',
        type: [
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png',
        stats: {
            hp: 40,
            attack: 35,
            specialAttack: 120,
            defense: 30,
            specialDefense: 70,
            speed: 105,
            total: 400
        }
    },
    {
        id: 65,
        name: 'Alakazam',
        type: [
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png',
        stats: {
            hp: 55,
            attack: 50,
            specialAttack: 135,
            defense: 45,
            specialDefense: 95,
            speed: 120,
            total: 500
        }
    },
    {
        id: 66,
        name: 'Machop',
        type: [
            { name: 'Fighting', color: 'red' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png',
        stats: {
            hp: 70,
            attack: 80,
            specialAttack: 35,
            defense: 50,
            specialDefense: 35,
            speed: 35,
            total: 305
        }
    },
    {
        id: 67,
        name: 'Machoke',
        type: [
            { name: 'Fighting', color: 'red' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png',
        stats: {
            hp: 80,
            attack: 100,
            specialAttack: 50,
            defense: 70,
            specialDefense: 60,
            speed: 45,
            total: 405
        }
    },
    {
        id: 68,
        name: 'Machamp',
        type: [
            { name: 'Fighting', color: 'red' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png',
        stats: {
            hp: 90,
            attack: 130,
            specialAttack: 65,
            defense: 80,
            specialDefense: 85,
            speed: 55,
            total: 505
        }
    },
    {
        id: 69,
        name: 'Bellsprout',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png',
        stats: {
            hp: 50,
            attack: 75,
            specialAttack: 70,
            defense: 35,
            specialDefense: 30,
            speed: 40,
            total: 300
        }
    },
    {
        id: 70,
        name: 'Weepinbell',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png',
        stats: {
            hp: 65,
            attack: 90,
            specialAttack: 85,
            defense: 50,
            specialDefense: 45,
            speed: 55,
            total: 390
        }
    },
    {
        id: 71,
        name: 'Victreebel',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png',
        stats: {
            hp: 80,
            attack: 105,
            specialAttack: 100,
            defense: 65,
            specialDefense: 70,
            speed: 70,
            total: 490
        }
    },
    {
        id: 72,
        name: 'Tentacool',
        type: [
            { name: 'Water', color: 'blue' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png',
        stats: {
            hp: 40,
            attack: 40,
            specialAttack: 50,
            defense: 35,
            specialDefense: 100,
            speed: 70,
            total: 335
        }
    },
    {
        id: 73,
        name: 'Tentacruel',
        type: [
            { name: 'Water', color: 'blue' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png',
        stats: {
            hp: 80,
            attack: 70,
            specialAttack: 80,
            defense: 65,
            specialDefense: 120,
            speed: 100,
            total: 515
        }
    },
    {
        id: 74,
        name: 'Geodude',
        type: [
            { name: 'Rock', color: 'gray' },
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png',
        stats: {
            hp: 40,
            attack: 80,
            specialAttack: 30,
            defense: 100,
            specialDefense: 30,
            speed: 20,
            total: 300
        }
    },
    {
        id: 75,
        name: 'Graveler',
        type: [
            { name: 'Rock', color: 'gray' },
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png',
        stats: {
            hp: 55,
            attack: 95,
            specialAttack: 45,
            defense: 115,
            specialDefense: 45,
            speed: 35,
            total: 390
        }
    },
    {
        id: 76,
        name: 'Golem',
        type: [
            { name: 'Rock', color: 'gray' },
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png',
        stats: {
            hp: 80,
            attack: 120,
            specialAttack: 55,
            defense: 130,
            specialDefense: 65,
            speed: 45,
            total: 495
        }
    },
    {
        id: 77,
        name: 'Ponyta',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png',
        stats: {
            hp: 50,
            attack: 85,
            specialAttack: 65,
            defense: 55,
            specialDefense: 65,
            speed: 90,
            total: 410
        }
    },
    {
        id: 78,
        name: 'Rapidash',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png',
        stats: {
            hp: 65,
            attack: 100,
            specialAttack: 80,
            defense: 70,
            specialDefense: 80,
            speed: 105,
            total: 500
        }
    },
    {
        id: 79,
        name: 'Slowpoke',
        type: [
            { name: 'Water', color: 'blue' },
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png',
        stats: {
            hp: 90,
            attack: 65,
            specialAttack: 40,
            defense: 65,
            specialDefense: 40,
            speed: 15,
            total: 315
        }
    },
    {
        id: 80,
        name: 'Slowbro',
        type: [
            { name: 'Water', color: 'blue' },
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png',
        stats: {
            hp: 95,
            attack: 75,
            specialAttack: 100,
            defense: 110,
            specialDefense: 80,
            speed: 30,
            total: 490
        }
    },
    {
        id: 81,
        name: 'Magnemite',
        type: [
            { name: 'Electric', color: 'yellow' },
            { name: 'Steel', color: 'gray' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png',
        stats: {
            hp: 25,
            attack: 35,
            specialAttack: 95,
            defense: 70,
            specialDefense: 55,
            speed: 45,
            total: 325
        }
    },
    {
        id: 82,
        name: 'Magneton',
        type: [
            { name: 'Electric', color: 'yellow' },
            { name: 'Steel', color: 'gray' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png',
        stats: {
            hp: 50,
            attack: 60,
            specialAttack: 120,
            defense: 95,
            specialDefense: 70,
            speed: 70,
            total: 465
        }
    },
    {
        id: 83,
        name: 'Farfetch\'d',
        type: [
            { name: 'Normal', color: 'brown' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png',
        stats: {
            hp: 52,
            attack: 65,
            specialAttack: 58,
            defense: 55,
            specialDefense: 62,
            speed: 60,
            total: 352
        }
    },
    {
        id: 84,
        name: 'Doduo',
        type: [
            { name: 'Normal', color: 'brown' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png',
        stats: {
            hp: 35,
            attack: 85,
            specialAttack: 35,
            defense: 45,
            specialDefense: 35,
            speed: 75,
            total: 310
        }
    },
    {
        id: 85,
        name: 'Dodrio',
        type: [
            { name: 'Normal', color: 'brown' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png',
        stats: {
            hp: 60,
            attack: 110,
            specialAttack: 60,
            defense: 70,
            specialDefense: 60,
            speed: 100,
            total: 460
        }
    },
    {
        id: 86,
        name: 'Seel',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png',
        stats: {
            hp: 65,
            attack: 45,
            specialAttack: 45,
            defense: 55,
            specialDefense: 70,
            speed: 45,
            total: 325
        }
    },
    {
        id: 87,
        name: 'Dewgong',
        type: [
            { name: 'Water', color: 'blue' },
            { name: 'Ice', color: 'lightblue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png',
        stats: {
            hp: 90,
            attack: 70,
            specialAttack: 70,
            defense: 80,
            specialDefense: 95,
            speed: 70,
            total: 475
        }
    },
    {
        id: 88,
        name: 'Grimer',
        type: [
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png',
        stats: {
            hp: 80,
            attack: 80,
            specialAttack: 40,
            defense: 50,
            specialDefense: 50,
            speed: 25,
            total: 325
        }
    },
    {
        id: 89,
        name: 'Muk',
        type: [
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png',
        stats: {
            hp: 105,
            attack: 105,
            specialAttack: 65,
            defense: 75,
            specialDefense: 100,
            speed: 50,
            total: 500
        }
    },
    {
        id: 90,
        name: 'Shellder',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png',
        stats: {
            hp: 30,
            attack: 65,
            specialAttack: 45,
            defense: 100,
            specialDefense: 25,
            speed: 40,
            total: 305
        }
    },
    {
        id: 91,
        name: 'Cloyster',
        type: [
            { name: 'Water', color: 'blue' },
            { name: 'Ice', color: 'lightblue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png',
        stats: {
            hp: 50,
            attack: 95,
            specialAttack: 85,
            defense: 180,
            specialDefense: 45,
            speed: 70,
            total: 525
        }
    },
    {
        id: 92,
        name: 'Gastly',
        type: [
            { name: 'Ghost', color: 'purple' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png',
        stats: {
            hp: 30,
            attack: 35,
            specialAttack: 100,
            defense: 30,
            specialDefense: 35,
            speed: 80,
            total: 310
        }
    },
    {
        id: 93,
        name: 'Haunter',
        type: [
            { name: 'Ghost', color: 'purple' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png',
        stats: {
            hp: 45,
            attack: 50,
            specialAttack: 115,
            defense: 45,
            specialDefense: 55,
            speed: 95,
            total: 405
        }
    },
    {
        id: 94,
        name: 'Gengar',
        type: [
            { name: 'Ghost', color: 'purple' },
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png',
        stats: {
            hp: 60,
            attack: 65,
            specialAttack: 130,
            defense: 60,
            specialDefense: 75,
            speed: 110,
            total: 500
        }
    },
    {
        id: 95,
        name: 'Onix',
        type: [
            { name: 'Rock', color: 'gray' },
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png',
        stats: {
            hp: 35,
            attack: 45,
            specialAttack: 30,
            defense: 160,
            specialDefense: 45,
            speed: 70,
            total: 385
        }
    },
    {
        id: 96,
        name: 'Drowzee',
        type: [
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png',
        stats: {
            hp: 60,
            attack: 48,
            specialAttack: 43,
            defense: 45,
            specialDefense: 90,
            speed: 42,
            total: 328
        }
    },
    {
        id: 97,
        name: 'Hypno',
        type: [
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png',
        stats: {
            hp: 85,
            attack: 73,
            specialAttack: 73,
            defense: 70,
            specialDefense: 115,
            speed: 67,
            total: 483
        }
    },
    {
        id: 98,
        name: 'Krabby',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png',
        stats: {
            hp: 30,
            attack: 105,
            specialAttack: 25,
            defense: 90,
            specialDefense: 25,
            speed: 50,
            total: 325
        }
    },
    {
        id: 99,
        name: 'Kingler',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png',
        stats: {
            hp: 55,
            attack: 130,
            specialAttack: 50,
            defense: 115,
            specialDefense: 50,
            speed: 75,
            total: 475
        }
    },
    {
        id: 100,
        name: 'Voltorb',
        type: [
            { name: 'Electric', color: 'yellow' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png',
        stats: {
            hp: 40,
            attack: 30,
            specialAttack: 55,
            defense: 50,
            specialDefense: 55,
            speed: 100,
            total: 330
        }
    },
    {
        id: 101,
        name: 'Electrode',
        type: [
            { name: 'Electric', color: 'yellow' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png',
        stats: {
            hp: 60,
            attack: 50,
            specialAttack: 80,
            defense: 70,
            specialDefense: 80,
            speed: 150,
            total: 480
        }
    },
    {
        id: 102,
        name: 'Exeggcute',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png',
        stats: {
            hp: 60,
            attack: 40,
            specialAttack: 60,
            defense: 80,
            specialDefense: 45,
            speed: 40,
            total: 325
        }
    },
    {
        id: 103,
        name: 'Exeggutor',
        type: [
            { name: 'Grass', color: 'green' },
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png',
        stats: {
            hp: 95,
            attack: 95,
            specialAttack: 125,
            defense: 85,
            specialDefense: 65,
            speed: 55,
            total: 530
        }
    },
    {
        id: 104,
        name: 'Cubone',
        type: [
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png',
        stats: {
            hp: 50,
            attack: 50,
            specialAttack: 40,
            defense: 95,
            specialDefense: 50,
            speed: 35,
            total: 320
        }
    },
    {
        id: 105,
        name: 'Marowak',
        type: [
            { name: 'Ground', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png',
        stats: {
            hp: 60,
            attack: 80,
            specialAttack: 50,
            defense: 110,
            specialDefense: 80,
            speed: 45,
            total: 425
        }
    },
    {
        id: 106,
        name: 'Hitmonlee',
        type: [
            { name: 'Fighting', color: 'red' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png',
        stats: {
            hp: 50,
            attack: 120,
            specialAttack: 35,
            defense: 53,
            specialDefense: 110,
            speed: 87,
            total: 455
        }
    },
    {
        id: 107,
        name: 'Hitmonchan',
        type: [
            { name: 'Fighting', color: 'red' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png',
        stats: {
            hp: 50,
            attack: 105,
            specialAttack: 35,
            defense: 79,
            specialDefense: 110,
            speed: 76,
            total: 455
        }
    },
    {
        id: 108,
        name: 'Lickitung',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png',
        stats: {
            hp: 90,
            attack: 55,
            specialAttack: 60,
            defense: 75,
            specialDefense: 75,
            speed: 30,
            total: 385
        }
    },
    {
        id: 109,
        name: 'Koffing',
        type: [
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png',
        stats: {
            hp: 40,
            attack: 65,
            specialAttack: 60,
            defense: 95,
            specialDefense: 45,
            speed: 35,
            total: 340
        }
    },
    {
        id: 110,
        name: 'Weezing',
        type: [
            { name: 'Poison', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png',
        stats: {
            hp: 65,
            attack: 90,
            specialAttack: 85,
            defense: 120,
            specialDefense: 70,
            speed: 60,
            total: 490
        }
    },
    {
        id: 111,
        name: 'Rhyhorn',
        type: [
            { name: 'Ground', color: 'brown' },
            { name: 'Rock', color: 'gray' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png',
        stats: {
            hp: 80,
            attack: 85,
            specialAttack: 30,
            defense: 95,
            specialDefense: 30,
            speed: 25,
            total: 345
        }
    },
    {
        id: 112,
        name: 'Rhydon',
        type: [
            { name: 'Ground', color: 'brown' },
            { name: 'Rock', color: 'gray' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png',
        stats: {
            hp: 105,
            attack: 130,
            specialAttack: 45,
            defense: 120,
            specialDefense: 45,
            speed: 40,
            total: 485
        }
    },
    {
        id: 113,
        name: 'Chansey',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png',
        stats: {
            hp: 250,
            attack: 5,
            specialAttack: 35,
            defense: 5,
            specialDefense: 105,
            speed: 50,
            total: 450
        }
    },
    {
        id: 114,
        name: 'Tangela',
        type: [
            { name: 'Grass', color: 'green' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png',
        stats: {
            hp: 65,
            attack: 55,
            specialAttack: 100,
            defense: 115,
            specialDefense: 40,
            speed: 60,
            total: 435
        }
    },
    {
        id: 115,
        name: 'Kangaskhan',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png',
        stats: {
            hp: 105,
            attack: 95,
            specialAttack: 40,
            defense: 80,
            specialDefense: 80,
            speed: 90,
            total: 490
        }
    },
    {
        id: 116,
        name: 'Horsea',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png',
        stats: {
            hp: 30,
            attack: 40,
            specialAttack: 70,
            defense: 70,
            specialDefense: 25,
            speed: 60,
            total: 295
        }
    },
    {
        id: 117,
        name: 'Seadra',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png',
        stats: {
            hp: 55,
            attack: 65,
            specialAttack: 95,
            defense: 95,
            specialDefense: 45,
            speed: 85,
            total: 440
        }
    },
    {
        id: 118,
        name: 'Goldeen',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png',
        stats: {
            hp: 45,
            attack: 67,
            specialAttack: 35,
            defense: 60,
            specialDefense: 50,
            speed: 63,
            total: 320
        }
    },
    {
        id: 119,
        name: 'Seaking',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png',
        stats: {
            hp: 80,
            attack: 92,
            specialAttack: 65,
            defense: 65,
            specialDefense: 80,
            speed: 68,
            total: 450
        }
    },
    {
        id: 120,
        name: 'Staryu',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png',
        stats: {
            hp: 30,
            attack: 45,
            specialAttack: 70,
            defense: 55,
            specialDefense: 55,
            speed: 85,
            total: 340
        }
    },
    {
        id: 121,
        name: 'Starmie',
        type: [
            { name: 'Water', color: 'blue' },
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png',
        stats: {
            hp: 60,
            attack: 75,
            specialAttack: 100,
            defense: 85,
            specialDefense: 85,
            speed: 115,
            total: 520
        }
    },
    {
        id: 122,
        name: 'Mr. Mime',
        type: [
            { name: 'Psychic', color: 'purple' },
            { name: 'Fairy', color: 'pink' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png',
        stats: {
            hp: 40,
            attack: 45,
            specialAttack: 100,
            defense: 65,
            specialDefense: 120,
            speed: 90,
            total: 460
        }
    },
    {
        id: 123,
        name: 'Scyther',
        type: [
            { name: 'Bug', color: 'green' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png',
        stats: {
            hp: 70,
            attack: 110,
            specialAttack: 55,
            defense: 80,
            specialDefense: 80,
            speed: 105,
            total: 500
        }
    },
    {
        id: 124,
        name: 'Jynx',
        type: [
            { name: 'Ice', color: 'lightblue' },
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png',
        stats: {
            hp: 65,
            attack: 50,
            specialAttack: 115,
            defense: 35,
            specialDefense: 95,
            speed: 95,
            total: 455
        }
    },
    {
        id: 125,
        name: 'Electabuzz',
        type: [
            { name: 'Electric', color: 'yellow' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png',
        stats: {
            hp: 65,
            attack: 83,
            specialAttack: 95,
            defense: 57,
            specialDefense: 85,
            speed: 105,
            total: 490
        }
    },
    {
        id: 126,
        name: 'Magmar',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png',
        stats: {
            hp: 65,
            attack: 95,
            specialAttack: 100,
            defense: 57,
            specialDefense: 85,
            speed: 93,
            total: 495
        }
    },
    {
        id: 127,
        name: 'Pinsir',
        type: [
            { name: 'Bug', color: 'green' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png',
        stats: {
            hp: 65,
            attack: 125,
            specialAttack: 55,
            defense: 100,
            specialDefense: 70,
            speed: 85,
            total: 500
        }
    },
    {
        id: 128,
        name: 'Tauros',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png',
        stats: {
            hp: 75,
            attack: 100,
            specialAttack: 40,
            defense: 95,
            specialDefense: 70,
            speed: 110,
            total: 490
        }
    },
    {
        id: 129,
        name: 'Magikarp',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png',
        stats: {
            hp: 20,
            attack: 10,
            specialAttack: 15,
            defense: 55,
            specialDefense: 20,
            speed: 80,
            total: 200
        }
    },
    {
        id: 130,
        name: 'Gyarados',
        type: [
            { name: 'Water', color: 'blue' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png',
        stats: {
            hp: 95,
            attack: 125,
            specialAttack: 60,
            defense: 79,
            specialDefense: 100,
            speed: 81,
            total: 540
        }
    },
    {
        id: 131,
        name: 'Lapras',
        type: [
            { name: 'Water', color: 'blue' },
            { name: 'Ice', color: 'lightblue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png',
        stats: {
            hp: 130,
            attack: 85,
            specialAttack: 85,
            defense: 80,
            specialDefense: 95,
            speed: 60,
            total: 535
        }
    },
    {
        id: 132,
        name: 'Ditto',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png',
        stats: {
            hp: 48,
            attack: 48,
            specialAttack: 48,
            defense: 48,
            specialDefense: 48,
            speed: 48,
            total: 288
        }
    },
    {
        id: 133,
        name: 'Eevee',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png',
        stats: {
            hp: 55,
            attack: 55,
            specialAttack: 45,
            defense: 50,
            specialDefense: 65,
            speed: 55,
            total: 330
        }
    },
    {
        id: 134,
        name: 'Vaporeon',
        type: [
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png',
        stats: {
            hp: 130,
            attack: 65,
            specialAttack: 110,
            defense: 60,
            specialDefense: 95,
            speed: 65,
            total: 525
        }
    },
    {
        id: 135,
        name: 'Jolteon',
        type: [
            { name: 'Electric', color: 'yellow' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png',
        stats: {
            hp: 65,
            attack: 65,
            specialAttack: 110,
            defense: 60,
            specialDefense: 95,
            speed: 130,
            total: 525
        }
    },
    {
        id: 136,
        name: 'Flareon',
        type: [
            { name: 'Fire', color: 'orange' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png',
        stats: {
            hp: 65,
            attack: 130,
            specialAttack: 95,
            defense: 60,
            specialDefense: 110,
            speed: 65,
            total: 525
        }
    },
    {
        id: 137,
        name: 'Porygon',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png',
        stats: {
            hp: 65,
            attack: 60,
            specialAttack: 85,
            defense: 70,
            specialDefense: 75,
            speed: 40,
            total: 395
        }
    },
    {
        id: 138,
        name: 'Omanyte',
        type: [
            { name: 'Rock', color: 'gray' },
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png',
        stats: {
            hp: 35,
            attack: 40,
            specialAttack: 90,
            defense: 100,
            specialDefense: 55,
            speed: 35,
            total: 355
        }
    },
    {
        id: 139,
        name: 'Omastar',
        type: [
            { name: 'Rock', color: 'gray' },
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png',
        stats: {
            hp: 70,
            attack: 60,
            specialAttack: 115,
            defense: 125,
            specialDefense: 70,
            speed: 55,
            total: 495
        }
    },
    {
        id: 140,
        name: 'Kabuto',
        type: [
            { name: 'Rock', color: 'gray' },
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png',
        stats: {
            hp: 30,
            attack: 80,
            specialAttack: 55,
            defense: 90,
            specialDefense: 45,
            speed: 55,
            total: 355
        }
    },
    {
        id: 141,
        name: 'Kabutops',
        type: [
            { name: 'Rock', color: 'gray' },
            { name: 'Water', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png',
        stats: {
            hp: 60,
            attack: 115,
            specialAttack: 65,
            defense: 105,
            specialDefense: 70,
            speed: 80,
            total: 495
        }
    },
    {
        id: 142,
        name: 'Aerodactyl',
        type: [
            { name: 'Rock', color: 'gray' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png',
        stats: {
            hp: 80,
            attack: 105,
            specialAttack: 60,
            defense: 65,
            specialDefense: 75,
            speed: 130,
            total: 515
        }
    },
    {
        id: 143,
        name: 'Snorlax',
        type: [
            { name: 'Normal', color: 'brown' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
        stats: {
            hp: 160,
            attack: 110,
            specialAttack: 65,
            defense: 65,
            specialDefense: 110,
            speed: 30,
            total: 540
        }
    },
    {
        id: 144,
        name: 'Articuno',
        type: [
            { name: 'Ice', color: 'lightblue' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png',
        stats: {
            hp: 90,
            attack: 85,
            specialAttack: 95,
            defense: 100,
            specialDefense: 125,
            speed: 85,
            total: 580
        }
    },
    {
        id: 145,
        name: 'Zapdos',
        type: [
            { name: 'Electric', color: 'yellow' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png',
        stats: {
            hp: 90,
            attack: 90,
            specialAttack: 125,
            defense: 85,
            specialDefense: 90,
            speed: 100,
            total: 580
        }
    },
    {
        id: 146,
        name: 'Moltres',
        type: [
            { name: 'Fire', color: 'orange' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png',
        stats: {
            hp: 90,
            attack: 100,
            specialAttack: 125,
            defense: 90,
            specialDefense: 85,
            speed: 90,
            total: 580
        }
    },
    {
        id: 147,
        name: 'Dratini',
        type: [
            { name: 'Dragon', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png',
        stats: {
            hp: 41,
            attack: 64,
            specialAttack: 50,
            defense: 45,
            specialDefense: 50,
            speed: 50,
            total: 300
        }
    },
    {
        id: 148,
        name: 'Dragonair',
        type: [
            { name: 'Dragon', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png',
        stats: {
            hp: 61,
            attack: 84,
            specialAttack: 70,
            defense: 65,
            specialDefense: 70,
            speed: 70,
            total: 420
        }
    },
    {
        id: 149,
        name: 'Dragonite',
        type: [
            { name: 'Dragon', color: 'purple' },
            { name: 'Flying', color: 'blue' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png',
        stats: {
            hp: 91,
            attack: 134,
            specialAttack: 100,
            defense: 95,
            specialDefense: 100,
            speed: 80,
            total: 600
        }
    },
    {
        id: 150,
        name: 'Mewtwo',
        type: [
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png',
        stats: {
            hp: 106,
            attack: 110,
            specialAttack: 154,
            defense: 90,
            specialDefense: 90,
            speed: 130,
            total: 680
        }
    },
    {
        id: 151,
        name: 'Mew',
        type: [
            { name: 'Psychic', color: 'purple' }
        ],
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png',
        stats: {
            hp: 100,
            attack: 100,
            specialAttack: 100,
            defense: 100,
            specialDefense: 100,
            speed: 100,
            total: 600
        }
    }
];
