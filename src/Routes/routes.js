import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";

  export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<div>  <Header></Header> <Topics></Topics></div>
            },
            {
                path:'blog',
                
                element:<div>  <Header></Header> <Blog></Blog></div>
            },
            {
                path:'stat',
                loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Statistics></Statistics>
            },
          
        ],
        
    },
    {
        path:'*',
        element: <div className="d-flex justify-content-center 
        m-5 p-5 "><h3 className="w-50 text-danger">Error: 404...The URL you have used is not valid...</h3></div>
    }
   
  ])
