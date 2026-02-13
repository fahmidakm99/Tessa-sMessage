import { useState } from "react";
import type { ReactNode } from "react";


interface PrivateProps {
  children: ReactNode;
}

const Private: React.FC<PrivateProps> = ({ children }) => {
  const [password, setPassword] = useState<string>("");
  const [access, setAccess] = useState<boolean>(false);

  const checkPassword = () => {
    if (password === "biriyani") setAccess(true);
    else alert("Wrong password 💔");
  };

  if (access) return <>{children}</>;

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Enter Password 💕</h1>
      <h2>what is my favorite food ? </h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Secret code"
        style={{ padding: "10px", borderRadius: "10px" }}
      />
      <br />
      <button
        onClick={checkPassword}
        style={{ marginTop: "10px", padding: "10px 20px", borderRadius: "10px", backgroundColor: "#ff99c8", color: "white", border: "none", cursor: "pointer" }}
      >
        Enter
      </button>
    </div>
  );
};

export default Private;
