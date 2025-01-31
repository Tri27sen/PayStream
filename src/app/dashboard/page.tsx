//import {auth} from "../utils/auth"
import { redirect } from "next/navigation";
import { requireUser } from "../utils/hooks";
import { signOut } from "next-auth/react";
// dashboard only for logged in user 
//redirect to the login page
//check the login
export default async function DashboardRoute() {
  
  const session = await requireUser();
  console.log(session)
  
  if(!session?.user){
    redirect("/")
  }
    return (
  <div>
    <h1> hello from dashboard route</h1>
    <form
    action ={async () => {
      "use server";
      await signOut();
    }}
    >
      <button type = "submit"> Sign Out</button>
    </form>
  </div>
  )
}