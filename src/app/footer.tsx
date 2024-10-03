import Link from "next/link";

export default
function Footer(){
    return(
<footer className="flex  mb-3 justify-between border rounded-full bg-green-500 h-20 w-full p-4 fixed bottom-0 ">
<meta name="viewport" content="width=device-width, initial-scale=1" />
            <div>
                <h1 className="font-bold text-2xl mt-5 ml-6 mb-3">All copyright are reversed by iollex</h1>
            </div>

    <nav>
        <ul className="flex gap-6  text-2xl mt-5 mr-5 font-semibold">

            <li>
            <Link href="/">Home</Link></li>
            <li>
            <Link href="/about">About</Link></li>
            <li>
            <Link href="/disclaimer">Disclaimer</Link></li>
            
                
        </ul>
    </nav>
</footer>
 );
};