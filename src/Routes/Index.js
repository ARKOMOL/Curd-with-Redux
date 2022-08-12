import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBooks from '../Features/AddBooks';
import BooksView from '../Features/BooksView';
import NavBar from '../Layouts/NavBar';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

const Index = () => {
    return (
        
            <BrowserRouter>
             <NavBar/>
              <Routes>
               <Route path='/' element={<Home/>}></Route>
               <Route path='*' element={<Error/>}> </Route>
               <Route path='show-book' element={<BooksView/>}> </Route>
               <Route path='Add-book' element={<AddBooks/>}> </Route>
               <Route path='Add-book' element={<AddBooks/>}> </Route>

              </Routes>
            </BrowserRouter>

       
    );
};

export default Index;