import PageContent from "../PageContent";
import { Outlet } from "react-router-dom";

function Page() {
  
  return (
    <section>
      <PageContent>
        <div>
          <Outlet />
        </div>
      </PageContent>
    </section>
  );
}
export default Page;
