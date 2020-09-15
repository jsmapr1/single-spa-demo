import React, { useEffect, useState } from "react";
import { savedData, setSavedData } from "@mfe-hello/shared-data";

export default function Data() {
  const [data, setData] = useState("");
  useEffect(() => {
    savedData.subscribe((cache) => setData(cache.saved));
  }, []);
  return (
    <div>
      <div>{data}</div>
      <label>
        Set Data:
        <input onChange={(e) => setSavedData(e.target.value)} />
      </label>
    </div>
  );
}
