// src/components/atoms/Icon.tsx
import iconsMap, { IconName } from '@/assets/iconsMaps';
import React from 'react';

interface IconProps {
	name: IconName;
	style?: React.CSSProperties;
	className?: string;
	size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, style, className, size, ...rest }) => {
	const IconComponent = iconsMap[name];
	if (!IconComponent) return null;
	return <IconComponent style={style} className={className} size={size} {...rest} />;
};