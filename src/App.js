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
import FormHandling from './Components/FormHandling/FormHandling';
import FragmantComp from './Components/FragmantComp/FragmantComp';
import RefsComp from './Components/RefsComp/RefsComp';
import ComponentC from './Components/Context/ComponentC/ComponentC';
import { UserProvider } from './Components/Context/contextData';
import GetPosts from './Components/GetPost/GetPosts';
import PostnumPosts from './Components/PostnumPosts/PostnumPosts';
function App() {
  return (
    <div className="App">
      {/* <CompWithJSX />*/}
      {/* <CompWoutJSX /> */}

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

    { /* <ListRendering /> */}

    { /* <FormHandling /> */}

    {/* <FragmantComp /> */}

    {/* <RefsComp /> */}
{   /* <UserProvider value="Hello IOT this is Iot Meeting" >
      <ComponentC  />
    </UserProvider>*/}
   {/* <GetPosts /> */}
    <PostnumPosts />
  </div> 
  
  );
}

export default App;
