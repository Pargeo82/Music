const summary = document.querySelector('.summary');
const band = async () => {
    const response = await axios.get('http://musicbrainz.org/ws/2/artist/cc197bad-dc9c-440d-a5b5-d52ba2e14234', {
        params: {
            inc: 'genres'
        }
    });
    // let releases = response.data['release-groups']
    // console.log(releases)
    // for (let release of releases) {
    //     const secondary = release['secondary-types'];
    //     console.log(`${release.title} (${release['primary-type']}), ${secondary}`);
    // }
    const band = response.data;
    const bandGenres = band.genres;
    const genres = [];
    for (let i = 0; i < bandGenres.length; i++) {
        if (bandGenres[i].count > 0) {
            genres.push(bandGenres[i].name);
        };
    };
    const genreView = genres.toString().replace(/,/g, ', ');

    console.log(band);
    summary.innerHTML = `
        <h1>${band.name}</h1>
        <h4>Started: ${band['life-span'].begin.slice(0, 4)}</h4>
        <p>Genres: ${genreView}</p>
        `

};

band();



// cc197bad-dc9c-440d-a5b5-d52ba2e14234
// 8e2a9a3f-1738-3829-9eac-7b490d194870  parachutes

// artist inc:'release-groups'

//Or all albums and EPs by Autechre:
// /ws/2/release-group?artist=410c9baf-5469-44f6-9852-826524b80c61&type=album|ep


// const response = await axios.get('http://musicbrainz.org/ws/2/release', {
//             params: {
//                 artist: 'cc197bad-dc9c-440d-a5b5-d52ba2e14234',
//                 type: 'album',
//                 limit: 100,
//             }