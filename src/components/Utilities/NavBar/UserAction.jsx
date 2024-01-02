import Link from "next/link";
import { authUserSession } from "@/libs/auth";

const UserAction = async () => {
  const user = await authUserSession()
  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

  return (
    <div className="text-color-whity flex mini:justify-between mini:flex-row gap-4 pt-1">
        {
            user ? <Link href="/users/dashboard" className="hover:text-white transition-all duration-500 py-1 self-start">Dashboard</Link> : null
        }
      <Link href={actionURL} className="hover:text-white transition-all duration-500 bg-color-dark py-1 px-4 rounded self-end">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserAction;
