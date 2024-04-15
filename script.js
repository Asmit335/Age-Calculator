const inputOfDate = document.getElementById("date");

const currentDate = new Date();
inputOfDate.max = currentDate.toISOString().split("T")[0];

function showToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;

    const toastcontainer = document.getElementById("toastcontainer");
    toastcontainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toastcontainer.removeChild(toast);
        }, 300);
    }, 3000);
}


function AgeCalculator() {
    const birthday = new Date(inputOfDate.value);
    if (!inputOfDate.value) {
        showToast("Please enter your date of birth.");
        return;
    }
    const today = new Date();

    let ageYears = today.getFullYear() - birthday.getFullYear();
    let ageMonths = today.getMonth() - birthday.getMonth();
    let ageDays = today.getDate() - birthday.getDate();
    let ageHours = today.getHours() - birthday.getHours();
    let ageMinutes = today.getMinutes() - birthday.getMinutes();
    let ageSeconds = today.getSeconds() - birthday.getSeconds();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
        ageDays = Math.abs(ageDays);
    }
    if (ageDays < 0) {
        ageMonths--;
        const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += tempDate.getDate();
    }
    if (ageHours < 0) {
        ageDays--;
        ageHours += 24;
    }
    if (ageMinutes < 0) {
        ageHours--;
        ageMinutes += 60;
    }
    if (ageSeconds < 0) {
        ageMinutes--;
        ageSeconds += 60;
    }

    const ageString = `${ageYears} years, ${ageMonths} months, ${ageDays} days, ${ageHours} hours, ${ageMinutes} minutes, ${ageSeconds} seconds`;


    const resultContainer = document.getElementById("result");
    resultContainer.textContent = ageString;
    setInterval(AgeCalculator, 1000);
}