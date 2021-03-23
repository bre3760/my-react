import logo from './logo.svg';
import './App.css';
// CSS
import './appStyles.css'
import styles from './appStyles.module.css'
import { Fragment } from 'react'
// Components
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterTree from './components/HookCounterTree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import DataFetching from './components/DataFetching';
import JsonParse from './components/JsonParse';
import Heatmap from './components/plots/Heatmap';
import SimpleFor from './components/SimpleFor';




function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      {/* <Greet></Greet>
      <Welcome></Welcome>
      <Hello></Hello> */}

      {/* now trying props  */}
      {/* <Greet name="Bruce" heroName="Batman">
       <p>This is my batmobile</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
       <button>Action</button>
      </Greet> */}

      {/* props with class components */}
      {/* <Welcome name="Bruce" heroName="Batman"></Welcome> */}

      {/* on lesson 10 state vs props  */}
      {/* <Message></Message> */}

      {/* setState lesson 11 */}
      {/* <Counter></Counter> */}

     {/* lesson 12 destructuring props and state */}
     {/* props destructuring in functional component*/}
      {/* <Greet name="Bruce" heroName="Batman"></Greet> */}

      {/* props destructuring in class component*/}
      {/* <Welcome name="Bruce" heroName="Batman"></Welcome> */}


      {/* lesson 13 event handlers */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}

      {/* lesson 14 event binding */}
      {/* <EventBind></EventBind> */}


      {/* methods as props */}
      {/* <ParentComponent></ParentComponent> */}

      {/* lesson 16 conditional rendering */}
      {/* <UserGreeting></UserGreeting> */}

      {/* lesson 17 list rendering */}
      {/* <NameList></NameList> */}

      {/* lesson 20 style */}
      {/* <StyleSheet primary={true}></StyleSheet> */}

      {/* <Inline></Inline> */}
      {/* this can be used in childres, but can cause conflicts */}
      {/* <h1 className='error'>Error</h1>  */}
      {/* this cannot be used in the children */}
      {/* <h1 className={styles.success}>Success</h1> */}

      {/* Lesson 21 Forms */}
      {/* <Form></Form> */}

      {/* Lesson 23 Components */}
      {/* <LifeCycleA></LifeCycleA> */}

      {/* Lesson 25 Fragments */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}

      {/* Lesson 26 Pure Component */}
      {/* <PureComp></PureComp> */}
      {/* <ParentComp></ParentComp> */}

      {/* Lesson 28 refs */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <FocusInput></FocusInput> */}

      {/* Lesson 33 Higher Order Components*/}
      {/* <ClickCounter name='Brendan'></ClickCounter>
      <HoverCounter></HoverCounter> */}


      {/* Lesson 36 Render Props */}
      {/* <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo></HoverCounterTwo> */}
      {/* <User name={()=>'Brendan'}></User> */}
      {/* <User name={(isLoggedIn)=> isLoggedIn ? 'Brendan'
       : 'Guest'}></User> */}
       {/* <User render={(isLoggedIn)=> isLoggedIn ? 'Brendan'
       : 'Guest'}></User> */}
       {/* render is the convention name for the prop */}
      {/* <CounterTwo render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>}></CounterTwo>
      <CounterTwo render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>}></CounterTwo> */}


      {/* Context */}
      {/* <UserProvider value='Brendan'>
        <ComponentC>

        </ComponentC>
      </UserProvider>
       */}

       {/* <PostList></PostList> */}

       {/* Lesson 43 POST request */}
       {/* <PostForm></PostForm> */}

       {/* Hooks Lesson 2 */}
       {/* <HookCounter></HookCounter> */}
       {/* <HookCounterTwo></HookCounterTwo> */}

       {/* Hooks Lesson 4, useState with objects */}
       {/* <HookCounterTree></HookCounterTree> */}

       {/* Lesson 5 Hooks with array */}
       {/* <HookCounterFour></HookCounterFour> */}

       {/* Lesson 7 useEffect after render */}
       {/* <HookCounterOne></HookCounterOne> */}
       {/* <DataFetching></DataFetching> */}

       <JsonParse></JsonParse>
       {/* <SimpleFor></SimpleFor> */}
       {/* <Heatmap></Heatmap> */}
    </div>
  );
}

export default App;
