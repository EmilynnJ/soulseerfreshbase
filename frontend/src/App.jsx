import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Readers from './pages/Readers';
import Live from './pages/Live';
import Shop from './pages/Shop';
import Community from './pages/Community';
import Messages from './pages/Messages';
import Dashboard from './pages/Dashboard';
import HelpCenter from './pages/HelpCenter';
import Policies from './pages/Policies';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import ReaderApplication from './pages/ReaderApplication';
import Logout from './pages/Logout';

const App = () => {
  return (
    <div className="soulseer-app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/readers" element={<Readers />} />
        <Route path="/live" element={<Live />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/community" element={<Community />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply" element={<ReaderApplication />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

// SoulSeer full layout and routes will be in this file
