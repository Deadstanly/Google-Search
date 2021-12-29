const getData = async (url) => {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'x-user-agent': 'desktop',
            'x-proxy-location': 'US',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': '69889044f2msh1e0b55c035f3be3p18057fjsn9f830f4125cc'
        }
    });

    if(!res.ok) {
        throw new Error(`Error status:" ${res.status} from ${res.url}`)
    }
    return await res.json();
}

export {getData}
