import './App.css';
import Testimony from './components/reference.js'

function App() {
  return (
    <div className="App">
      <div className='App-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony
        name="Emma Bostian"
        country="Sweden"
        position="Software Engineer"
        company="Spotify"
        content="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        picture="Emma"/>
        <Testimony
        name="Sarah Chima"
        country="Nigeria"
        position="Software Engineer"
        company="ChatDesk"
        content="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        picture="Sarah"/>
        <Testimony
        name="Shawn Wang"
        country="Singapore"
        position="Software Engineer"
        company="Amazon"
        content="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        picture="Shawn"/>
      </div>
    </div>
  );
}

export default App;
