import "./App.css";
import Typography from "./components/UI/atom/typography/Typography";
import Button from "./components/UI/atom/button/Button";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <Typography
        tag="h1"
        text="Welcome to coding world"
        classes="title text-center"
        style={{ fontSize: "60px" }}
        role="heading"
        aria-label="Welcome to Web Diary"
        aria-labelledBy="title"
      >
        <span>&nbsp; Have fun!!!</span>
      </Typography>
    
      <Button
        type="button"
        classes='custom-button'
        disabled
        autoFocus
        click={() => alert("Button clicked")}
      >
        Subscribe
        <img src={viteLogo} alt="logo" className="w-4 h-4" />
      </Button>
    </>
  );
}

export default App;
