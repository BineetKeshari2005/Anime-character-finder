

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');
    const imageContainer = document.getElementById('image-container');
  
    if (searchButton) {
      searchButton.addEventListener('click', () => {
        const characterName = searchBar.value.trim();
        if (characterName) {
          fetchCharacterImage(characterName);
        } else {
          alert('Please enter a character name!');
        }
      });
    }
  
    
    searchBar.addEventListener('input', () => {
      if (searchBar.value.trim() === '') {
 
        imageContainer.innerHTML = '';
      }
    });
  
    const fetchCharacterImage = async (characterName) => {
      try {
        console.log('Fetching character image for:', characterName); 
  
        if (!characterName) {
          console.error('No character name provided');
          alert('Please enter a valid character name.');
          return;
        }
  

        const response = await fetch(`https://api.jikan.moe/v4/characters?q=${characterName}&limit=1`);
  
 
        if (!response.ok) {
          throw new Error('API request failed: ' + response.statusText);
        }
  
        const data = await response.json();
        console.log('API response:', data); 
  
        if (data && data.data && data.data.length > 0) {
          const character = data.data[0];
          const characterImage = character.images.jpg.image_url;
          console.log(`Character Image URL: ${characterImage}`);
  
  
          imageContainer.innerHTML = ''; 
  

          const imgElement = document.createElement('img');
          imgElement.src = characterImage;
          imgElement.alt = character.name;
          imageContainer.appendChild(imgElement); 
        } else {
          alert('Character not found. Try another name!');
        }
      } catch (error) {
        console.error('Error fetching character data:', error);
        alert('There was an error fetching character data. Check the console for more details.');
      }
    };
  });
  
  
  

  
  