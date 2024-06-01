function showDate() {
    const dt = new Date();
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const locales = [
        { locale: 'ru-RU', label: 'Дата и время для русской локали' },
        { locale: 'en-ZA', label: 'Дата и время для локали ЮАР' },
        { locale: 'ar-EG', label: 'Дата и время для локали Египта' },
        { locale: 'el-GR', label: 'Дата и время для греческой локали' },
        { locale: 'en-PK', label: 'Дата и время для пакистанской локали' },
        { locale: 'zh-CN', label: 'Дата и время для китайской локали' }
    ];

    let localizedDatesHTML = '';

    locales.forEach((locale) => {
        const today = new Date();
        const dateOptions = { dateStyle: 'full', timeStyle: 'long' };
        localizedDatesHTML += `
            <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333; margin-bottom: 10px;">
                <strong>${locale.label}:</strong> ${today.toLocaleString(locale.locale, dateOptions)}
            </div>`;
    });

    const currentDateHTML = `
        <div id="current-date">
            <strong>Текущая дата и время:</strong> ${dt.toLocaleString('ru-RU')}
        </div>
        <div id="date-components">
            <div><strong>Текущий год:</strong> ${dt.getFullYear()}</div>
            <div><strong>Текущий месяц:</strong> ${dt.getMonth() + 1}</div>
            <div><strong>Текущая дата:</strong> ${dt.getDate()}</div>
            <div><strong>День недели:</strong> ${daysOfWeek[dt.getDay()]}</div>
        </div>
    `;

    document.getElementById('localized-dates').innerHTML = localizedDatesHTML;
    document.getElementById('current-date-components').innerHTML = currentDateHTML;
}

function showDayOfWeek() {
    const day = document.getElementById('input-day').value;
    const month = document.getElementById('input-month').value - 1;
    const year = document.getElementById('input-year').value;

    const date = new Date(year, month, day);
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayOfWeek = daysOfWeek[date.getDay()];

    document.getElementById('day-of-week-result').innerHTML = `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333; margin-top: 10px;">
            <strong>День недели:</strong> ${dayOfWeek}
        </div>`;
}