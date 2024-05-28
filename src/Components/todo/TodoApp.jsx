import { useState } from 'react'
import './TodoApp.css'
import LogoutComponent  from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomComponent'
import LoginComponent from './LoginComponent'
import AuthProvider from '../security/AuthContext'
import { BrowserRouter,Route, Routes} from 'react-router-dom'

export default function TodoApp() {
    return (
        <div className = "TodoApp">
            
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                <Routes>
                <Route path="/" element={ <LoginComponent/> }></Route>
                    <Route path="/Login" element={ <LoginComponent/> }></Route>
                    <Route path="/welcome/:username" element={ <WelcomeComponent/> }></Route>
                    <Route path ="/todos" element={<ListTodosComponent/>}></Route>
                    <Route path ="/logout" element={<LogoutComponent/>}></Route>
                    <Route path ="*" element={<ErrorComponent/>}></Route>
                </Routes>
                
                
                </BrowserRouter>

            </AuthProvider>

            

        </div>
    )
}













