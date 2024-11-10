function pembagian(a, b) {
    if (b === 0) {
        return "Error: Pembagi tidak boleh nol";
    }
    return a / b;
}

module.exports = {pembagian}