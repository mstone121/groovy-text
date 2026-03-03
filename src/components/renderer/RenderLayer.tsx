import { useAppState } from "../../context";

import type { Layer } from "../../types";

export default function RenderLayer({
	layer,
}: {
	layer: Layer & { cumulativeThickness: number };
}) {
	const { displayText, fontName } = useAppState();

	return (
		<p
			style={{
				fontFamily: fontName,
				color: layer.color,
				position: "absolute",
				top: "30%",
				width: "100%",
				textAlign: "center",
				WebkitTextStroke: `${layer.cumulativeThickness}px ${layer.color}`,
				fontWeight: 0,
			}}
		>
			{displayText}
		</p>
	);
}
