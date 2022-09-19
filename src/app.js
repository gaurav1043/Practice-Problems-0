module.exports = {
  decimalToBinary: function (num) {
    let binary = "";
    let remainder = 0;
    if (num > 0) {
      let num1 = num;
      while (num1 != 0) {
        remainder = num1 % 2;
        num1 = parseInt(num1 / 2);
        binary = binary + remainder;
      }
      binary = addZero(binary, num);
      binary = reverseString(binary);
      // bin = repl(bin);
      // bin = addBinary(bin, "1");
      return binary;
      // console.log(`Binary: ${reverseString(bin)}`);
    } else if (num < 0) {
      let num2 = Math.abs(num);
      while (num2 != 0) {
        remainder = num2 % 2;
        num2 = parseInt(num2 / 2);
        binary = binary + remainder;
      }
      binary = addZero(binary, num);
      binary = reverseString(binary);
      binary = replace01(binary);
      binary = addBinary(binary, "1");
      // console.log(bin);
      // bin = decbin(bin);
      return binary;
    } else {
      return 0000000000000000;
    }
  },
};

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function addZero(str, num) {
  var chr = "0";
  let limit = 0;
  if (num < -32768 || 32767 < num) limit = 32;
  else if (-32768 < num && num < 32767) limit = 16;
  while (str.length < limit) {
    str = str.concat(chr);
  }
  return str;
}

function replace01(str) {
  let rep = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "0") {
      rep = rep + str[i].replace("0", "1");
      // console.log(str[i].replace("0", "1"));
    } else {
      rep = rep + str[i].replace("1", "0");
      // console.log(str[i].replace("1", "0"));
    }
  }
  return rep;
}

const addBinary = (str1, str2) => {
  let carry = 0;
  const res = [];
  let l1 = str1.length,
    l2 = str2.length;
  for (let i = l1 - 1, j = l2 - 1; 0 <= i || 0 <= j; --i, --j) {
    let a = 0 <= i ? Number(str1[i]) : 0,
      b = 0 <= j ? Number(str2[j]) : 0;
    res.push((a + b + carry) % 2);
    carry = 1 < a + b + carry;
  }
  if (carry) {
    res.push(1);
  }
  return res.reverse().join("");
};
