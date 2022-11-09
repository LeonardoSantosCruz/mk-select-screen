
function selectchar(num){
    
    charactersData[num].imageSelector.innerHTML = charactersData[num].image 
    charactersData[num].nameSelector.innerText = charactersData[num].name
    charactersData[num].AudioSelector.innerHTML = charactersData[num].Audio
    stopSoundtheme()
}

function stopSoundtheme(){
    document.getElementById('mortalKombat').innerHTML = `<audio src="./audio/mktheme.mp3" autoplay muted ></audio>`
}

function soundEffect() {
     document.getElementById('mortalKombat').innerHTML = `<audio src="./audio/mktheme.mp3" autoplay ></audio>`
}

let charactersData= [   
    {
        
        AudioSelector : document.getElementById('sound'),
        Audio : `<audio src="./audio/audio0.mp3" autoplay></audio>`,
        nameSelector : document.getElementById('nameCharacter'),
        imageSelector : document.getElementById('selected_1'),
        name : `Kano`,
        image : `<img class="selected-player1" src="./img/image0.gif" alt=""></img>`
    },
     {
        
        AudioSelector : document.getElementById('sound'),
        Audio : `<audio src="./audio/audio1.mp3" autoplay></audio>`,
        nameSelector : document.getElementById('nameCharacter'),
        imageSelector : document.getElementById('selected_1'),
        name : `Liu Kang`,
        image : `<img class="selected-player1" src="./img/image1.gif" alt=""></img>`
    },
    {
        
        AudioSelector : document.getElementById('sound'),
        Audio : `<audio src="./audio/audio2.mp3" autoplay></audio>`,
        nameSelector : document.getElementById('nameCharacter'),
        imageSelector : document.getElementById('selected_1'),
        name : `Raiden`,
        image : `<img class="selected-player1" src="./img/image2.gif" alt=""></img>`
    },
    {
        
        AudioSelector : document.getElementById('sound'),
        Audio : `<audio src="./audio/audio3.mp3" autoplay></audio>`,
        nameSelector : document.getElementById('nameCharacter'),
        imageSelector : document.getElementById('selected_1'),
        name : `Scorpion`,
        image : `<img class="selected-player1" src="./img/image3.gif" alt=""></img>`
    },
    {
        
        AudioSelector : document.getElementById('sound'),
        Audio : `<audio src="./audio/audio4.mp3" autoplay></audio>`,
        nameSelector : document.getElementById('nameCharacter'),
        imageSelector : document.getElementById('selected_1'),
        name : `Sub-Zero`,
        image : `<img class="selected-player1" src="./img/image4.gif" alt=""></img>`
    }

]
