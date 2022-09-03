import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from './constants';

const subtitle: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontSize: 50,
	textAlign: 'center',
	position: 'absolute',
	bottom: 140,
	width: '100%',
};

export const Footer: React.FC = () => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const middleOpacity = 0.5; 
	const opacity = frame <= 30 ? interpolate(frame, [0, 30], [0, middleOpacity]) : interpolate(frame, [durationInFrames - 95, durationInFrames - 70], [middleOpacity, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"});
	return (
		<div style={{...subtitle, opacity}}>
			Download &amp; Info:<br /><a href="#">https://github.com/hrueger/reWarehouse</a>
		</div>
	);
};
