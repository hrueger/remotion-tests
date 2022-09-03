import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from './constants';

const listStyle: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontSize: 50,
	position: 'absolute',
	top: 250,
	width: '100%',
	left: 190,
};

export const Features: React.FC<{
	features: string[];
}> = ({features}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<ul style={listStyle}>
			{features.map((t, i) => {
				const delay = i * 32;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
				});

				return (
					<li
						key={t}
						style={{
							transform: `scale(${scale})`,
							lineHeight: "3em",
						}}
					>
						{t}
					</li>
				);
			})}
		</ul>
	);
};
