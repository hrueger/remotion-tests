import {staticFile} from 'remotion'
import {Img} from 'remotion'
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Logo: React.FC = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const development = spring({
		config: {
			damping: 100,
			mass: 0.5,
		},
		fps: videoConfig.fps,
		frame,
	});
	const scale = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	});

	const imageStyle = {
		display: "block",
		margin: "auto",
		width: "100%"
	};

	const bgStyle = {
		...imageStyle,
		transform: `scale(${scale})`,
		transformOrigin: "center",
	};
	const fgStyle = {
		...imageStyle,
		transform: `scale(${scale})`,
		transformOrigin: "center",
	};

	return (
		<>
			<AbsoluteFill style={{ }} >
					<Img style={bgStyle} src={staticFile("icon_bg.png")} />
			</AbsoluteFill>
			<AbsoluteFill style={{ }} >
					<Img style={fgStyle} src={staticFile("icon_fg.png")} />
			</AbsoluteFill>
		</>
	);
};
