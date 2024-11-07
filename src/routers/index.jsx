import {BrowserRouter , Route, Routes } from "react-router-dom"
import  Signup  from '../screens/signup/signup'
import Signin from '../screens/signin/signin'
import Login  from "../screens/login/login"
import Forgetpass from "../screens/forget password/forgetpass"
import Resetpass from "../screens/resetpass/resetpass"
import { Layout } from "../components"
import { Router } from "./routers"


export function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
      
            <Route index element={<Signin/>}/>
            <Route path={Router.Signup} element={<Signup/>}/>
            <Route path={Router.Login} element={<Login/>}/>
            <Route path={Router.Forgetpass} element={<Forgetpass/>}/>
            <Route path={Router.Resetpass} element={<Resetpass/>}/>
       
        </Routes>
        </BrowserRouter>
    )
}