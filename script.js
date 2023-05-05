let Bar = document.querySelector('.bar');
let loading = document.querySelector('.loading');

const percentage = [0, 10, 20, 45, 70, 80, 85, 90, 98, 100];
let i = 0;

const interval = setInterval(() => {
    Bar.style.width = `${percentage[i]}%`;
    loading.innerHTML = percentage[i] + "%";
    i++;
    if (i == percentage.length) {
        clearInterval(interval);
        loading.innerHTML = "Complete";
    }
}, 1000);