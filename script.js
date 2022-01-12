document.addEventListener('DOMContentLoaded', ()=>{
    let nextButton = document.querySelector('.next');
    let translateButton = document.querySelector('.translate');
    let img = document.querySelector('.japanese-text__container');
    let themes = [
        ['n1', 'n2', 'n3', 'n4', 'n5', 'n6'],
        ['k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'k7', 'k8', 'k9'],
        ["kart1", "kart2", "kart3", "kart4", "kart5", "kart6"],
        ['nob1', 'nob2', 'nob3', 'nob4', 'nob5', 'nob6', 'nob7'],
        ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15'],
        ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10', 't11', 't12', 't13', 't14', 't15', 't16', 't17', 't18', 't19', 't20']
    ]
    let translate = '';
    nextButton.addEventListener('click', (e)=> {
        let randomTheme = themes[Math.floor(Math.random()*6)];
        console.log(randomTheme);
        let randomizer = Math.floor(Math.random()*randomTheme.length);
        console.log(randomTheme.length);
        console.log(randomizer);
        translate = randomTheme[randomizer] + '-t';
        console.log(translate)
        img.innerHTML = `<img src="img/${randomTheme[randomizer]}.png"></img>`;
    });
    translateButton.addEventListener('click', (e)=> {
        img.innerHTML += `<img src="img/${translate}.png"></img>`;
    });
});