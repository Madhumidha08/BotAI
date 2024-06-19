import React from 'react'
import { ThemeProvider } from './components/Theme-Provider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Home/HomePage'
import { Header } from './Header/Header'
import { ChatListPage } from './Chat/ChatListPage'

const App = () => {
  return (
    <ThemeProvider  defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
      <div className=' flex items-start dark:bg-[#4a3c59]'>
        <div className='lg:w-[15%] lg:block hidden px-1'>
          <Header height={'h-[100vh]'} />
        </div>
        <div className=' lg:w-[90%] w-full overflow-y-auto'>
          <Routes>
            <Route path='/' element = {<HomePage/>} />
            <Route path='/chat' element = {<ChatListPage/>} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App