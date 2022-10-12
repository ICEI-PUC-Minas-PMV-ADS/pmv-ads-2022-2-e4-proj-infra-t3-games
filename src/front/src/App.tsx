import { Signin } from "./pages/signin/Signin";
import { AppRoutes } from "./routes";
import { AuthProvider } from "./shared/contexts/AuthContext";


export const App = () => {
  return (
    <AuthProvider>

        <AppRoutes />

    </AuthProvider>
  );
}


