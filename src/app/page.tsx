import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/portfolio"}>Portfolio</Link>
      </nav>
    </div>
  );
}
