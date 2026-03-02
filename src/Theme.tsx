import type { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: { main: "#000000" },
		secondary: { main: "#ffffff" },
	},
	typography: {
		fontFamily: "sans-serif",
	},
});

export default function Theme({ children }: { children: ReactNode }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
