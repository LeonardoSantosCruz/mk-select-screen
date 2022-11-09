function selectchar(num){
    charactersData[num].imageSelector.innerHTML = charactersData[num].image
    charactersData[num].nameSelector.innerText = charactersData[num].name
}


let charactersData= [   
    {
        nameSelector : document.getElementById('nameCharacter'),
        imageSelector : document.getElementById('selected_1'),
        name : `Kano`,
        image : `<img class="selected-player1" src="./img/image0.gif" alt=""></img>`
    },
     {
        nameSelector : document.getElementById('nameCharacter'),
        imageSelector : document.getElementById('selected_1'),
        name : `Liu Kang`,
        image : `<img class="selected-player1" src="./img/image1.gif" alt=""></img>`
    },
    {
        nameSelector : document.getElementById('nameCharacter'),
        imageSelector : document.getElementById('selected_1'),
        name : `Raiden`,
        image : `<img class="selected-player1" src="./img/image2.gif" alt=""></img>`
    },
    {
        nameSelector : document.getElementById('nameCharacter'),
        imageSelector : document.getElementById('selected_1'),
        name : `Scorpion`,
        image : `<img class="selected-player1" src="./img/image3.gif" alt=""></img>`
    },
    {
        nameSelector : document.getElementById('nameCharacter'),
        imageSelector : document.getElementById('selected_1'),
        name : `Sub-Zero`,
        image : `<img class="selected-player1" src="./img/image4.gif" alt=""></img>`
    }

]
