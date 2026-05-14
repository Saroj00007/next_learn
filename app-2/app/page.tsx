import Link from "next/link";


export default function Home() {
  return (
             <div className="gap-4 text-lg h-screen w-screen flex items-center justify-center">
             <div>
              TODO APP
             </div>
             <Link href={"/signup"}>signup</Link><br /><br />
             <Link href={"/signin"}>signin</Link>
             </div>
  );
}
