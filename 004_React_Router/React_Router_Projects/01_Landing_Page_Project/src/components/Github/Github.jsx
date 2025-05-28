import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/thebraudalf')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // })

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-4xl" >Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )    
}

export default Github;

export const ghInfoLoader = async () => {
    const resonse = await fetch('https://api.github.com/users/thebraudalf')
    return resonse.json()

}
