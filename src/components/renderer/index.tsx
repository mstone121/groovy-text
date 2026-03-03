import { useAppState } from "../../context";

import RenderLayer from "./RenderLayer";

import type { Layer } from "../../types";

export default function Renderer() {
	const {
		meta: { backgroundColor },
		layers,
	} = useAppState();

	const layersWithCumulativeThickness = layers
		.map(getCumulativeThickness)
		.reverse();

	return (
		<div
			style={{
				backgroundColor,
				height: "100%",
				minHeight: "70vh",
				position: "relative",
				overflowX: "auto",
				whiteSpace: "nowrap",
			}}
		>
			{layersWithCumulativeThickness.map((layer) => (
				<RenderLayer key={layer.id} layer={layer} />
			))}
		</div>
	);
}

const getCumulativeThickness = (
	layer: Layer,
	index: number,
	layers: Layer[],
) => ({
	...layer,
	cumulativeThickness: layers
		.slice(0, index + 1)
		.reduce((sum, layer) => sum + layer.thickness, 0),
});
