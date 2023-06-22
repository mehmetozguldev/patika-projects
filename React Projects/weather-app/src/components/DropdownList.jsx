import React from 'react'
import { useCity } from '../context/GetCoordinates';

function DropdownList() {
    const { cityName, setCityName } = useCity();

    const handleChange = (event) => {
        setCityName(event.target.value)
    }

    return (
        <form>
            <select className='w-50 py-1 bg-secondary text-light fs-4 text-center' value={cityName} onChange={handleChange}>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
            </select>
        </form>
    )
}

export default DropdownList