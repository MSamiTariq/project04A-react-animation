import React, {useState, useEffect} from 'react';
import './App.css';
import spiderman from './images/spiderman.gif';
import useWebAnimations from '@wellyshen/use-web-animations';



function App() {
  const { ref, getAnimation, animate } = useWebAnimations({
    keyframes: [
      { transform: 'translate(-100%,0)' },
      { transform: 'translate(520%,0)' }
    ],
    timing: {
      duration: 5000,
      playbackRate: 1,
      iterations: Infinity,
      easing: "ease-in-out",
      direction: 'reverse'
    }
  });

  const play = () => {
    getAnimation().play();
  }
  const pause = () => {
    getAnimation().pause();
  };
  const reverse = () => {
    getAnimation().reverse();
  };
  const goSlow = () => {
    getAnimation().updatePlaybackRate(getAnimation().playbackRate * 0.9);
  };

  const goFaster = () => {
    const anim = getAnimation();
    anim.updatePlaybackRate(anim.playbackRate * 1.1);
  };
  const [playBackRate, setPlayBackRate] = useState(1);

  const updatePlayBackRate = (val) => { setPlayBackRate(val) }

  useEffect(() => {
    document.getElementById("fast").addEventListener("click", (e) => {
        updatePlayBackRate(getAnimation().playbackRate);
    });
    document.getElementById("slow").addEventListener("click", (e) => {
        updatePlayBackRate(getAnimation().playbackRate);
    });
}, [animate]);

    function mouseEnter(e) {
      e.target.style.background = '#b07563';
      e.target.style.color = 'white';
    }

    function mouseLeave(e) {
      e.target.style.background = 'white';
      e.target.style.color = 'black';
    }

  return (
    <div className="App">
      <img src={spiderman} className="img" ref={ref} alt="cartoon" />
      <div className = "but">
        <button className = "button" onClick = {play}  onMouseEnter={(e) => mouseEnter(e)}
        onMouseLeave={(e) => mouseLeave(e)}>Play</button>
        <button className = "button" onClick = {pause}  onMouseEnter={(e) => mouseEnter(e)}
        onMouseLeave={(e) => mouseLeave(e)}>Pause</button>
        <button className = "button" id = "fast" onClick = {goFaster}  onMouseEnter={(e) => mouseEnter(e)}
        onMouseLeave={(e) => mouseLeave(e)}>Speed Up</button>
        <button className = "button" id = "slow" onClick = {goSlow}  onMouseEnter={(e) => mouseEnter(e)}
        onMouseLeave={(e) => mouseLeave(e)}>Speed Down</button>
        <button className = "button" onClick = {reverse}  onMouseEnter={(e) => mouseEnter(e)}
        onMouseLeave={(e) => mouseLeave(e)}>Reverse</button>
      </div>
      <div className = "meter_div">
        <label htmlFor="meter" ><b className = "text">SPEED: </b></label>
        <meter className = "meter" id="meter" min="0" max="10" low="0" high="6" optimum="2" value={playBackRate}>
          at 50/100
        </meter>
      </div>
    </div>
  );
}

export default App;
