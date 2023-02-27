let definition = document.getElementById("definition");
let wordheading = document.getElementById("wordheading");
let btn = document.getElementById("btn");
let search = document.getElementById("search");

const dictonary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c2ef3d4ebemsh6ac5ccfdd0d074bp1bc0a7jsn3d510ecc97fc',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            
            console.log(response)
            wordheading.innerHTML ="Here is the meaning of : " + response.word;
            definition.innerHTML = response.definition.replace("2", "<br>2.").replace("3", "<br>3.").replace("4", "<br>4.");
            search.value = "";
        
        })           
        .catch(err => {
            
            console.error(err)
        
        wordheading.innerHTML = "No words found"});
}
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictonary(search.value);
})