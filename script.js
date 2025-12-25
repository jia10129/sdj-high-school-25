// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Binary Rain Effect
    const canvas = document.getElementById('binaryCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = '01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function drawBinaryRain() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0'; // Green color
        ctx.font = fontSize + 'px VT323';
        for (let i = 0; i < drops.length; i++) {
            const text = binary.charAt(Math.floor(Math.random() * binary.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawBinaryRain, 33);

    // Intro Fade Out
    setTimeout(function() {
        document.getElementById('intro').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('intro').style.display = 'none';
            document.body.style.overflow = 'auto'; // 스크롤바 보이게 함
        }, 1000); // Fade out duration
    }, 3000); // Display duration
});
