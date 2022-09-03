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

	const start = 100;
	const scale = frame < start ? spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	}) : spring({
		frame: frame - start,
		from: 1,
		to: 0.2,
		durationInFrames: 20,
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
	const fillStyle = frame < start ? {} : {
		transform: `translateY(${interpolate(frame, [start, start + 10], [0, -30], {
			extrapolateRight: "clamp",
		})}%) translateX(${interpolate(frame, [start, start + 10], [0, -35], {
			extrapolateRight: "clamp",
		})}%)`,
	}

	return (
		<>
			<AbsoluteFill style={fillStyle} >
					<Img style={bgStyle} src={staticFile("icon_bg.png")} />
			</AbsoluteFill>
			<AbsoluteFill style={fillStyle} >
					<Img style={fgStyle} src={staticFile("icon_fg.png")} />
			</AbsoluteFill>
		</>
	);
};
