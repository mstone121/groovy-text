import { Stack } from "@mui/material";

import MetadataEditor from "./MetadataEditor";
import LayersList from "./layers/LayersList";

export default function Editor() {
	return (
		<Stack gap={1}>
			<MetadataEditor />
			<LayersList />
		</Stack>
	);
}
