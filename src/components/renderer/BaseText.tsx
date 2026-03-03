import { useAppState } from "../../context";

export const BaseText = ({ style }: { style?: React.CSSProperties }) => {
	const {
		meta: { displayText, baseColor, fontName, fontSize, fontSpacing },
	} = useAppState();

	return (
		<p
			style={{
				fontFamily: fontName,
				fontSize: `${fontSize}px`,
				fontStyle: "italic",
				letterSpacing: `${fontSpacing}px`,
				position: "absolute",
				top: "30%",
				width: "100%",
				textAlign: "center",
				color: baseColor,
				fontWeight: 0,
				...style,
			}}
		>
			{displayText}
		</p>
	);
};
