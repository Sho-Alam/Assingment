 
function countWord (str){
    const words = str.split(" ")
    const map = new Map()

    for (const word of words){
        if (map.has(word)){
            map.set(word, map.get(word) + 1)
        }else{
            map.set(word, 1)
        }
    }
    return map
}

const sentence = "I am Shoaib. I am learning web development from PW Skills."

console.log( countWord(sentence));