import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {FONT_FAMILY} from './constants';

const subtitle: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontSize: 50,
	textAlign: 'center',
	position: 'absolute',
	bottom: 140,
	width: '100%',
};

export const Copyright: React.FC = () => {
	const frame = useCurrentFrame();
	const start = 420;
	const end = 475;
	const duration = 15;
	const middleOpacity = 0.8;
	const opacity = frame <= start + duration ? interpolate(frame, [start, start + duration], [0, middleOpacity]) : interpolate(frame, [end - duration, end], [middleOpacity, 0], {extrapolateLeft: "clamp", extrapolateRight: "clamp"});
	return (
		<div style={{...subtitle, opacity}}>
			&copy; 2022, Hannes Rüger
		</div>
	);
};
