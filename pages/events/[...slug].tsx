import { useRouter } from "next/router";

export default function FilterPage() {
  const router = useRouter();
  console.log(router.query);
  return <div>filters evety events</div>;
}
