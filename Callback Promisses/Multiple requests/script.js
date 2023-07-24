async function getCombineData (){
    const [data1, data2] = await Promise.all([
        fetch("https://www.boredapi.com/api/activity").then((response) => response.json()),
        fetch("https://api.genderize.io?name=luc").then((response) => response.json()),
    ])

    const combineData = {
        todo: data1,
        post: data2
    };
    return combineData
}

getCombineData().then((data) => console.log(data))