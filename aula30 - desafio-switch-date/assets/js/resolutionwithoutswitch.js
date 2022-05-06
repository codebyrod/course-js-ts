const h1 = document.querySelector('.container h1');
const data = new Date();

function getDayWeek(day){
    const dayWeek = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    return dayWeek[day]
}

function getNameMonth(monthNumber){
    const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return months[monthNumber]
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
