import { useQuery } from "@apollo/client";
import Auth from "../src/utils/auth"
import { QUERY_USER } from "../src/utils/queries";

export default function Account() {
  const { data, loading: loadingUser, error: errorUser } = useQuery(QUERY_USER);

  if (loadingUser || errorUser ) {
    console.log('loading', loadingUser);
    console.log('error', errorUser)
    return (
      <div>loading...</div>
    )
  }

  console.log(data);

  return (
    <div className="flex min-h-[calc(100vh-192px-40px)] w-full flex-col gap-5 bg-white text-black">
      <div className="mt-5">
        <h1 className="pb-10 text-center">{} Account</h1>
        <div>
          <p></p>
        </div>
      </div>

      <div className="">
        <h2>Purchase History</h2>
      </div>
    </div>
  )
}
