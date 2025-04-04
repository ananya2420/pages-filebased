import { useRouter } from "next/router";



function SelectedClientProjectPage(){
   const router =  useRouter();
  
    return <div>
        <h1>The projects page for a specific projects for a selected client.</h1>
    </div>
}
export default SelectedClientProjectPage;