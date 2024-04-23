import { useQuery } from "@apollo/client";
import Auth from "../src/utils/auth"
import { QUERY_USER } from "../src/utils/queries";
import History from '../src/components/History/history';

export default function Account() {
  const { data, loading: loadingUser, error: errorUser } = useQuery(QUERY_USER);

  if (loadingUser || errorUser) {
    console.log('loading', loadingUser);
    console.log('error', errorUser)
    return (
      <div>loading...</div>
    )
  }

  console.log(data);

  const { user } = data;
  const {
    business_name,
    email,
    fullname,
    history,
    household_size,
    isClient,
    isSupplier,
    username,
  } = user;

  // console.log("HISTORY", history);

  return (
    <div className="flex min-h-[calc(100vh-192px-40px)] flex-col gap-5 bg-white text-black">
      <div className="mt-5 flex flex-col">
        <h1 className="pb-10 text-center">{fullname}'s Account</h1>
        <div className="mx-auto flex h-max w-1/2 flex-col gap-2">
          <p className="w-max"><span className="font-bold">Username:</span> {username}</p>
          <p className="w-max"><span className="font-bold">Email:</span> {email}</p>
          { isClient && <p className="w-max"><span className="font-bold">Household Size: </span>{household_size}</p> }
          { isSupplier && <p className="w-max"><span className="font-bold">Business Name: </span>{business_name}</p> }
        </div>
      </div>
      <div className="mx-auto flex w-1/2 flex-col">
        <h3 className="text-lg font-bold">Purchase History:</h3>
        <div>
          <ul>
            {history.map((e) => {
              return (
                <History key={e.stripeId} {...e} />
              )
            }
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
