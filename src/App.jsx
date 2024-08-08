import Item from "./components/Item";
import Form from "./components/Form";
import { useState } from "react";
import AppDrawer from "./components/AppDrawer";
import { Box, Container } from "@mui/material";
import { useApp } from "./ThemedApp";
import Header from "./components/Header";

export default function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello, World!", name: "Alice" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yay, interesting.", name: "Chris" },
  ]);

  const { showForm } = useApp();

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, content, name }]);
  };

  return (
    <Box>
      <Header />
      <AppDrawer />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        {showForm && <Form add={add} />}
        {data.map((item) => {
          return <Item key={item.id} item={item} remove={remove} />;
        })}
      </Container>
    </Box>
  );
}
