// tokens.env.API_KEY

const autoCompleteConfig = {
    renderOption(movie) {
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        return `
              <img src="${imgSrc}" />
              <b>${movie.Title} (${movie.Year})</b>
              `;
    },
    inputValue(movie) {
        return movie.Title;
    },
    async fetchData(searchTerm) {
        const response = await axios.get('https://theaudiodb.p.rapidapi.com/search.php', {
            params: {
                apikey: 'tokens.env.API_KEY',
                s: searchTerm
            }
        });

        if (response.data.Error) {
            return [];
        };

        return response.data.Search;
    }
};