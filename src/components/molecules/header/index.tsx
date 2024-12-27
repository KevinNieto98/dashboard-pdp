'use client'

import { IconName } from "@/assets/iconsMaps";
import { Icon } from "@/components";

interface Props {
    iconName: IconName;
    titulo: String;
  }

export const Header = ({ iconName,titulo }: Props) => {


    return (
        <>
            <div className="w-full flex items-center justify-center bg-red">
                <div className="text-6xl"> {/* Ajusta el tamaño del contenedor */}
                    <Icon
                        name={iconName}
                        style={{ color: 'blue' }}
                    />
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold justify-center text-center items-center">{titulo}</h1>
            </div>
        </>
    );
};