import { useToggle } from './useToggle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { Cat } from './cat';

function App() {
  const [isVisible, toggle] = useToggle(false);
  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false,
      }
    }
  });

  

  return (
    <>
    <QueryClientProvider client={client}>
      <button onClick={toggle}>
        {isVisible ? "hide" : "show"}
      </button>

      {isVisible && <h1>click on button to hide this</h1>}

      <p><Cat /></p>
    </QueryClientProvider>
      
    </>
  )
}

export default App
