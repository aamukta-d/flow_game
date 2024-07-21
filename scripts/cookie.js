let points_store = new Array(8).fill(0)

function get_points(){
  points_store = []
    for(let i = 0; i<8; i++){
        points_store.push(getCookie(i))
    }
}

function store_points(points){
  console.log(points)
    get_points()
    if (points_store.length < 8){
        setCookie(points_store.length,points)
    }
    else{
        points_store.shift()
        points_store[7] = points
        points_store.map((point, index) => {
            setCookie(index, point)
        })
        setCookie(7, points)
    }
    console.log(document.cookie)
    console.log(points_store)
}

function setCookie(index, cvalue) {
    const cname = (index).toString()
    const exdays = 180
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(index) {
    let name = (index).toString() + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return parseInt(c.substring(name.length, c.length));
      }
    }
    return 0;
  }

export{store_points, points_store}