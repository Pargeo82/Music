const autoCompleteConfig = {
    renderOption(artists) {
        const name = artists.name;
        const country = artists.country === undefined ? `` : `, ${artists.country}`;
        const lifeSpan = artists['life-span'].begin === undefined ? `` : ` (${artists['life-span'].begin.slice(0, 4)})`
        return `${name} ${country} ${lifeSpan}`;

    },
    inputValue(artists) {
        return artists.name;
    },
    async fetchData(searchTerm) {
        const response = await axios.get('https://musicbrainz.org/ws/2/artist', {
            params: {
                query: searchTerm
            }
        });

        if (response.data.Error) {
            return [];
        };

        return response.data.artists;
    }
};

createAutoComplete({
    ...autoCompleteConfig,
    root: document.querySelector('.container'),
    onOptionSelect(artists) {
        // document.querySelector('.tutorial').classList.add('is-hidden');
        onArtistSelect(artists, document.querySelector('.summary'));
    }
});


// const onArtistSelect = async (artists, summaryElement) => {
//     const response = await axios.get('https://musicbrainz.org/ws/2/artist', {
//         params: {
//             query: artists
//         }
//     });
//     summaryElement.innerHTML = artistTemplate(response.data);
// };

const artistTemplate = () => {

    return `
    <article class="media"
      <div class="media-content">
        <div class="content">
          <h1>${artists.name}</h1>
          <h4>${artists.name}</h4>
          <p>${artists.name}</p>
        </div>
      </div>
    
  `;
}
// < /article> <
// article data - value = '${awards}'
// class = "notification is-primary" >
//     <
//     p class = "title" > $ { movieDetail.Awards } < /p> <
//     p class = "subtitle" > Awards < /p> <
//     /article> <
//     article data - value = '${dollars}'
// class = "notification is-primary" >
//     <
//     p class = "title" > $ { movieDetail.BoxOffice } < /p> <
//     p class = "subtitle" > Box Office < /p> <
//     /article> <
//     article data - value = '${metascore}'
// class = "notification is-primary" >
//     <
//     p class = "title" > $ { movieDetail.Metascore } < /p> <
//     p class = "subtitle" > Metascore < /p> <
//     /article> <
//     article data - value = '${imdbRating}'
// class = "notification is-primary" >
//     <
//     p class = "title" > $ { movieDetail.imdbRating } < /p> <
//     p class = "subtitle" > IMDB Rating < /p> <
//     /article> <
//     article data - value = '${imdbVotes}'
// class = "notification is-primary" >
//     <
//     p class = "title" > $ { movieDetail.imdbVotes } < /p> <
//     p class = "subtitle" > IMDB Votes < /p> <
//     /article>



// const fetchData = async () => {
//     const response = await axios.get('https://musicbrainz.org/ws/2/artist', {
//         params: {
//             query: 'beatles'
//         },
//     });
//     let artists = response.data.artists;
//     for (let artist of artists) {
//         console.log(`${artist.name},${artist.country},${artist['life-span'].begin}-${artist['life-span'].end}`);
//         // console.log(artist['life-span'])
//         // if (artist.area.name === undefined) {
//         //     console.log(artist.name)
//         // } else console.log(artist.name, artist.area.name)
//     }

// };
// fetchData();