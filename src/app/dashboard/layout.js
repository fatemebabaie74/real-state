import DahboardSidebar from '@/app/components/layout/DahboardSidebar'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import connectDB from '@/utils/connectDB'
import User from '@/app/models/User'


export const metadata = {
  title: "پنل کاربری املاک",

};


async function DashboardLayout  ({children})  {
  const session =await getServerSession(authOptions)
   if(!session) redirect("/signin")
   await connectDB();
  const user = await User.findOne({email : session.user.email});
  console.log(user)
  if(!user) return <h3>مشکلی پیش آمده است</h3>

  
  return (
    <DahboardSidebar role={user.role} email={user.email}>
        
      {children}
    </DahboardSidebar>
  )
}

export default DashboardLayout
