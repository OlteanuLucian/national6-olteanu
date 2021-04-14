function getDataFromServer(url, callback) {
    fetch(url)
        .then((r) => r.json())
        .then(callback)
}
//---export functions
export function getBreedListFromServer(callback) {
    getDataFromServer("https://dog.ceo/api/breeds/list/all", callback)
}

export function getBreedImagesFromServer(callback) {
    getDataFromServer(`https://dog.ceo/api/breed/${localStorage.breed}/images`, callback)
}