import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <PostProvider>
    <BrowserRouter>
        <AppRoutes /> 
    </BrowserRouter>
    </PostProvider>
  );
}

export default App;