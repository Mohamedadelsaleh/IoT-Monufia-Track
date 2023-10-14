import logo from './logo.svg';
import './App.css';
import GreetOne  from './Components/GreetOne/GreetOne';
import CompWithJSX from './Components/CompWithJSX/CompWithJSX';
import CompWoutJSX from './Components/CompWoutJSX/CompWoutJSX';
import Hello from './Components/ComponentProps/ComponentProps';
import CompPropsClass from './Components/CompPropsClass/CompPropsClass';
import ClassComponentState from './Components/ClassCompState/ClassCompState';
import EventHandling from './Components/EventHandling/EventHandling';
import ConditionalRendering from './Components/ConditionalRendering/ConditionalRendering';
import ListRendering from './Components/ListRendering/ListRendering';

function App() {
  return (
    <div className="App">
      {/* <CompWithJSX />*/}
      {/* <CompWoutJSX /> */}
    <Hello Fname="Mohamed" Sname="Adel">
        <p>This is paragraph</p>
        <button>Close</button>
        </Hello>

{     /* <Hello Fname="Hamed"> 
        <h1>From Hamed Props</h1>
      </Hello>*/}
{    /*  <CompPropsClass name="AbdelAziz" age={28} />
      <CompPropsClass name="Omar" age={26} />
    <CompPropsClass name="Aya" age={24} />*/}

    {/* <ClassComponentState /> */}
  {/*<Hello Fname="Hamed" Sname="Adel" age={66666} />*/}

    {/* <EventHandling /> */}

    {/* <ConditionalRendering /> */}

    <ListRendering />
    </div>
  );
}

export default App;
