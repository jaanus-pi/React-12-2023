import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Omniva } from '../../models/Omniva';

const ParcelMachines = () => {
  const [parcelMachines, setParcelMachines] = useState<Omniva[]>([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then((response: Response) => response.json())
      .then((json: Omniva[]) => setParcelMachines(json))
  }, []);

  if (parcelMachines.length === 0) {
    return <Spinner />
  }

  return (
    <select>
      {parcelMachines
      .filter(pm => pm.A0_NAME === "EE")
      .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
    </select>
  )
}

export default ParcelMachines