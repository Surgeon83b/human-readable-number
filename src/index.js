module.exports = function toReadable (number) {
  let res = '';
  const digits0_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const digits10_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const digits20_99 = ['ten', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // если число <= 9
  if (number <= 9) return digits0_9[number];

  // если число от 10 до 19
  if (number < 20) return digits10_19[number % 10];

  // если число от 20 до 99
  if (number <= 99) {
    res = digits20_99[Math.trunc(number / 10)];
    if (number % 10) return res + ' ' + digits0_9[number % 10];
    else return res;
  }

  //если число больше 99
  if (number % 100) {
    return digits0_9[Math.trunc(number / 100)] + ' hundred' + ' ' + toReadable(number % 100);
  }
  else return digits0_9[Math.trunc(number / 100)] + ' hundred';
}
