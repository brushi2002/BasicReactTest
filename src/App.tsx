import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Leagues from "./components/Leagues";
import BasicExample from "./components/Navigation/Nav";
import Login from "./components/Authorization/Login";
import PrivateRoute from "./components/PrivateRoute";

import { useState, useEffect } from "react";
import Register from "./components/Register";
import ProtectedRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/Authorization/AuthContext";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [allLeagues, setAllLeagues] = useState([]);
  const [currentForm, setCurrentForm] = useState("login");

  useEffect(() => {
    const fetchLeagues = async () => {
      fetch("http://localhost:4000/api/leagues")
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          setAllLeagues(data);
        });
    };
    fetchLeagues();
  }, []);

  const toggleForm = (formName: string) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      <Router>
        
          <AuthProvider>
          <Routes>
            <Route
              path="/login"
              element={<Login onFormSwitch={toggleForm} />}
            />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<BasicExample loggedIn={true} />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Leagues />} />
            </Route>
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
