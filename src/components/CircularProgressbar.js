import React from 'react';
import { useEffect, useState } from 'react';
import './CircularProgressbar.css';

let intervalId;

const CircularProgressbar = props => {
  const [progress, setProgress] = useState(props.startValue || 0);

  const onComplete = props.onComplete;

  useEffect(() => {
    intervalId = setInterval(() => {
      setProgress(progress => {
        if (progress + 1 > 100) {
          clearInterval(intervalId);
          if(onComplete){
            onComplete();
          }
        }
        return Math.min(progress + 1, 100);
      });

    }, 100);

    return () => {
      clearInterval(intervalId);
    };

  }, [onComplete]);

  // can also write clearInterval and call onComplete here   
  // if (progress >= 100) {
  //   clearInterval(intervalId);
  // }

  return (
    <React.Fragment>
      <div className='circular progressbar' style={{background: `conic-gradient(rgb(112, 214, 129) ${progress/100*360}deg, rgb(244, 244, 244) ${progress/100*360}deg)`
}}>
        <div className='percentage'>
          {progress}%
        </div>

        {/* the inner circle */}
        <div></div>
      </div>
    </React.Fragment>
  );

}

export default CircularProgressbar;