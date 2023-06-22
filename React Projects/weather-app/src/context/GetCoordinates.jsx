import React, { createContext, useContext, useState } from "react";
//import { usePosition } from 'use-position';

const GetCoordinatesByLocationContext = createContext();

function GetCoordinatesByLocationProvider({ children }) {    

    const [cityName, setCityName] = useState("istanbul");
    const values = {
        cityName,
        setCityName
    }

    return (
        <GetCoordinatesByLocationContext.Provider value={values}>
            {children}
        </GetCoordinatesByLocationContext.Provider>
    )
}

const useCity = () => useContext(GetCoordinatesByLocationContext);
export { GetCoordinatesByLocationProvider, useCity }