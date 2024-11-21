// eslint-disable-next-line
import Link from "next/link";

export default async function CoinPage ({params,}: {params: Promise<{ coinId: string}>} ) {
  const coinId = (await params).coinId;
  return (
    <div >
       <h1>{coinId}</h1> 
    </div>
  );
}
