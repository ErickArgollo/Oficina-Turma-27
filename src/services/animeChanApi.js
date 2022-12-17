export const fetchRandomQuotes = async(title) => {
    const ENDPOINT = `https://animechan.vercel.app/api/quotes/anime?title=${title}`
    const request = await fetch(ENDPOINT);
    const response = await request.json();
    return response;
}

export const fetchCharacterQuotes = async(character) => {
    const ENDPOINT = `https://animechan.vercel.app/api/quotes/character?name=${character}`
    const request = await fetch(ENDPOINT);
    const response = await request.json();
    return response;
}

