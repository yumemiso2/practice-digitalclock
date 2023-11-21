// 時間を取得
function getTime() {
  let now = new Date;

  // 値が１桁の場合に対応するため、２桁目を「0」で埋めるための-2
  // slice(-2) 後ろから二桁の値を取得する処理
  // 例：15時1分9秒の場合、15:1:9となってしまうので、取得した値の先頭に0を付加して、それぞれ015時01分09秒とし、015時の先頭の0をslice()メソッドで削除
  let hh = ("0" + now.getHours()).slice(-2);
  let mm = ("0" + now.getMinutes()).slice(-2);
  let ss = ("0" + now.getSeconds()).slice(-2);
  let ye = ("0" + now.getFullYear()).slice(-4);
  // ＋ 1しないといけない！！！！
  let mo = ("0" + (now.getMonth() + 1)).slice(-2);
  let da = ("0" + now.getDate()).slice(-2);
  // getDay()は曜日が取得できる！！！！
  let we = ("0" + now.getDay()).slice(-2);
  // let we = "0";
  let i = we;

  console.log(i);

  // 曜日取得のためのif文
  function checkDayOfWeek(day) {
    if (day === "01") {
      return "MON";
    } else if (day === "02") {
      return "TUE";
    } else if (day === "03") {
      return "WED";
    } else if (day === "04") {
      return "THU";
    } else if (day === "05") {
      return "FRI";
    } else if (day === "06") {
      return "SAT";
    } else if (day === "07") {
      return "SUN";
    } else {
      return "Invalid day";
    }

  }
  // day のなかに i を代入
  const result = checkDayOfWeek(i);
  console.log(result); // 出力: "TUE"


// 曜日取得のためのif文
  // if(i === "01"){
  //   console.log("MON");
  // };

  // if(i === "02"){
  //   console.log("TUE");
  // };

  // if(i === "03"){
  //   console.log("WED")
  // };
  // if(i === "04"){
  //   console.log("THU")
  // };
  // if(i === "05"){
  //   console.log("FRI")
  // };
  // if(i === "06"){
  //   console.log("SAT")
  // };
  // if(i === "07"){
  //   console.log("SUN")
  // };
  // console.log(we);



// document.getElementById('pos1')で表示する位置を取得して、innerHTMLで表示（function strClock()のあとにブラウザ上で表示される）

  nowtime = hh + ":" + mm;
  nowtimess = ss;
  let id1 = document.getElementById("pos");
  let id2 = document.getElementById("js-clockPanel--ss");
  id1.innerHTML = nowtime;
  id2.innerHTML = nowtimess;

  dot =  " . ";
  nowyear = ye + dot;
  nowmonth = mo;
  nowdate = dot + da ;

  nowweek = dot + result;
  let id3 = document.getElementById("js-Date__Year");
  let id4 =document.getElementById("js-Date__Month");
  let id5 = document.getElementById("js-Date__Date");
  let id6 = document.getElementById("js-Date__Week");

  id3.innerHTML = nowyear;
  id4.innerHTML = nowmonth;
  id5.innerHTML = nowdate;
  id6.innerHTML = nowweek;
}


function strClock(){
  // 一秒間隔で getTime() 関数を呼び出す
  setInterval("getTime();", 1000);
};
