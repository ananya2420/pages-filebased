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
                    {clients.map(Client=<li key={client.id}></li>)}
                </li>
                <li>
                    <Link href="/Clients/manu">Manuel </Link>
                </li>
            </ul>
        </div>
    )
}
export default ClientsPage;