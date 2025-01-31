import {auth} from "../utils/auth"
import { redirect } from "next/navigation";
// dashboard only for logined in user 
//redirect to the login page
//check the login
export default async function DashboardRoute() {
  const session = await auth();
  

  if(!session?.user){
    redirect("/")
  }
    return (
  <div>
    <h1> hello from dashboard route</h1>
  </div>
  )
}