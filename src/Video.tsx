import {Composition} from 'remotion';
import {MainComp} from './MainComp';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
				id="MainComp"
				component={MainComp}
				durationInFrames={250}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
