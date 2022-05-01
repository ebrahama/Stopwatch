const tds = document.getElementById("tds");

let mil = document.getElementById("mil");

const st = document.getElementById("st");
const pe = document.getElementById("pe");
const rt = document.getElementById("rt");


let hr = 0 ;
let min = 0 ;
let sec = 0 ;
let mel = 0 ;

let startt = 0;
let pause = true;

let elap = 0;

let int;


st.addEventListener("click" , () =>{ 
    if(pause){
        pause = false;
        startt = Date.now() - elap;
        int = setInterval( updat , 10);

    }
});
pe.addEventListener("click" , () =>{ 
  
    if(!pause){
        pause = true;
        elap = Date.now() - startt;
        clearInterval(int);        
    }

});
rt.addEventListener("click" , () =>{ 
  
    clearInterval(int);        

      hr = 0 ;
      min = 0 ;
      sec = 0 ;
      mel = 0 ;

     startt = 0;
     pause = true;

      elap = 0;

     tds.textContent = "00:00:00:00"

});
  
  
function updat(){
  
    elap = Date.now() - startt ;
 
    mel = Math.floor( (elap / 11) % 60);
    sec = Math.floor( (elap / 1000 ) % 60 );
    min = Math.floor( (elap / (1000 * 60) ) % 60 );
    hr  = Math.floor( (elap / (1000 * 60 * 60) ) % 60 );

     mel = ad(mel);
     sec = ad(sec);
     min = ad(min);
     hr = ad(hr);

   tds.textContent = (hr + ":" + min + ":" + sec + ":" + mel );
   
    function ad(nu){
        return (("0") + nu).length > 2 ? nu : "0" + nu;
    }
}