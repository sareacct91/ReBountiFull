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
    <div className="flex min-h-[calc(100vh-192px-40px)] w-full flex-col items-center gap-5 bg-white text-black">
      <div className="mt-5 rounded-lg border-2 border-gray-500 px-16 py-12">
        <h1 className="pb-10 text-center">{} Account</h1>
        <div>
          <p></p>
        </div>
      </div>

      <div className="mx-2 mb-2 flex max-w-xl flex-col rounded-lg border-8 border-double border-blue-500 bg-blue-300/40 p-5 font-semibold text-black">
        <p className="">
          ReBountiFull helpled my family when we didn't know where our next meal
          was coming from. It made a world of difference for my growing
          children.
          <br />- Mary, a single mom from San Jose
        </p>
      </div>
    </div>
  )
}
