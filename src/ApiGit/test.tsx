import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CallTopositories{
    name: string
}

function showListGitHub(){
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
            <ul>
                {repositories.map(showList => (
                    <li  value={showList}>{showList}</li>
                ))}
            </ul>
        </>
    )
}

export default showListGitHub
