import {BrowserRouter , Route, Routes } from "react-router-dom"
import  Signup  from '../screens/signup/signup'
import Signin from '../screens/signin/signin'
import { Layout } from "../components"
import { Router } from "./routers"


export function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
      
            <Route index element={<Signin/>}/>
            <Route path={Router.Signup} element={<Signup/>}/>
       
        </Routes>
        </BrowserRouter>
    )
}