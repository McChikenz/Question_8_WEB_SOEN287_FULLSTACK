// Ensure this script dynamically updates the time
document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.querySelector("div");
    if (headerElement) {
        const timeElement = document.createElement("div");
        timeElement.className = "time";
        headerElement.appendChild(timeElement);

        const updateTime = () => {
            const now = new Date();
            timeElement.textContent = now.toLocaleString(); // Includes both date and time
        };
        updateTime();
        setInterval(updateTime, 1000); // Update every second
    }
});