import { Box, Stack, Typography } from "@mui/material";

export default function LayersContainer({
	children,
	actions,
}: {
	children: React.ReactNode;
	actions?: React.ReactNode;
}) {
	return (
		<Box style={{ padding: 8, margin: "auto" }}>
			<Typography variant="h6" textAlign="center">
				Layers
			</Typography>

			<Stack gap={1} mb={1}>
				{children}
			</Stack>

			{actions ?? null}
		</Box>
	);
}
