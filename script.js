function ageToDays(){
    var numbers = /^[0-9]+$/;
    if (document.getElementById('ageInDays') != null) {
        document.getElementById('ageInDays').remove();
    }
    let birthYear = prompt('What year were you born?');
    while (birthYear >= 2020 || !birthYear.match(numbers)){
        birthYear = prompt('What year were you born? Must be less than 2020 and numbers only!');
    }

    let ageInDays = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDays + ' days old!');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function resetAgeButton(){
    if (document.getElementById('ageInDays') != null){
        document.getElementById('ageInDays').remove();
    } else{
        alert('Nothing to remove!');
    }
}


