import {Easing, interpolate} from 'remotion'
import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {FONT_FAMILY} from './constants';

const title: React.CSSProperties = {
	fontFamily: FONT_FAMILY,
	fontWeight: 'bold',
	fontSize: 100,
	textAlign: 'center',
	position: 'absolute',
	top: "57%",
	width: '100%',
};

export const Title: React.FC<{
	titleText: string;
}> = ({titleText}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	let transform = "";
	let additionalStyling = {};
	const start = 90;
	if (frame > start) {
		transform = `translateY(${interpolate(frame, [start, start + 5], [0, -900], {
			extrapolateRight: "clamp",
		})}%) translateX(${interpolate(frame, [start, start + 5], [0, 10], {
			extrapolateRight: "clamp",
		})}%)`;

		additionalStyling = {
			color: `hsl(199, 70%, ${interpolate(frame, [start, start + 5], [0, 40], {
				extrapolateRight: "clamp",
			})}%)`,
		};
	};

	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: "clamp",
	});

	return (
		<><h1
			style={{
				...title,
				transform,
				opacity,
				...additionalStyling,
			}}
		>
			{titleText}
		</h1>
			<div style={{
				height: "5px",
				width: `${interpolate(frame, [95, 110], [0, 60], {
					extrapolateRight: "clamp",
					easing: Easing.inOut(Easing.exp)
				})}%`,
				display: "block",
				backgroundColor: "#1f80ad",
				top: "240px",
				left: "30%",
				position: "absolute",
			}} />
		</>
	);
};
