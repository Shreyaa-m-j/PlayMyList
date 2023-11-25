var flag = false;
var songlist = ["./musics/lover.mp3", "./musics/wannaBeYours.mp3", "./musics/perfect.mp3", "./musics/summerTime.mp3", "./musics/untilIFoundYou.mp3", "./musics/paperRings.mp3", "./musics/melting.mp3", "./musics/august.mp3"];

for (var i = 1; i <= 8; i++) {

    switch (i) {
        case 1: var song1 = new Audio(songlist[0]);
            playsong(i, song1);
            break;
        case 2: var song2 = new Audio(songlist[1]);
            playsong(i, song2);
            break;
        case 3: var song3 = new Audio(songlist[2]);
            playsong(i, song3);
            break;
        case 4: var song4 = new Audio(songlist[3]);
            playsong(i, song4);
            break;
        case 5: var song5 = new Audio(songlist[4]);
            playsong(i, song5);
            break;
        case 6: var song6 = new Audio(songlist[5]);
            playsong(i, song6);
            break;
        case 7: var song7 = new Audio(songlist[6]);
            playsong(i, song7);
            break;
        case 8: var song8 = new Audio(songlist[7]);
            playsong(i, song8);
            break;
        default: console.log("i"); break;
    }

}

function playsong(i, song) {
    document.querySelector(".play" + i).addEventListener("click", function () {
        if (flag == false) {
            song.play();
            flag = true;
        }
        else {
            pauseall(i);
            song.play();
            flag = true;
        }
    });
    document.querySelector(".pause" + i).addEventListener("click", function () {

        song.pause();
        flag = false;

    });
    document.querySelector(".next" + i).addEventListener("click", function () {
        pauseall(i);
        flag = false;
        if (i != 8) {
            i = i + 1;
        }
        else {
            i = 1;
        }
        document.querySelector(".play" + i).click();
    });
}

function pauseall(i) {
    for (var j = 1; j <= 8; j++) {

        document.querySelector(".pause" + j).click();

    }
}

