import { useEffect, useState } from "react";

const DemoUseEffect = () => {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => console.log("get data", { res }))
      .catch((err) => console.log("error", { err }));
  }, [action]);

  return (
    <div>
      <p>You click {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Click me
      </button>

      <button
        onClick={() => {
          setAction("users");
        }}>
        Click data
      </button>

      <button
        onClick={() => {
          setAction("comment");
        }}>
        Click comment
      </button>
    </div>
  );
};

export default DemoUseEffect;
