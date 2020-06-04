export default {
    formatCurrency: function (num) {
        return 'Q ' + Number(num.toFixed(1)).toLocaleString() + ' ';
    }
}
