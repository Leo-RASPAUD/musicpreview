const BASE_URL = 'https://itunes.apple.com';
const SEARCH_BASE_URL = `${BASE_URL}/search?entity=allArtist&attribute=allArtistTerm&term=`;
const SEARCH_BY_ID_BASE_URL = `${BASE_URL}/lookup?entity=song&id=`;

const searchArtist = async ({ artist }) => {
    const response = await fetch(`${SEARCH_BASE_URL}${artist}`);
    if (response.status !== 200) {
        throw new Error(); // Msg in action
    }
    return response.json();
};
const searchSongsById = async ({ id }) => {
    const response = await fetch(`${SEARCH_BY_ID_BASE_URL}${id}`);
    if (response.status !== 200) {
        throw new Error(); // Msg in action
    }
    const json = await response.json();
    console.log(json);
    return json;
};

export default {
    searchArtist,
    searchSongsById,
};
