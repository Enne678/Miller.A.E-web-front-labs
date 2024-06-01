function showDate() {
    const locales = [
        { locale: 'ru-RU', label: 'Дата и время для русской локали' },
        { locale: 'en-ZA', label: 'Дата и время для локали ЮАР' },
        { locale: 'ar-EG', label: 'Дата и время для локали Египта' },
        { locale: 'el-GR', label: 'Дата и время для греческой локали' },
        { locale: 'en-PK', label: 'Дата и время для пакистанской локали' },
        { locale: 'zh-CN', label: 'Дата и время для китайской локали' }
    ];

    const out = document.getElementById('current-date');
    let formattedDate = '';

    locales.forEach((locale) => {
        const today = new Date();
        const dateOptions = { dateStyle: 'full', timeStyle: 'long' };
        formattedDate += `
            <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333; margin-bottom: 10px;">
                <strong>${locale.label}:</strong> ${today.toLocaleString(locale.locale, dateOptions)}
            </div>`;
    });

    out.innerHTML = formattedDate;
}
