import { useEffect, useState } from 'react';
import './progressbar.css';

let intervalId;

const Progressbar = props => {
  const [progress, setProgress] = useState(props.startValue || 0);

  const onComplete = props.onComplete;

  // we don't want progress to be the dependency of useEffect, 'cause that will call setInterval multiple times
  useEffect(() => {
    intervalId = setInterval(() => {
      // Use updater function
      setProgress(progress => {
        // write clearInterval here, progress is not dependency of useEffect.
        if (progress + 1 >= 100) {
          clearInterval(intervalId);
          onComplete();
        }
        return Math.min(progress + 1, 100);
      });

    }, 100);

    // important! cleanup function
    return () => {
      clearInterval(intervalId);
    };

  }, [onComplete]);

  // can also write clearInterval and call onComplete here   
  // if (progress >= 100) {
  //   clearInterval(intervalId);
  // }

  return (
    <div className="App">
      <div className='progressbar'>
        <div className='percentage' style={{ color: progress > 48 ? "white" : "black" }}>
          {progress}%
        </div>

        {/* this is why the progress bar grows */}
        <div
          className='bar'
          // style={{ width: progress + '%' }}  another way
          style={{
            transform: `scaleX(${progress / 100})`,
            transformOrigin: "left"
          }}
        >
        </div>
      </div>
    </div>
  );

}

export default Progressbar;