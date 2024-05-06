import SigninPage from "@/app/components/template/SigninPage"
import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";



 async function Signin  () {
  const session = await getServerSession(authOptions);
  console.log(session)
  if(session) redirect("/")
  return (
    
   <>

   <SigninPage/>
   </>
  )
}

export default Signin
