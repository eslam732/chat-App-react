import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./Components/ChatFeed";
import LoginForm from './Components/loginForm'
import "./App.css";

const App = () => {
  if(!localStorage.getItem('userName')) return <LoginForm/>
  return (
    <ChatEngine
      height="100vh"
      projectID="ee1fbd6a-f5f6-4a38-bfc0-7f06f8f56a52"
      userName={localStorage.getItem('userName')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
    />
  );
};

export default App;
