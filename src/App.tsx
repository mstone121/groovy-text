import { type ReactNode, useReducer } from "react";
import { AppBar, Container, CssBaseline } from "@mui/material";

import Theme from "./Theme";

import {
	AppDispatchContext,
	AppStateContext,
	getDefaultState,
} from "./context";

import appReducer from "./reducer";

function App() {
	return (
		<Theme>
			<CssBaseline />
			<AppBar
				position="static"
				sx={{ padding: 2, fontSize: "24px", textAlign: "center" }}
			>
				Groovy Text
			</AppBar>
			<Container maxWidth="md" sx={{ marginTop: 4 }}>
				<AppContext>Groovy.</AppContext>
			</Container>
		</Theme>
	);
}

const AppContext = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(appReducer, getDefaultState());

	return (
		<AppDispatchContext.Provider value={dispatch}>
			<AppStateContext.Provider value={state}>
				{children}
			</AppStateContext.Provider>
		</AppDispatchContext.Provider>
	);
};

export default App;
