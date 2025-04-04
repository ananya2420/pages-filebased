import Link from "next/link";

function ClientsPage(){

    const clients=[
        {id:'max', name:'Maximilian'},
        {id:'manu', name:'Manuel'}
    ]
    return(
        <div>
            <h2>The Clients Project Page</h2>
            <ul>
                <li>
                    {clients.map(client=<li key={client.id}></li>)}
                    <Link href={`/Clients/${client.id}`}>{client.nae}</Link>
                </li>
                <li>
                    <Link href="/Clients/manu">Manuel </Link>
                </li>
            </ul>
        </div>
    )
}
export default ClientsPage;