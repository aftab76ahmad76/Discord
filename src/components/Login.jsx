// import { Button } from "@material-ui/core";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "./features/userSlice";
// const Login = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const signIn = () => {
//     dispatch(
//       login({
//         name,
//         email,
//         password,
//       })
//     );
//   };
//   return (
//     <div className="login">
//       <div className="login-logo">
//         <img
//           src="https://i1.wp.com/blog.travian.com/wp-content/uploads/2020/05/discord.png?fit=980%2C504&ssl=1"
//           alt="not-found"
//         />
//       </div>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         placeholder="Email"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         placeholder="Passowrd"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button onClick={signIn}>{"Sign In"}</Button>
//     </div>
//   );
// };

// export default Login;
