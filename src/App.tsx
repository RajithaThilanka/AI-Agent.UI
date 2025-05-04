import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import { store } from "./store";
import { router } from "./routes";
import { theme } from './theme/theme';
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
