
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VideoSession from './pages/VideoSession';
import ChatSession from './pages/ChatSession';
import VoiceSession from './pages/VoiceSession';
import ClientDashboard from './pages/ClientDashboard';
import ReaderDashboard from './pages/ReaderDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/client-dashboard" element={<ClientDashboard />} />
      <Route path="/reader-dashboard" element={<ReaderDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/video-session/:sessionId" element={<VideoSession />} />
      <Route path="/chat-session/:sessionId" element={<ChatSession />} />
      <Route path="/voice-session/:sessionId" element={<VoiceSession />} />
    </Routes>
  );
};

export default App;
