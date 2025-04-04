

import { useRouter } from "next/router";

function ClientProjectPage(){
  const router =   useRouter();
    return(
        <div>
            <h2>The project of a given clients.</h2>
        </div>
    )

}
export default ClientProjectPage;