import React from 'react';
import Progressbar from '../components/Progressbar';
import CircularProgressbar from '../components/CircularProgressbar';

const ProgressbarPage = props => {
  const onComplete = () => {console.log("Progress completed!") };

  return (
    <React.Fragment>
      <Progressbar onComplete={onComplete} startValue={0}>
      </Progressbar>
      <CircularProgressbar onComplete={onComplete}></CircularProgressbar>
    </React.Fragment>
  );
};

export default ProgressbarPage;