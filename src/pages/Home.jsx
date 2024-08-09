import { useState } from "react";
import { Box } from "@mui/material";

import Form from "../components/Form";
import Item from "../components/Item";

import { useApp } from "../ThemedApp";

export default function Home() {
  const { showForm, setGlobalMsg } = useApp();
  const [data, setData] = useState([
    { id: 3, content: "Make it happen.", name: "Akali" },
    { id: 2, content: "Nothing is impossible", name: "ZX" },
    {
      id: 1,
      content: "A problem is a chance for you to do the best",
      name: "Aria",
    },
  ]);

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
    setGlobalMsg("An item deleted");
  };

  const add = (content, name) => {
    const id = data[0].id + 1;
    setData([{ id, content, name }, ...data]);
    setGlobalMsg("An item added");
  };

  return (
    <Box>
      {showForm && <Form add={add} />}
      {data.map((item) => {
        return <Item key={item.key} item={item} remove={remove} />;
      })}
    </Box>
  );
}
