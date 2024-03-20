// "use client";
// import * as React from "react";

// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import AppAppBar from "../components/AppAppBar";
// import Hero from "../components/Hero";
// import Highlights from "./Highlights";

// import getLPTheme from "../getLPTheme";

// export default function AppWrapper() {
//   const [mode, setMode] = React.useState("light");
//   const [showCustomTheme, setShowCustomTheme] = React.useState(true);
//   const LPtheme = createTheme(getLPTheme(mode));
//   const defaultTheme = createTheme({ palette: { mode } });
//   const toggleColorMode = () => {
//     setMode((prev) => (prev === "dark" ? "light" : "dark"));
//   };
//   return (
//     <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
//       <CssBaseline />
//       <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

//       <Box sx={{ bgcolor: "background.default" }}>
//         <Divider />
//         <Highlights />
//       </Box>
//     </ThemeProvider>
//   );
// }
