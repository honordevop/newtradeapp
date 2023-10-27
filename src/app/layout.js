import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fibomining",
  description: "Best Investment Platform",
};

// particlesJS.load("particles-js", "ParticleArea/particles.json", function () {
//   console.log("callback - particles.js config loaded");
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="//code.jivosite.com/widget/UMdmGOTjVN" async></script>

      <body
        className={`overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 ${inter.className}`}
      >
        <AuthProvider>
          {/* <Navbar /> */}
          <div className="fullwrapper">
            {children}
            <ToastContainer />
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
