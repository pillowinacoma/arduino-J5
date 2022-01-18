import { useEffect, useState } from 'react'
import axios from 'axios'

const ContentContainer = () => {
  useEffect(() => {
    axios.get(`/weather`).then((res) => {
        console.log(res.data)
        console.log(res.data.temp)
    })
}, [])

  return (
    <div>
    </div>
  );
};

export default ContentContainer;
