import { redirect } from "next/navigation";

export default function useRedirect() {
  return {
    GoHome: () => redirect("/FA/home"),
    NotFound: () => redirect("/404"),
  };
}
