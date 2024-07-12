// console.log(`testing`)
document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogBreed = document.getElementById('dog-breeds');
    const imgContainer = document.getElementById('dog-image-container');

    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Challenge One
    function getAllDog() {
        fetch(imgUrl)
            .then((response) => response.json())
            .then((data) => {
                const status = document.createElement('li')
                status.textContent = data.status
                imgContainer.appendChild(status)
                const newDog = data.message.map((dog) => {
                    const imgElement = document.createElement('img');
                    imgElement.src = dog;
                    imgElement.alt = 'Dog';
                    imgContainer.appendChild(imgElement)
                })
            })


    }
    getAllDog()

    // challenge two

    function getAllBreeds() {
        fetch(breedUrl)
            .then((response) => response.json())




            .then(data => {
                const breeds = data.message;
                //    console.log(breeds);
                Object.keys(breeds).forEach((breed) => {
                    const list = document.createElement("li");
                    list.textContent = breed;
                    dogBreed.appendChild(list);
                    list.addEventListener("click", function () {
                        list.style.color = "blue";
                    });
                });



            });
    }
     
    getAllBreeds();

    function filterBreed() {
        const select = document.getElementById("breed-dropdown")
        select.addEventListener("change", function(event){
            const letter = event.target.value;
            // console.log(letter)
            const allBreeds = document.querySelectorAll('li')
            allBreeds.forEach((breed) => {
                if(breed.textContent.startsWith(letter)){
                    breed.style.display = ""
                }else{
                    breed.style.display = "none"
                }
            })
        })
    
    }

    filterBreed()




    

});