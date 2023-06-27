const regex = /^(https?:\/\/)[a-zA-Z0-9!@#$%^&*)(\.',:;~]+[a-zA-Z]$/


function webURL (url) {
    if(regex.test (url)){
        console.log(`${url} is valid Url`);
    }
    else {
        console.log(`${url} is invalid Url`);
    }
}

webURL ("https://www.pwskills.com")
webURL ("https://www.google0157.com")
webURL ("https://www.google@$#.com")

// Invalid

webURL ("https://www.pwskills.com@123")
webURL ("https://www.")
webURL ("htt//www.pwskill")





// const regex = /(http)s?:\/\/[a-zA-Z0-9!@#$%^&*(\.]+[a-zA-Z]/

// let webURL =(url) => {
//     let resutl = regex.test(url)
//     return resutl ? "valid" : "invalid"
// }

// console.log(webURL ('https://www.pwskills.com'));
// console.log(webURL ('https://www.google52@.com'));

// // InvalidUrl

// console.log(webURL ('h12456'));
// console.log(webURL ('hts://www.google52@.com'));
// console.log(webURL ('ht//www.pwskills0758.com'));