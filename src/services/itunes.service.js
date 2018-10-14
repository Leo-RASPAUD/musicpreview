import httpUtils from 'utils/http.utils';

const BASE_URL = 'https://itunes.apple.com';
const SEARCH_BASE_URL = `${BASE_URL}/search?entity=allArtist&attribute=allArtistTerm&term=`;
const SEARCH_BY_ID_BASE_URL = `${BASE_URL}/lookup?entity=song&id=`;

const searchArtist = ({ artist }) => httpUtils.get({ url: `${SEARCH_BASE_URL}${artist}` });
const searchSongsById = ({ id }) => httpUtils.get({ url: `${SEARCH_BY_ID_BASE_URL}${id}` });

export default {
    searchArtist,
    searchSongsById,
};
