navigator.getBattery().then(function(battery) {

    function updateBattery() {
        const level = Math.round(battery.level * 100);

        document.getElementById("battery-level").style.width = level + "%";
        document.getElementById("percentage").textContent =
            level + "%";

        document.getElementById("charging-status").textContent =
            battery.charging ? "Charging 🔌" : "Not Charging";

        const bar = document.getElementById("battery-level");

        if (level > 50) {
            bar.style.background = "green";
        } else if (level > 20) {
            bar.style.background = "orange";
        } else {
            bar.style.background = "red";
        }
    }

    updateBattery();

    battery.addEventListener("levelchange", updateBattery);
    battery.addEventListener("chargingchange", updateBattery);
});
