function phoneNum(num) {
  let str = num.split("");
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (i <= 6 && str[i] != "-") {
      newStr.push(str[i] = "*");
    } else {
      newStr.push(str[i]);
    }
  }
  return newStr.join("");
}

console.log(phoneNum("678-687-3586"))