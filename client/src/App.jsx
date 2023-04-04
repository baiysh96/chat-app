import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from '@/components/Chat/chat.jsx'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
