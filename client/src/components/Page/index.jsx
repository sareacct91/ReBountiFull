import PageContent from '../PageContent';
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  

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
