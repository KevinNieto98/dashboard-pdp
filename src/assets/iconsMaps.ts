// src/assets/iconsMap.ts
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io5';
import * as PiIcons from 'react-icons/pi';
import * as GrIcons from "react-icons/gr";
import * as ImIcons from "react-icons/im";

type IconSet = {
    [key: string]: React.ComponentType;
};

const iconsMap = {
    ...FaIcons,
    ...IoIcons,
    ...PiIcons,
    ...GrIcons,
    ...ImIcons,
};

// Exportar el tipo de las claves válidas
export type IconName = keyof typeof iconsMap;

export default iconsMap;