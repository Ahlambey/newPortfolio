import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./components/lottie/96189-looping-loading-animation.json";
import Home from "./components/Home";

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const lottieStyle = {
    width: "250px",
  };

  useEffect(() => {
    const onPageLoad = () => {
      setHasLoaded(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className="App">
      {hasLoaded ? (
        <Home/>
      ) : (
        <div className="loading">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            style={lottieStyle}
          ></Lottie>
        </div>
      )}
    </div>
  );
}

export default App;
