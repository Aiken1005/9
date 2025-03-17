function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height)) {
        document.getElementById('result').textContent = "請輸入有效的數字";
        return;
    }

    const area = base * height;
    document.getElementById('result').textContent = area.toFixed(2);
}