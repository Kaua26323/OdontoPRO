import { SidebarDashboard } from "./_components/SideBar"

export default function DashboardLayout({ 
  children 
}: {
  children: React.ReactNode
}){
  return(
    <>
      <SidebarDashboard>
        { children }
      </SidebarDashboard>
    </>
  )

}