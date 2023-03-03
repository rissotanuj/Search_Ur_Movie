// import './App.css';
import Body from './Component/Body';
import Header from './Component/Header';
import { useState } from 'react';

function App() {
  
  const [title, settitle] = useState("Imdb");
  const [click, setclick] = useState(true);
  
  return (
    <div>
      <Header title = {title} settitle = {settitle} setclick = {setclick} />
      <Body title = {title} settitle = {settitle} click = {click}/>    
    </div>
  );

  }

export default App;
