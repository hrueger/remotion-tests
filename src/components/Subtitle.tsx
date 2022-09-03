import {interpolate} from 'remotion'
import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from './constants';

export const Subtitle: React.FC<{
	text: string;
}> = ({text}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const end = 90;
	const subtitle: React.CSSProperties = {
		fontFamily: FONT_FAMILY,
		fontSize: 80,
		textAlign: 'center',
		position: 'absolute',
		top: "70%",
		width: '80%',
		marginLeft: "10%",
		opacity: frame <= 10 ? interpolate(frame, [0, 10], [0, 1], {
			extrapolateRight: "clamp",
		}) : interpolate(frame, [end - 5, end], [1, 0], {
			extrapolateRight: "clamp",
		}),
	};

	return (
		<span style={subtitle}>
			{text}
		</span>
	);
};
