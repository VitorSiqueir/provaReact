import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Exercicio1 from '../src/exercicio1/exercicio1'

export default function AppRoutes()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/exercicio1' element={<Exercicio1/>}/>
            </Routes>
        </BrowserRouter>
    )
}