import {auth} from "../utils/auth"
import { redirect } from "next/navigation";

export async function requireUser() {
  const session = await auth();

  console.log("inside the utils/hooks ...");
  console.log(session)
  if(!session?.user){
    redirect("/login")
  }
  return session
}