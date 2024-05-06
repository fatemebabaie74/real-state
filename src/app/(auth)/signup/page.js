import SignupPage from "@/app/components/template/SignupPage"
import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";

async function SignUp  ()  {
  const session = await getServerSession(authOptions);
  console.log(session)
  if(session) redirect("/")
  
  return (
    <div>
      <SignupPage/>
    </div>
  )
}

export default SignUp
