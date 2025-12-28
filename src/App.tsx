import { Button } from "./components";
import { Input } from "./components";
import { Form } from "./components";
import { FormContainer } from "./components";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gap: "12px",
        gridAutoFlow: "row",
        justifyItems: "start",
        paddingLeft: "50px",
      }}>
      <Button variant="ironhide">Ironhide</Button>
      <Button variant="sideswipe">Sideswipe</Button>
      <Button variant="mirage">Mirage</Button>
      <Button variant="bee">Bee</Button>
      <Button variant="jazz">Jazz</Button>
      <Button variant="ratchet">Ratchet</Button>
      <Button size="scout">Scout Prime</Button>
      <Button variant="bee">Warrior Bee</Button>
      <Button variant="ironhide" size="leader">
        Leader Ironhide
      </Button>
      <Button variant="jazz" fullWidth>
        Full Width Jazz
      </Button>
      <Button variant="prime" fullWidth>
        Full Width Prime
      </Button>
      <Button variant="mirage" size="leader">
        Leader Mirage
      </Button>
      <Button variant="mirage" size="leader" fullWidth loading>
        Loading Mirage
      </Button>
      <Button loading>Loading...</Button>
      <FormContainer variant="card" theme="dark" height="500px">
        <Form spacing="lg" style={{ width: 320 }}>
          <Input label="Email" placeholder="Enter email" fullWidth />
          <Input
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            style={{
              background: "white",
              border: "2px solid black",
              color: "black",
            }}
          />
          <Button variant="mirage" fullWidth>
            Login
          </Button>
          <Button variant="jazz" fullWidth>
            Cancel
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
}

export default App;
