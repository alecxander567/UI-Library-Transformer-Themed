import { Button } from "./components";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
        gridAutoFlow: "row",
        justifyItems: "start", 
      }}>
      <Button label="Prime" />
      <Button label="Ironhide" variant="ironhide" />
      <Button label="Sideswipe" variant="sideswipe" />
      <Button label="Mirage" variant="mirage" />
      <Button label="Bee" variant="bee" />
      <Button label="Jazz" variant="jazz" />
      <Button label="Ratchet" variant="ratchet" />
      <Button label="Scout Prime" size="scout" />
      <Button label="Warrior Bee" variant="bee" />
      <Button label="Leader Ironhide" variant="ironhide" size="leader" />
      <Button label="Full Width Jazz" variant="jazz" fullWidth />
      <Button label="Full Width Prime" variant="prime" fullWidth />
      <Button label="Loading..." loading />
    </div>
  );
}

export default App;
