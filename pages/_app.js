//Defaults
import { useRouter } from "next/router";
//Normalize Style & Layout
import DashboardLayout from "../components/dashboard/Layout";
import UserLayout from "../components/main/Layout";
import "../styles/globals.css";

//Context
import { AuthProvider } from "../context/AuthProvider";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3009/api";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const dashboardRoute = router.pathname.startsWith("/dashboard");

  return (
    <AuthProvider>
      {dashboardRoute ? (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      ) : (
        <UserLayout>
          <Component {...pageProps} />
        </UserLayout>
      )}
    </AuthProvider>
  );
}
