import './App.css';
import Progressbar from './components/Progressbar';


export default function App() {
  return <Progressbar onComplete={() => { }} startValue={10}>
  </Progressbar>;
}

