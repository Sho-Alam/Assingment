

async function fetchData (){
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json()
    console.log(data);
}

fetchData()