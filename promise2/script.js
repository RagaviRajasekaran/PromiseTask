fetch('https://nameday.abalin.net/api/V1/today')
    .then(res => {
        if (res.ok)
            return res.json();
        else
            throw new Error('Failed to fetch data');
    })
    .then(data => {
        const day = data.day;
        const month = data.month;
        
        // Specify the country code for which you want the nameday
        const countryCode = 'us'; // Change this to the desired country code
        
        // Check if the country code exists in the nameday data
        if (data.nameday.hasOwnProperty(countryCode)) {
            const nameday = data.nameday[countryCode];
            const namedayInfo = `${day}/${month} Nameday (${countryCode}): ${nameday}`;
            document.getElementById('nameday-info').textContent = namedayInfo;
        } else {
            document.getElementById('nameday-info').textContent = `No nameday information available for ${countryCode}`;
        }
    })
    .catch(err => console.log(err));
