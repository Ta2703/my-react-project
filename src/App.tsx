import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Input from './components/Input';
import Button from './components/Button';
import PostCard from './components/PostCard';
import Confirmation from './pages/Confirmation';
import Template from './pages/Template';
import CardPage from './pages/CardPage';
import Header from './components/Header';
import BurgerMenu from './components/HeaderBurgerMenu/BurgerMenu';
import { ThemeModeProvider } from './context/ThemeModeProvider';
import {Theme} from './context/themeModeContext';
import Login from './pages/Autorization/Login';
import Registr from './pages/Autorization/Registr';
import HeaderPage from './pages/Autorization/HeaderPage';
import Router from './pages/Router';
import classNames from 'classnames';
import {useState} from 'react';
import Autorization from './pages/Autorization';



// const MOCKDATA = [
//     {
//       id: 0,
//       image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
//       text: "Lorem ipsum dolor sit amet consectetur.",
//       date: "2022-04-21",
//       lesson_num: 0,
//       title: "What is Lorem Ipsum",
//       author: 0,
//     },
//     {
//       id: 1,
//       image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
//       text: "Lorem ipsum dolor sit amet consectetur.",
//       date: "2022-04-21",
//       lesson_num: 0,
//       title: "What is Lorem Ipsum",
//       author: 0,
//     },
//     {
//       id: 2,
//       image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
//       text: "Lorem ipsum dolor sit amet consectetur.",
//       date: "2022-04-21",
//       lesson_num: 0,
//       title: "What is Lorem Ipsum",
//       author: 0,
//     },
//     {
//       id: 3,
//       image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ,
//       text: "Lorem ipsum dolor sit amet consectetur.",
//       date: "2022-04-21",
//       lesson_num: 0,
//       title: "What is Lorem Ipsum",
//       author: 0,
//     },

// ];
// const App = () => {
//   const [theme, setTheme] = useState(Theme.Light);

//   const on
// }

function App() {
  const [theme, setTheme] = useState (Theme.Light)
  // const isLightTheme = theme ===Theme.Light;
  const onChangeTheme = (value: Theme) => {
  setTheme(value);
  };
    return (
      <Provider store={store}>
  <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
   <div className='App'>
   <Router />
  </div>
  </ThemeModeProvider>
  </Provider>
    )}
 

export default App;