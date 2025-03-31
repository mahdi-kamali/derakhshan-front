import { redirect } from "next/navigation";

export default function useRedirect() {
  return {
    GoHome: () => redirect("/fa/home"),
  };
}
