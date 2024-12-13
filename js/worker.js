onmessage = event => {
    const { duration } = event.data //ya no se usa pero aun no logro eliminarlo
    const now = new Date()
    let navidad = new Date(now.getFullYear(), 11, 25).getTime()
    let isChristmasPassed = false

    if (now.getTime() > navidad) {
        navidad = new Date(now.getFullYear() + 1, 11, 25).getTime()
        isChristmasPassed = true
    }

    const updateCountdown = () => {
        const now = new Date().getTime()
        const distance = navidad - now
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        postMessage({ days, hours, minutes, seconds, isChristmasPassed })

        requestAnimationFrame(updateCountdown)
    }

    updateCountdown()
}
