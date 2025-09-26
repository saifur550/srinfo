import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Main />
          <Sidebar />
        </div>

        <Footer />
      </div>
    </div>
  );
}
