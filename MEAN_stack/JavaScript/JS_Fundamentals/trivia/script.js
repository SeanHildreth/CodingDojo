$document.getElementById("tvEasy").onClick


$.get("https://opentdb.com/api.php?amount=15&category=14&type=multiple", television)
$.get("https://opentdb.com/api.php?amount=15&category=15&type=multiple", videoGames)
$.get("https://opentdb.com/api.php?amount=15&category=16&type=multiple", boardGames)

function television(data) {
    var tv = data.results;
    var tvEasy, tvMed, tvHard;
    for(let idx = 0; idx < 15; idx++) {
        if(tvEasy === undefined) {
            if(tv[idx].difficulty === "easy") {
                tvEasy = tv[idx];
            }
        }
        if(tvMed === undefined) {
            if(tv[idx].difficulty === "medium") {
                tvMed = tv[idx];
            }
        } 
        if(tvHard === undefined) {
            if(tv[idx].difficulty === "hard") {
                tvHard = tv[idx];
            }
        }
    }
    console.log(tvEasy);
    console.log(tvMed);
    console.log(tvHard);
}

function videoGames(data) {
    var vg = data.results;
    var vgEasy, vgMed, vgHard;
    for(let idx = 0; idx < 15; idx++) {
        if(vgEasy === undefined) {
            if(vg[idx].difficulty === "easy") {
                vgEasy = vg[idx];
            }
        }
        if(vgMed === undefined) {
            if(vg[idx].difficulty === "medium") {
                vgMed = vg[idx];
            }
        } 
        if(vgHard === undefined) {
            if(vg[idx].difficulty === "hard") {
                vgHard = vg[idx];
            }
        }
    }
    console.log(vgEasy);
    console.log(vgMed);
    console.log(vgHard);
}

function boardGames(data) {
    var bg = data.results;
    var bgEasy, bgMed, bgHard;
    for(let idx = 0; idx < 15; idx++) {
        if(bgEasy === undefined) {
            if(bg[idx].difficulty === "easy") {
                bgEasy = bg[idx];
            }
        }
        if(bgMed === undefined) {
            if(bg[idx].difficulty === "medium") {
                bgMed = bg[idx];
            }
        } 
        if(bgHard === undefined) {
            if(bg[idx].difficulty === "hard") {
                bgHard = bg[idx];
            }
        }
    }
    console.log(bgEasy);
    console.log(bgMed);
    console.log(bgHard);
}
