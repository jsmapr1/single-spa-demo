import React from 'react';
import { getSavedData, setSavedData } from 'shared-data';

export default function Data() {
  return(
    <div>
      <div>{getSavedData()}</div>
      <label>
        Set Data: 
        <input onChange={e => setSavedData(e.target.value)} />
      </label>
    </div>
  )
}
