async function initialLoad() {
    const bodyElement = document.body
    const imgElement = document.createElement("img")
  try {
    // the cat api
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY"
    );
    const responseJson = await Promise.resolve(await response.json()).then(res =>{ 
        imgElement.src= res[0].url
        bodyElement.append(imgElement)
        console.log(res)
    });
    return responseJson;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

console.log(initialLoad());