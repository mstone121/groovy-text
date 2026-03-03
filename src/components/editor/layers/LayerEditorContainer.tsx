import { IconButton, Stack, Box } from "@mui/material";

import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function LayerEditorContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Box
			style={{
				padding: 16,
				border: "1px solid #aaa",
				borderRadius: 4,
			}}
		>
			<Stack direction="row" alignItems="center" gap={1}>
				<IconButton edge="start">
					<DragIndicatorIcon />
				</IconButton>

				{children}
			</Stack>
		</Box>
	);
}
