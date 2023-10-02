import { useState } from "react";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValidUsername = (username: string) => {
    const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return usernameRegex.test(username);
  };

  const isValidPassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?.&]{12,}$/;
    return passwordRegex.test(password);
  };

  return (
    <>
      <h2>Form Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      {username &&
        (!isValidUsername(username) ? (
          <p style={{ color: "red" }}>Invalid Username Ex:levanan@gmail.com</p>
        ) : (
          <p>{username}</p>
        ))}

      <br />

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {password &&
        (!isValidPassword(password) ? (
          <p style={{ color: "red" }}>Invalid Password</p>
        ) : (
          <p>{password}</p>
        ))}
    </>
  );
};

export default FormLogin;
