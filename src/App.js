
import './App.css';
import start from './images/start.png'
import stop from './images/stop.png'
import reset from './images/reset.png'
function App() { 
  let [seconds,minutes,hours]=[0,0,0]
  
  let timer=null;
  const watch=()=>{ 
   
          seconds++;
         if(seconds===60)
         {
               seconds=0;
               minutes++;
           if(minutes===60)
           { minutes=0;
              hours++;}
         } 
          let hou=hours<10? "0"+hours:hours;
          let minu=minutes<10 ? "0"+minutes:minutes;
          let sec=seconds<10? "0"+seconds:seconds;
          document.getElementById("display").innerHTML=hou+":"+ minu+":"+sec;
        
  } 



  const startwatch=()=>{
    if(timer!==null)
     {clearInterval(timer)}
    timer= setInterval(watch,1000);


  }
  const stopwatch=()=>{
    
   clearInterval(timer)
  


  } 
  const resetwatch=()=>{
    
    clearInterval(timer) 
     seconds=0
     minutes=0
     hours=0
     document.getElementById("display").innerHTML="00:00:00";


 }














  return (
    <div className="App"> 
      <section> 
      {(()=>{  let posts=[]
       for(let i=0; i<128; i++)
       { //
       
      posts.push( <span key={i} className='span'></span>)
      
      }
       return posts

       })() 
       }   
          <div className='stopwatch1'>
       <div className='stopwatch'> 
       <h1 id="display" style={{color:"white"}}>00:00:00</h1>
       <div className='buttons' >
       <img src={stop} onClick={stopwatch} alt="noimage"/>
       <img src={start} onClick={startwatch} alt="noimage" />
       <img src={reset} onClick={resetwatch} alt="noimage"/>
      
      </div> 
       </div> 
       </div>
       </section> 
    </div>
  );
}

export default App;
