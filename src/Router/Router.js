import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mercadinho from '../Pages/Mercadinho';
import Carrinho from '../Pages/Carrinho';
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mercadinho />} />
                <Route path="/cart" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    );
}
