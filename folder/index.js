var a = 0;

function start() {
    if (playerOne.value == '' && playerTwo.value != ''
        && usingOne.value != '' && usingTwo.value != '') {
        warning.innerHTML = 'Player 1 please input your Name';
    } else if (playerOne.value != '' && playerTwo.value == ''
        && usingOne.value != '' && usingTwo.value != '') {
        warning.innerHTML = 'Player 2 please input your Name';
    } else if (playerOne.value != '' && playerTwo.value != ''
        && usingOne.value == '' && usingTwo.value != '') {
        warning.innerHTML = 'Player 1 please input your Using';
    } else if (playerOne.value != '' && playerTwo.value != ''
        && usingOne.value != '' && usingTwo.value == '') {
        warning.innerHTML = 'Player 2 please input your Using';
    } else if (playerOne.value == '' && playerTwo.value == ''
        && usingOne.value != '' && usingTwo.value != '') {
        warning.innerHTML = 'Player 1 & Player 2 please input your Name';
    } else if (playerOne.value != '' && playerTwo.value != ''
        && usingOne.value == '' && usingTwo.value == '') {
        warning.innerHTML = 'Player 1 & Player 2 please input your Using';
    } else if (playerOne.value == '' && playerTwo.value != ''
        && usingOne.value != '' && usingTwo.value == '') {
        warning.innerHTML = 'Player 1 please input your Name' + "<br>" + 'Player 2 please input your Using';
    } else if (playerOne.value != '' && playerTwo.value == ''
        && usingOne.value == '' && usingTwo.value != '') {
        warning.innerHTML = 'Player 1 please input your Using' + "<br>" + 'Player 2 please input your Name';
    }  else if (playerOne.value == '' && playerTwo.value != ''
        && usingOne.value == '' && usingTwo.value != '') {
        warning.innerHTML = 'Player 1 please input your Name & Using';
    }  else if (playerOne.value != '' && playerTwo.value == ''
        && usingOne.value != '' && usingTwo.value == '') {
        warning.innerHTML = 'Player 2 please input your Name & Using';
    } else if (playerOne.value == '' && playerTwo.value == ''
        && usingOne.value == '' && usingTwo.value != '') {
        warning.innerHTML = 'Player 1 please input your Name & Using' + "<br>" + 'Player 2 please input your Name';
    } else if (playerOne.value != '' && playerTwo.value == ''
        && usingOne.value == '' && usingTwo.value == '') {
        warning.innerHTML = 'Player 1 please input your Using' + "<br>" + 'Player 2 please input your Name & Using';
    } else if (playerOne.value == '' && playerTwo.value != ''
        && usingOne.value == '' && usingTwo.value == '') {
        warning.innerHTML = 'Player 1 please input your Name & Using' + "<br>" + 'Player 2 please input your Using';
    } else if (playerOne.value == '' && playerTwo.value == ''
        && usingOne.value != '' && usingTwo.value == '') {
        warning.innerHTML = 'Player 1 please input your Name' + "<br>" + 'Player 2 please input your Name & Using';
    } else if (playerOne.value != '' && playerTwo.value != ''
        && usingOne.value != '' && usingTwo.value != '') {
        nameOne.innerHTML = playerOne.value;
        nameTwo.innerHTML = playerTwo.value;
        vs.innerHTML = '<b style="font-size: 95px;">VS</b>';
        useOne.innerHTML = usingOne.value;
        useTwo.innerHTML = usingTwo.value;
        tableD.style.display = 'none';
        tableDi.style.display = 'none';
        tableDis.style.display = 'none';
        tableDisa.style.display = 'none';
        tableDisab.style.display = 'none';
        tableDisabl.style.display = 'none';
        warning.style.fontSize = '80px';
        warning.innerHTML = 'LET PLAY';
    } else {
        warning.innerHTML = "Game won't start until you input your details";
    }
}

var displayScoreOne = 0;
var displayScoreTwo = 0;

let countOne = 0;
let countTwo =0;
let countThree = 0;
let countFour= 0;
let countFive = 0;
let countSix = 0;
let countSeven =0;
let countEight = 0;

let counterOne = 0;
let counterTwo =0;
let counterThree = 0;
let counterFour= 0;
let counterFive = 0;
let counterSix = 0;
let counterSeven =0;
let counterEight = 0;

