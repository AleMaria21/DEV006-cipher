
const cipher = {
  encode: function (offset, string) {
    let resultadoci = "";
    for (let i = 0; i < string.length; i++) {
      const ascii_num = string.charCodeAt(i);
      if (ascii_num >= 65 && ascii_num <= 90) {
        resultadoci += String.fromCharCode(((ascii_num - 65 + offset) % 26) + 65);
      }
      else {
        resultadoci += string.charAt(i);
      } 
    }
    return (document.getElementById("cifrado").value = resultadoci);
  },     

  decode: function (offsetdes, stringdes) {
    let resultadodes = "";
    for (let i = 0; i < stringdes.length; i++) {
      const ascii_de = stringdes.charCodeAt(i);
      if (ascii_de >= 65 && ascii_de <= 90) {
        resultadodes += String.fromCharCode(((ascii_de - 65 - offsetdes) % 26) + 65);
      }

      else {
        resultadodes += stringdes.charAt(i);
      }
    }
    return (document.getElementById("descifrado").value = resultadodes);
  }
}
export default cipher;