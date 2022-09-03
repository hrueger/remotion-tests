import {Easing, spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { Features } from './components/Features';
import {Logo} from './components/Logo';
import {Footer} from './components/Footer';
import {Title} from './components/Title';
import { Subtitle } from './components/Subtitle';
import { Copyright } from './components/Copyright';

export const MainComp: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -200]
	);

	// Fade out the animation at the end
	const fadeOutEarly = interpolate(
		frame,
		[durationInFrames - 110, durationInFrames - 95],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const fadeOutEnd = interpolate(
		frame,
		[durationInFrames - 35, durationInFrames - 25],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const moveUp = interpolate(
		frame,
		[durationInFrames - 95, durationInFrames - 70],
		[0, -750],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.inOut(Easing.quad),
		}
	);

	const transformTexts = interpolate(
		frame,
		[25, 45],
		[90, -30],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
			easing: Easing.out(Easing.quad),
		},
	);

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill>
				<AbsoluteFill style={{ transform: `translateY(${logoTranslation}px)`, opacity: fadeOutEarly }}>
					<Sequence from={10}>
						<Logo/>
					</Sequence>
				</AbsoluteFill>
				<Sequence from={25} style={{ opacity: fadeOutEarly }}>
					<AbsoluteFill style={{ transform: `translateY(${transformTexts}px)` }}>
						<Title titleText="reWarehouse" />
						<Subtitle text="An open-source warehouse / inventory system" />
					</AbsoluteFill>
				</Sequence>
				<Sequence from={125} style={{opacity: fadeOutEnd, transform: `translateY(${moveUp}px)`}}>
					<Footer />
				</Sequence>
				<Copyright />
			</AbsoluteFill>
			<AbsoluteFill style={{opacity: fadeOutEarly}}>
				<Sequence from={125}>
					<Features features={["Open Source", "Simple to Use", "No hardware necessary", "Print Labels", "User-friendly Web UI", "Unlimited Products", "Unlimited Locations / Venues", "Export Tracking Sheets"]} />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
