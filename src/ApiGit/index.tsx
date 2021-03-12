import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CallTopositories{
    name: string
}

function ShowListGitHub(){
    const [repositories, setRepositories] = useState<string[]>([])

    useEffect(() => {
        async function CallList(){
            const response = await axios.get<CallTopositories[]>("https://api.github.com/users/lucasalvess96/repos")
            const data = await response.data.map(uf => uf.name)
            setRepositories(data)
            //console.log(data)
        }
        CallList()
    }, [])

    return(
        <>
            <h1>Listando Projetos do github</h1>
            <ol>
                {repositories.map(showList => (
                    <li  value={showList}>{showList}</li>
                ))}
            </ol>
        </>
    )
}

export default ShowListGitHub