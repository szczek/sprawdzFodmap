
import { Route, Routes } from 'react-router-dom';

import Homepage from './Pages/Home.tsx';
import Tables from './Pages/Tables.tsx';
import Info  from './Pages/Info.tsx';


import './App.css';




export default function App() {
    return(
        <>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/tabele' element={<Tables />} />
            <Route path='/info' element={<Info />} />
        </Routes>
        </>
    )
}