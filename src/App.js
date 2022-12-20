import Introduction from "./components/introduction.js";
import Profile from "./components/profile";

function App() {
  return (
    <div>
      <Profile />
      <Introduction name="font-end" />
      <Introduction name="back-end" />
    </div>
  );
}

export default App;
