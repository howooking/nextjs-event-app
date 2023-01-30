import { useRouter } from "next/router";

export default function FilteredEvent() {
  const router = useRouter();
  console.log(router.query);
  return <div>filters evety events</div>;
}
