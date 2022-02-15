import logo from "./assets/logo.svg";
import workation from "./assets/beach-work.jpg";
import "./App.css";
import Home from "./pages/home";

function App() {
  return (
    // <div className="py-4 px-4 max-w-md mx-auto">
    //   <img src={logo} className="h-10" alt="Workation logo" />
    //   <img
    //     className="mt-4 rounded-xl shadow-lg"
    //     src={workation}
    //     alt="woman on beach"
    //   />
    //   <h1 className="text-4xl font-bold mt-4 text-gray-900">
    //     You can work from anywhere{" "}
    //     <span className="text-indigo-600">take advantage of it.</span>
    //   </h1>
    //   <p className="mt-2 text-gray-600">
    //     {" "}
    //     Workcation helps you find work-friendly rentals in beautiful locations
    //     so you can enjoy some nice weather even when you're not on vacation.
    //   </p>
    //   <div className="mt-4">
    //     <a href="#" className="bg-indigo-500 text-white p-3 rounded-lg inline-block font-semibold uppercase shadow-lg">Book yours escape</a>
    //   </div>
    // </div>

    <Home />
  );
}

export default App;
