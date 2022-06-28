import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HeaderBurgerMenu from "../../components/HeaderBurgerMenu";
import Information from "../Information";
import Posts from "../Posts";
import Authorization from "../Autorization/Autorization";
import Confirmation from "../Confirmation";
import Content from "../Content ";
import {
  AuthSelector,
  getUserNameInfo,
} from "../../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../../components/Empty";
import ThePost from "../ThePost";

const Router = () => {
  //const isLoggedIn = localStorage.getItem("isLoggedIn");
  const isLoggedIn = useSelector(AuthSelector.getLogStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserNameInfo(""));
    }
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<HeaderBurgerMenu />}>
            <Route path={"cards-list"} element={<Posts isPersonal={false} />} />
            <Route path={"cards-list/:id"} element={<Content />} />
            <Route path={"my-cards-list"} element={<Posts isPersonal />} />
            <Route path={"my-cards-list/:id"} element={<Content />} />
            <Route path={"info"} element={<Information />} />
            <Route path={"empty"} element={<Empty />}></Route>
            <Route path={"add-post"} element={<ThePost />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/cards-list" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"auth"} element={<Authorization />} />
          <Route path={"/activate/:uuid/:token"} element={<Confirmation />} />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;

// import React from "react";

// import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
// // import Information from "../Information";
// import HeaderBurgerMenu from '../../components/HeaderBurgerMenu'
// import Information from "../Information";
// import Authorization from "../Autorization";
// import Confirmation from "../Confirmation";
// import CardPage from "../CardPage";




// const Router = () => {
//    // const isLoggedIn = false;
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     return (
//     <BrowserRouter>
//     {isLoggedIn?(
//         <Routes> 
//         <Route path={'/'} element={<HeaderBurgerMenu/>}>
//             <Route path={'/cards-list'} element={<CardPage />}/>
            
//             <Route path={'/info'} element={<Information/>}/>

//         {/* <Route path="*" element={<Navigate to={"/"} replace/>} /> */}
//         </Route>
//         <Route path="*" element={<Navigate to={"/"} replace/>} />
//               </Routes>
//      ) : ( 
//      <Routes> 
//          <Route path ="*" element={<Navigate to={"/auth"} replace/>} />
//          <Route  path={'/auth'} element={<Authorization/>}/>
//          <Route  path={'/confirm'} element={<Confirmation/>}/>
//      </Routes>  
//      )}
//     </BrowserRouter>
// );
// };

// export default Router;