import { useEffect, useState } from "react";
import axios from "axios";
export const BridgeSyncLogin = () => {
  const sampleDiscoveryData = [
    {
      name: "Philips hue",
      ipaddress: "192.168.0.1",
      modelid: "BSB002",
      swversion: "1935074050",
    },
    {
      ipaddress: "192.168.2.13",
      modelid: "BSB002",
      swversion: "1935074050",
    },
  ];
  const [bridgeList, setBridgeList] = useState(sampleDiscoveryData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const x = await axios.get("https://discovery.meethue.com/", {
  //       headers: {
  //         "X-Requested-With": "XMLHttpRequest",
  //       },
  //     });
  //     console.log(x);
  //   };
  //   fetchData();
  // }, []);
  return (
    <div>
      <h2>Bridge Sync Login</h2>
      <iframe src="https://discovery.meethue.com/" />
      {bridgeList.map((item) => {
        return (
          <article>
            <h2>{item.name || "Unnamed Bridge"}</h2>
            <p>{item.ipaddress}</p>
            <button>Connect</button>
          </article>
        );
      })}
    </div>
  );
};
