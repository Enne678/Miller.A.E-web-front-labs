function showDaysCount() {
    let today = new Date();
    let inputDate = document.getElementById('birthdate');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday) / 1000 / 60 / 60 / 24;
    daysCount = Math.floor(daysCount);
    document.getElementById('result').innerHTML = `Количество дней с даты рождения: ${daysCount}`;
}

function clearInput() {
    document.getElementById('birthdate').value = '';
    document.getElementById('result').innerHTML = '';
}
