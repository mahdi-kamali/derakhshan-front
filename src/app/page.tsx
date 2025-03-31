import useRedirect from "@/hooks/useRedirect";

export default function Page() {
  const { GoHome } = useRedirect();

  return GoHome();
}
