import { Outlet } from "react-router-dom";

function Page() {
  
  return (
    <section>
        <div>
          <Outlet />
        </div>
    </section>
  );
}
export default Page;
