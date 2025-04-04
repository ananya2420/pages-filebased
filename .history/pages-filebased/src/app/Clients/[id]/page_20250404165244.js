import Link from "next/link";

function ClientsPage(){

    const clients=[
        {id:'max', name:'Maximilian'}
        {id:'manu', name:'Maximilian'}
    ]
    return(
        <div>
            <h2>The Clients Project Page</h2>
            <ul>
                <li>
                    <Link href="/Clients/max">Maximilian </Link>
                </li>
                <li>
                    <Link href="/Clients/manu">Manuel </Link>
                </li>
            </ul>
        </div>
    )
}
export default ClientsPage;