const h1 = document.querySelector('.container h1');
const data = new Date();

function getDayWeek(day){
    let dayOfTheWeek;
    switch(day){
        case 0:
        dayOfTheWeek = 'domingo';
        return dayOfTheWeek;
        case 1:
        dayOfTheWeek = 'segunda-feira';
        return dayOfTheWeek;
        case 2:
        dayOfTheWeek = 'terça-feira';
        return dayOfTheWeek;
        case 3:
        dayOfTheWeek = 'quarta-feira';
        return dayOfTheWeek;
        case 4:
        dayOfTheWeek = 'quinta-feira';
        return dayOfTheWeek;
        case 5:
        dayOfTheWeek = 'sexta-feira';
        return dayOfTheWeek;
        case 6:
        dayOfTheWeek = 'sábado';
        return dayOfTheWeek;
    }
}

function getNameMonth(monthNumber){
    let nameMonth;
    switch(monthNumber){
        case 0:
        nameMonth = 'janeiro';
        return nameMonth;
        case 1:
        nameMonth = 'fevereiro';
        return nameMonth;
        case 2:
        nameMonth = 'março';
        return nameMonth;
        case 3:
        nameMonth = 'abril';
        return nameMonth;
        case 4:
        nameMonth = 'maio';
        return nameMonth;
        case 5:
        nameMonth = 'junho';
        return nameMonth;
        case 6:
        nameMonth = 'julho';
        return nameMonth;
        case 7:
        nameMonth = 'agosto';
        return nameMonth;
        case 8:
        nameMonth = 'setembro';
        return nameMonth;
        case 9:
        nameMonth = 'outubro';
        return nameMonth;
        case 10:
        nameMonth = 'novembro';
        return nameMonth;
        case 11:
        nameMonth = 'dezembro';
        return nameMonth;
    }
}

function addZeroLeft(num){
    return num > 10 ? num : `0${num}`
}

function createDate(){
    const dayWeek = data.getDay();
    const numberMonth = data.getMonth();

    const nameDay = getDayWeek(dayWeek);
    const nameMonth = getNameMonth(numberMonth);
    
    console.log(data.getDate());
    
    return (
        `${nameDay}, ${data.getDate()} de ${nameMonth} ` + 
        `de ${data.getFullYear()} ` +
        `${addZeroLeft(data.getHours())}:${addZeroLeft(data.getMinutes())}`
    );
}

h1.innerHTML = createDate(data);
