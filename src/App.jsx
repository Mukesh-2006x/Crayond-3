export default App
import { ThemeProvider } from '@emotion/react';
import './App.css'
import { AppRouter } from './routers'
import  Light  from './theams/lighttheam'

import Signup from './screens/signup/signup';





function App() {
  return (
   
   <AppRouter/>
  
  );
}
