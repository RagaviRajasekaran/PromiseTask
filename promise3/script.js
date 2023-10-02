async function fetchContests() {
    try {
        const response = await fetch('https://kontests.net/api/v1/codeforces_gym');
        const data = await response.json();
        const contestList = document.getElementById('contest-list');

        if (data && data.length > 0) {
            data.forEach(contest => {
                const contestElement = document.createElement('div');
                contestElement.innerHTML = `<p>${contest.name} - ${contest.start_time}</p>`;
                contestList.appendChild(contestElement);
            });
        } else {
            contestList.innerHTML = '<p>No contests found.</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchContests function to load data when the page loads
window.addEventListener('load', fetchContests);