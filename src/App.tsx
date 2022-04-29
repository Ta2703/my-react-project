import React from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import PostCard from './components/PostCard';
import Confirmation from './pages/Confirmation';
import Template from './pages/Template';
import CardPage from './pages/CardPage';
import Header from './components/Header';
import BurgerMenu from './components/BurgerMenu';
import { ThemeModeProvider } from './context/ThemeModeProvider';
import {Theme} from './context/themeModeContext';
import Login from './pages/Login';
import Registr from './pages/Registr';
import HeaderPage from './pages/HeaderPage';


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
return (
  <ThemeModeProvider theme={Theme.Light}>
<div className='App'>
  <Login />
</div>
  
  </ThemeModeProvider>
  // </div>


);
};

export default App;