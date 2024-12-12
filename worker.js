// worker.js
onmessage = event => {
    const { duration } = event.data;
    const now = new Date();
    let navidad = new Date(now.getFullYear(), 11, 25).getTime();

    if (now.getTime() > navidad) {
        navidad = new Date(now.getFullYear() + 1, 11, 25).getTime();
    }

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = navidad - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        postMessage({ days, hours, minutes, seconds });
    };

    updateCountdown();
    setInterval(updateCountdown, duration);
}
