'use client'

import { IconName } from "@/assets/iconsMaps";
import { Icon } from "@/components";

interface Props {
    iconName: IconName;
    titulo?: String ;
    className?: string;
  }

export const Header = ({ iconName,titulo="", className = ""}: Props) => {


    return (
        <>
            <div className={`w-full flex items-center justify-center bg-red ${className}`}>
                <div className="text-6xl"> {/* Ajusta el tamaño del contenedor */}
                    <Icon
                        name={iconName}
                        style={{ color: 'blue' }}
                    />
                </div>
            </div>
            <div>
                <h1 className="pt-2 text-2xl font-bold justify-center text-center items-center">{titulo}</h1>
            </div>
        </>
    );
};