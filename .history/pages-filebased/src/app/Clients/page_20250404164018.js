import Link from "next/link";

function ClientsPage(){
    return(
        <div>
            <h2>The Clients Project Page</h2>
            <ul>
                <li>
                    <Link href="/Clients/max">Maximilian </Link>
                </li>
                <li>
                    <Link href="/Clients/m">Maximilian </Link>
                </li>
            </ul>
        </div>
    )
}
export default ClientsPage;