const linkedinUrl = /(https:\/\/www\.linkedin.com\/in\/_-[a-zA-Z0-9]{5,30})/

function webURL (url){
    let result = linkedinUrl.test(url)
    return result ? "valid" : "invalid"
}

console.log(webURL ("https://www.linkedin.com/in/_-a8585296"));



// const linkedinUrl = /(https:\/\/www\.linkedin.com\/in\/_-[a-zA-Z0-9]{5,30})/

// let webURL = (url) => {
//     let result = linkedinUrl.test(url)
//     return result ? "valid" : "invalid"
// }
 
// console.log(webURL ("https://www.linkedin.com/in/_-a8585296"));

// console.log(webURL ("httpwww.linkedin.com/in/a8585296"));