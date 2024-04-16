import { Outlet } from "react-router-dom";

function Page() {  
  return (
    <section className="grow flex">
      <Outlet />
    </section>
  );
}
export default Page;