function gameFunction(e) {
    if((face.innerHTML == useOne.innerHTML) && (faceOne.innerHTML == useOne.innerHTML) 
        && (faceTwo.innerHTML == useOne.innerHTML) && useOne.innerHTML != '') {
        firstProfile.innerHTML = 'CONGRATULATION';
        secondProfile.innerHTML = 'OOPS!';
        document.getElementById('face').style.backgroundColor= "#056162";
        document.getElementById('faceOne').style.backgroundColor= "#056162";
        document.getElementById('faceTwo').style.backgroundColor= "#056162";
        if (countOne ===1) {
            displayScoreOne;
            scoreOne.value = displayScoreOne;
        } else
        {
            displayScoreOne++;
            scoreOne.value = displayScoreOne;
            countOne =1;
        }
        return;
    } else if((face.innerHTML == useOne.innerHTML) && (faceFour.innerHTML == useOne.innerHTML) 
        && (faceEight.innerHTML == useOne.innerHTML) && useOne.innerHTML != '') {
        firstProfile.innerHTML = 'CONGRATULATION';
        secondProfile.innerHTML = 'OOPS!';
        document.getElementById('face').style.backgroundColor= "#056162";
        document.getElementById('faceFour').style.backgroundColor= "#056162";
        document.getElementById('faceEight').style.backgroundColor= "#056162";
        if (countTwo ===1) {
            displayScoreOne;
            scoreOne.value = displayScoreOne;
        } else
        {
            displayScoreOne++;
            scoreOne.value = displayScoreOne;
            countTwo =1;
        }
        return;
    } else if((face.innerHTML == useOne.innerHTML) && (faceThree.innerHTML == useOne.innerHTML) 
        && (faceSix.innerHTML == useOne.innerHTML) && useOne.innerHTML != '') {
        firstProfile.innerHTML = 'CONGRATULATION';
        secondProfile.innerHTML = 'OOPS!';
        document.getElementById('face').style.backgroundColor= "#056162";
        document.getElementById('faceThree').style.backgroundColor= "#056162";
        document.getElementById('faceSix').style.backgroundColor= "#056162";
        if (countThree ===1) {
            displayScoreOne;
            scoreOne.value = displayScoreOne;
        } else
        {
            displayScoreOne++;
            scoreOne.value = displayScoreOne;
            countThree =1;
        }
        return;
    } else if((faceThree.innerHTML == useOne.innerHTML) && (faceFour.innerHTML == useOne.innerHTML) 
        && (faceFive.innerHTML == useOne.innerHTML) && useOne.innerHTML != '') {
        firstProfile.innerHTML = 'CONGRATULATION';
        secondProfile.innerHTML = 'OOPS!';
        document.getElementById('faceThree').style.backgroundColor= "#056162";
        document.getElementById('faceFour').style.backgroundColor= "#056162";
        document.getElementById('faceFive').style.backgroundColor= "#056162";
        if (countFour ===1) {
            displayScoreOne;
            scoreOne.value = displayScoreOne;
        } else
        {
            displayScoreOne++;
            scoreOne.value = displayScoreOne;
            countFour =1;
        }
        return;
    } else if((faceSix.innerHTML == useOne.innerHTML) && (faceSeven.innerHTML == useOne.innerHTML) 
        && (faceEight.innerHTML == useOne.innerHTML) && useOne.innerHTML != '') {
        firstProfile.innerHTML = 'CONGRATULATION';
        secondProfile.innerHTML = 'OOPS!';
        document.getElementById('faceSix').style.backgroundColor= "#056162";
        document.getElementById('faceSeven').style.backgroundColor= "#056162";
        document.getElementById('faceEight').style.backgroundColor= "#056162";
        if (countFive ===1) {
            displayScoreOne;
            scoreOne.value = displayScoreOne;
        } else
        {
            displayScoreOne++;
            scoreOne.value = displayScoreOne;
            countFive =1;
        }
        return;
    } else if((faceOne.innerHTML == useOne.innerHTML) && (faceFour.innerHTML == useOne.innerHTML) 
        && (faceSeven.innerHTML == useOne.innerHTML) && useOne.innerHTML != '') {
        firstProfile.innerHTML = 'CONGRATULATION';
        secondProfile.innerHTML = 'OOPS!';
        document.getElementById('faceOne').style.backgroundColor= "#056162";
        document.getElementById('faceFour').style.backgroundColor= "#056162";
        document.getElementById('faceSeven').style.backgroundColor= "#056162";
        if (countSix ===1) {
            displayScoreOne;
            scoreOne.value = displayScoreOne;
        } else
        {
            displayScoreOne++;
            scoreOne.value = displayScoreOne;
            countSix =1;
        }
        return;
    } else if((faceTwo.innerHTML == useOne.innerHTML) && (faceFive.innerHTML == useOne.innerHTML) 
        && (faceEight.innerHTML == useOne.innerHTML) && useOne.innerHTML != '') {
        firstProfile.innerHTML = 'CONGRATULATION';
        secondProfile.innerHTML = 'OOPS!';
        document.getElementById('faceTwo').style.backgroundColor= "#056162";
        document.getElementById('faceFive').style.backgroundColor= "#056162";
        document.getElementById('faceEight').style.backgroundColor= "#056162";
        if (countSeven ===1) {
            displayScoreOne;
            scoreOne.value = displayScoreOne;
        } else
        {
            displayScoreOne++;
            scoreOne.value = displayScoreOne;
            countSeven =1;
        }
        return
    } else if((faceSix.innerHTML == useOne.innerHTML) && (faceFour.innerHTML == useOne.innerHTML) 
        && (faceTwo.innerHTML == useOne.innerHTML) && useOne.innerHTML != '') {
        firstProfile.innerHTML = 'CONGRATULATION';
        secondProfile.innerHTML = 'OOPS!';
        document.getElementById('faceSix').style.backgroundColor= "#056162";
        document.getElementById('faceFour').style.backgroundColor= "#056162";
        document.getElementById('faceTwo').style.backgroundColor= "#056162";
        if (countEight ===1) {
            displayScoreOne;
            scoreOne.value = displayScoreOne;
        } else
        {
            displayScoreOne++;
            scoreOne.value = displayScoreOne;
            countEight =1;
        }
        return;
    } else if((face.innerHTML == useTwo.innerHTML) && (faceOne.innerHTML == useTwo.innerHTML) 
        && (faceTwo.innerHTML == useTwo.innerHTML) && useTwo.innerHTML != '') {        
        firstProfile.innerHTML = 'OOPS!';
        secondProfile.innerHTML = 'CONGRATULATION';
        document.getElementById('face').style.backgroundColor= "#056162";
        document.getElementById('faceOne').style.backgroundColor= "#056162";
        document.getElementById('faceTwo').style.backgroundColor= "#056162";
        if (counterOne ===1) {
            displayScoreTwo;
            scoreTwo.value = displayScoreTwo;
        } else
        {
            displayScoreTwo++;;
            scoreTwo.value = displayScoreTwo;
            counterOne =1;
        }
        return;
    } else if((face.innerHTML == useTwo.innerHTML) && (faceFour.innerHTML == useTwo.innerHTML) 
        && (faceEight.innerHTML == useTwo.innerHTML) && useTwo.innerHTML != '') {
        firstProfile.innerHTML = 'OOPS!';
        secondProfile.innerHTML = 'CONGRATULATION';
        document.getElementById('face').style.backgroundColor= "#056162";
        document.getElementById('faceFour').style.backgroundColor= "#056162";
        document.getElementById('faceEight').style.backgroundColor= "#056162";
        if (counterTwo ===1) {
            displayScoreTwo;
            scoreTwo.value = displayScoreTwo;
        } else
        {
            displayScoreTwo++;;
            scoreTwo.value = displayScoreTwo;
            counterTwo =1;
        }
        return;
    } else if((face.innerHTML == useTwo.innerHTML) && (faceThree.innerHTML == useTwo.innerHTML) 
        && (faceSix.innerHTML == useTwo.innerHTML) && useTwo.innerHTML != '') {
        firstProfile.innerHTML = 'OOPS!';
        secondProfile.innerHTML = 'CONGRATULATION';
        document.getElementById('face').style.backgroundColor= "#056162";
        document.getElementById('faceThree').style.backgroundColor= "#056162";
        document.getElementById('faceSix').style.backgroundColor= "#056162";
        if (counterThree ===1) {
            displayScoreTwo;
            scoreTwo.value = displayScoreTwo;
        } else
        {
            displayScoreTwo++;;
            scoreTwo.value = displayScoreTwo;
            counterThree =1;
        }
        return;
    } else if((faceThree.innerHTML == useTwo.innerHTML) && (faceFour.innerHTML == useTwo.innerHTML) 
        && (faceFive.innerHTML == useTwo.innerHTML) && useTwo.innerHTML != '') {
        firstProfile.innerHTML = 'OOPS!';
        secondProfile.innerHTML = 'CONGRATULATION';
        document.getElementById('faceThree').style.backgroundColor= "#056162";
        document.getElementById('faceFour').style.backgroundColor= "#056162";
        document.getElementById('faceFive').style.backgroundColor= "#056162";
        if (counterFour ===1) {
            displayScoreTwo;
            scoreTwo.value = displayScoreTwo;
        } else
        {
            displayScoreTwo++;;
            scoreTwo.value = displayScoreTwo;
            counterFour =1;
        }
        return;
    } else if((faceSix.innerHTML == useTwo.innerHTML) && (faceSeven.innerHTML == useTwo.innerHTML) 
        && (faceEight.innerHTML == useTwo.innerHTML) && useTwo.innerHTML != '') {
        firstProfile.innerHTML = 'OOPS!';
        secondProfile.innerHTML = 'CONGRATULATION';
        document.getElementById('faceSix').style.backgroundColor= "#056162";
        document.getElementById('faceSeven').style.backgroundColor= "#056162";
        document.getElementById('faceEight').style.backgroundColor= "#056162";
        if (counterFive ===1) {
            displayScoreTwo;
            scoreTwo.value = displayScoreTwo;
        } else
        {
            displayScoreTwo++;;
            scoreTwo.value = displayScoreTwo;
            counterFive =1;
        }
        return;
    } else if((faceOne.innerHTML == useTwo.innerHTML) && (faceFour.innerHTML == useTwo.innerHTML) 
        && (faceSeven.innerHTML == useTwo.innerHTML) && useTwo.innerHTML != '') {
        firstProfile.innerHTML = 'OOPS!';
        secondProfile.innerHTML = 'CONGRATULATION';
        document.getElementById('faceOne').style.backgroundColor= "#056162";
        document.getElementById('faceFour').style.backgroundColor= "#056162";
        document.getElementById('faceSeven').style.backgroundColor= "#056162";
        if (counterSix ===1) {
            displayScoreTwo;
            scoreTwo.value = displayScoreTwo;
        } else
        {
            displayScoreTwo++;;
            scoreTwo.value = displayScoreTwo;
            counterSix =1;
        }
        return;
    } else if((faceTwo.innerHTML == useTwo.innerHTML) && (faceFive.innerHTML == useTwo.innerHTML) 
        && (faceEight.innerHTML == useTwo.innerHTML) && useTwo.innerHTML != '') {
        firstProfile.innerHTML = 'OOPS!';
        secondProfile.innerHTML = 'CONGRATULATION';
        document.getElementById('faceTwo').style.backgroundColor= "#056162";
        document.getElementById('faceFive').style.backgroundColor= "#056162";
        document.getElementById('faceEight').style.backgroundColor= "#056162";
        if (counterSeven ===1) {
            displayScoreTwo;
            scoreTwo.value = displayScoreTwo;
        } else
        {
            displayScoreTwo++;;
            scoreTwo.value = displayScoreTwo;
            counterSeven =1;
        }
        return;
    } else if((faceSix.innerHTML == useTwo.innerHTML) && (faceFour.innerHTML == useTwo.innerHTML) 
        && (faceTwo.innerHTML == useTwo.innerHTML) && useTwo.innerHTML != '') {
        firstProfile.innerHTML = 'OOPS!';
        secondProfile.innerHTML = 'CONGRATULATION';
        document.getElementById('faceSix').style.backgroundColor= "#056162";
        document.getElementById('faceFour').style.backgroundColor= "#056162";
        document.getElementById('faceTwo').style.backgroundColor= "#056162";
        if (counterEight ===1) {
            displayScoreTwo;
            scoreTwo.value = displayScoreTwo;
        } else
        {
            displayScoreTwo++;;
            scoreTwo.value = displayScoreTwo;
            counterEight =1;
        }
        return;
    } else if ((a == 0) && (useOne.innerHTML != '') && (useTwo.innerHTML != '') && (e.target.innerHTML == '')) {
        e.target.innerHTML = useOne.innerHTML;
        a = useTwo.innerHTML;
        gameFunction()

    } else if ((a == useTwo.innerHTML) && (useOne.innerHTML != '') && (useTwo.innerHTML != '') && (e.target.innerHTML == '')) {
        e.target.innerHTML = useTwo.innerHTML;
        a = 0;
        gameFunction()
    } else {
        warning.innerHTML = "Game won't start until you input your details";
    }
}

