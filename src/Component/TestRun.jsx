import axios from 'axios'
import React, { useState } from 'react'

const TestRun = () => {

    const [Dogs, setDogs] = useState = (null)
    const [Loading, setLoading] = useState(true)

    const submit = () => {
    axios.get("https://dog.ceo/api/breeds/image/random")
    .then((res)=>{
        console.log(res.data);
    })

}

  return (
    <div>
            {Loading ? <h1>Loading...</h1> : <img src={Dogs} alt="" />}

    </div>
  )
}

export default TestRun