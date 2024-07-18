import { NavLink, Outlet } from "react-router-dom";
import { CashCoin, CashStack } from "react-bootstrap-icons";

const services = [
  { id: '1', url: '/dash-user/send-money', icon: <CashCoin />, title: 'Send money' },
  { id: '2', url: '/dash-user/cash-out', icon: <CashStack />, title: 'Cash out' },
]

function DashboardUser() {
  return (
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-6">
        <h2 className="mb-6 text-2xl md:text-3xl font-semibold text-center">Hello, <span className="text-bold text-indigo-600">_Arif</span></h2>

        {/* services */}
        <div className="grid grid-cols-[auto_auto] justify-center gap-6">
          {services.map(service => <ServiceCard key={service.id} service={service} />)}
        </div>

        <Outlet />
      </div>
    </section>
  );
}

export default DashboardUser;


function ServiceCard({ service: { url, icon, title } }) {
  return (
    <NavLink to={url} className={({ isActive }) => `
      flex flex-col gap-1 px-6 py-4 rounded-md text-center bg-gray-200 hover:bg-indigo-200 
      ${isActive ? "bg-indigo-200 text-indigo-600" : ""}
    `}>
      <span className="[&>*]:size-12 mx-auto">{icon}</span>
      <h3 className="font-semibold">{title}</h3>
    </NavLink>
  );
}

