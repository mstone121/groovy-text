import type { Layer } from "../../types";
import { BaseText } from "./BaseText";

export default function RenderLayer({
	layer,
}: {
	layer: Layer & { cumulativeThickness: number };
}) {
	return (
		<BaseText
			style={{
				color: layer.color,
				WebkitTextStroke: `${layer.cumulativeThickness}px ${layer.color}`,
			}}
		/>
	);
}
