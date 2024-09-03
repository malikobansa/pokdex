document.addEventListener('DOMContentLoaded', () => {
    const fetchBtn = document.getElementById('fetchBtn');
    const pokemonIdInput = document.getElementById('pokemonId');
    const pokemonCard = document.getElementById('pokemonCard');
    const pokemonName = document.getElementById('pokemonName');
    const pokemonImage = document.getElementById('pokemonImage');
    const pokemonType = document.getElementById('pokemonType');
    const pokemonWeight = document.getElementById('pokemonWeight');

    fetchBtn.addEventListener('click', () => {
        const pokemonId = pokemonIdInput.value;
        if (pokemonId >= 1 && pokemonId <= 151) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                .then(response => response.json())
                .then(data => {
                    pokemonName.textContent = capitalizeFirstLetter(data.name);
                    pokemonImage.src = data.sprites.front_default;
                    pokemonType.textContent = `Type: ${data.types.map(type => capitalizeFirstLetter(type.type.name)).join(', ')}`;
                    pokemonWeight.textContent = `Weight: ${data.weight / 10} kg`;

                    pokemonCard.classList.remove('hidden');
                })
                .catch(error => {
                    console.error('Error fetching Pokémon data:', error);
                    alert('Failed to fetch Pokémon data. Please try again.');
                });
        } else {
            alert('Please enter a valid Pokémon ID between 1 and 151.');
        }
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