function nextFunction(e) {
    if (scoreOne.value > scoreTwo.value) {
        firstProfile.innerHTML = 'WINNING';
        secondProfile.innerHTML = 'YOU CAN TRY HARDER';
        faceOne.innerHTML = '';
        face.innerHTML = '';
        faceTwo.innerHTML = '';
        faceThree.innerHTML = '';
        faceFour.innerHTML = '';
        faceFive.innerHTML = '';
        faceSix.innerHTML = '';
        faceSeven.innerHTML = '';
        faceEight.innerHTML = '';
        document.getElementById('face').style.backgroundColor= "transparent";
        document.getElementById('faceOne').style.backgroundColor= "transparent";
        document.getElementById('faceTwo').style.backgroundColor= "transparent";
        document.getElementById('faceThree').style.backgroundColor= "transparent";
        document.getElementById('faceFour').style.backgroundColor= "transparent";
        document.getElementById('faceFive').style.backgroundColor= "transparent";
        document.getElementById('faceSix').style.backgroundColor= "transparent";
        document.getElementById('faceSeven').style.backgroundColor= "transparent";
        document.getElementById('faceEight').style.backgroundColor= "transparent";
        countOne = 0;
        countTwo =0;
        countThree = 0;
        countFour= 0;
        countFive = 0;
        countSix = 0;
        countSeven =0;
        countEight = 0;
        counterOne = 0;
        counterTwo =0;
        counterThree = 0;
        counterFour= 0;
        counterFive = 0;
        counterSix = 0;
        counterSeven =0;
        counterEight = 0;
    } else if ( scoreOne.value < scoreTwo.value) {
        secondProfile.innerHTML = 'WINNING';
        firstProfile.innerHTML = 'YOU CAN TRY HARDER';
        faceOne.innerHTML = '';
        face.innerHTML = '';
        faceTwo.innerHTML = '';
        faceThree.innerHTML = '';
        faceFour.innerHTML = '';
        faceFive.innerHTML = '';
        faceSix.innerHTML = '';
        faceSeven.innerHTML = '';
        faceEight.innerHTML = '';
        document.getElementById('face').style.backgroundColor= "transparent";
        document.getElementById('faceOne').style.backgroundColor= "transparent";
        document.getElementById('faceTwo').style.backgroundColor= "transparent";
        document.getElementById('faceThree').style.backgroundColor= "transparent";
        document.getElementById('faceFour').style.backgroundColor= "transparent";
        document.getElementById('faceFive').style.backgroundColor= "transparent";
        document.getElementById('faceSix').style.backgroundColor= "transparent";
        document.getElementById('faceSeven').style.backgroundColor= "transparent";
        document.getElementById('faceEight').style.backgroundColor= "transparent";
        countOne = 0;
        countTwo =0;
        countThree = 0;
        countFour= 0;
        countFive = 0;
        countSix = 0;
        countSeven =0;
        countEight = 0;
        counterOne = 0;
        counterTwo =0;
        counterThree = 0;
        counterFour= 0;
        counterFive = 0;
        counterSix = 0;
        counterSeven =0;
        counterEight = 0;
    } else {
        secondProfile.innerHTML ='DRAW';
        firstProfile.innerHTML = 'DRAW';
        faceOne.innerHTML = '';
        face.innerHTML = '';
        faceTwo.innerHTML = '';
        faceThree.innerHTML = '';
        faceFour.innerHTML = '';
        faceFive.innerHTML = '';
        faceSix.innerHTML = '';
        faceSeven.innerHTML = '';
        faceEight.innerHTML = '';
        document.getElementById('face').style.backgroundColor= "transparent";
        document.getElementById('faceOne').style.backgroundColor= "transparent";
        document.getElementById('faceTwo').style.backgroundColor= "transparent";
        document.getElementById('faceThree').style.backgroundColor= "transparent";
        document.getElementById('faceFour').style.backgroundColor= "transparent";
        document.getElementById('faceFive').style.backgroundColor= "transparent";
        document.getElementById('faceSix').style.backgroundColor= "transparent";
        document.getElementById('faceSeven').style.backgroundColor= "transparent";
        document.getElementById('faceEight').style.backgroundColor= "transparent";
        countOne = 0;
        countTwo =0;
        countThree = 0;
        countFour= 0;
        countFive = 0;
        countSix = 0;
        countSeven =0;
        countEight = 0;
        counterOne = 0;
        counterTwo =0;
        counterThree = 0;
        counterFour= 0;
        counterFive = 0;
        counterSix = 0;
        counterSeven =0;
        counterEight = 0;
    }
}

