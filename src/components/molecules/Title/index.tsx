'use client'

import { IconName } from "@/assets/iconsMaps";
import { Icon } from "@/components";

interface Props {
    iconName: IconName;
    titulo?: String ;
    className?: string;
  }

export const Title = ({ iconName,titulo="", className = ""}: Props) => {


    return (
        <>
            <div className="flex  self-start items-center p-3 w-full dark:text-slate-100 shadow-md bg-blue-200 border-collapse border-b border-gray-300">
				<div className="p-2 mx-2 bg-primary text-primary-foreground dark:bg-secondary dark:text-white rounded-md">
					<Icon 
                        size={36}
                        name={iconName} />
				</div>
				<div className="px-2 flex flex-col">
					<h1 className="text-2xl font-bold">{titulo}</h1>
				</div>
			</div>
        </>
    );
};