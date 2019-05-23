module.exports = function main(str) {
    console.log("Debug Info");
    var ans="";
    var arr=[];
    var top=    ["._.","...","._.","._.","...","._.","._.","._.","._.","._."];
    var middle= ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"];
    var bottom= ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"];
    //._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
    //|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
    //|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|
    for (var i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    //拼接 ans字符串
    ans +=  top[arr[0]];
    for (var i = 1; i < arr.length; i++) {
      ans += " ";
      ans += top[arr[i]];
    }
    ans += "\n";
    ans +=  middle[arr[0]];
    for (var i = 1; i < arr.length; i++) {
      ans += " ";
      ans += middle[arr[i]];
    }
    ans += "\n";
    ans +=  bottom[arr[0]];
    for (var i = 1; i < arr.length; i++) {
      ans += " ";
      ans += bottom[arr[i]];
    }
    ans += "\n";

    return ans;
};
