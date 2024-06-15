import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => {
    if (!showResults) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };
  return (
    <div>
      {showResults && (
        <Alert name="hwalert" onClose={() => setShowResults(false)}>
          My Alert
        </Alert>
      )}
      <Button color="danger" onClick={onClick}>
        This button 2
      </Button>
    </div>
  );
}

export default App;
