const cipher = {
  // ...
  encode: function (offset, string) {
    let resultadoci = "";
    for (var i = 0; i < string.length; i++) {
      var ascii_num = string.charCodeAt(i);
      if (ascii_num >= 65 && ascii_num <= 90) {
        resultadoci += String.fromCharCode(((ascii_num - 65 + offset) % 26) + 65);
        console.log(ascii_num);
      }

      else {
        resultadoci += string.charAt(i);
      }

    }
    return (resultadoci = document.getElementById("cifrado").value);
  }


};

export default cipher;
