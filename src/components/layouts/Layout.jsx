/* eslint-disable react/no-unknown-property */
import { Outlet as Page } from "react-router";
import { Link } from "react-router-dom";
import {
    LocationOnIcon,
    LightbulbIcon,
    HomeIcon,
    EngineeringIcon,
    AcUnitIcon
} from "../shared/materialUI";
import { menu } from "./layout.data";

export const Layout = () => {
    const setIcon = (actionIcon) => {
        if (actionIcon == "home") return <HomeIcon />;
        if (actionIcon == "location") return <LocationOnIcon />;
        if (actionIcon == "light") return <LightbulbIcon />;
        if (actionIcon == "engine") return <EngineeringIcon />;
        if (actionIcon == "air") return <AcUnitIcon />;
    };

    return (
        <div className="flex items-center justify-start w-full h-screen">
            <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="-mx-3 space-y-6 ">
                        <div className="space-y-3 ">
                            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                                Menu
                            </label>

                            {menu.map((options, key) => (
                                <Link
                                    key={key}
                                    className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                    to={options.location}
                                >
                                    {setIcon(options.icon)}
                                    <span className="mx-2 text-sm font-medium text-cyan-500">
                                        {options.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </nav>
                </div>
            </aside>

            <div className="flex items-center justify-center w-full h-full">
                <Page />
            </div>
        </div>
    );
};
