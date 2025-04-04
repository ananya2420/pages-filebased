import { useRouter } from "next/router";

function SelectedClientrojectPage(){

  const router =   useRouter();
  console.log(router.query)
    return <div>
        <h2>The project page for a specific project a selected client.</h2>
    </div>
}
export default SelectedClientrojectPage;