const cipher = {
  // ...
  encode: function (offset, string) {
    
    let resultadoci = "";

    for (var i = 0; i < string.length; i++) {
      const ascii_num = String.charCodeAt(i);
      if (ascii_num >= 65 && ascii_num <= 90) {
        resultadoci += string.fromCharCode(((ascii_num - 65 + offset) % 26) + 65);
        console.log (ascii_num);
      }

      else {
       resultadoci += String.charAt(i);
      }

    }
    return resultadoci;
  }


};

export default cipher;
