import { useAppState } from "../../../context";

import SortableItems from "../../common/SortableItems";

import LayersContainer from "./LayersContainer";
import LayerEditor from "./LayerEditor";
import AddLayerButton from "./AddLayerButton";

export default function LayersList() {
	const { layers } = useAppState();

	return (
		<LayersContainer actions={<AddLayerButton />}>
			<SortableItems
				ids={layers.map((layer) => layer.id)}
				onMoveLayer={() => {}}
				renderItem={(id) => <LayerEditor id={id as string} />}
			/>
		</LayersContainer>
	);
}
