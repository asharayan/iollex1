import Link from "next/link";

export default
function Header(){
    return(
     

<header className="flex layout-lg-md-sm justify-between bg-green-500 h-20 border rounded-full
">
            <div>
                <h1 className="font-bold text-5xl mt-6 ml-6">IOLLEX</h1>
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
</header>
 );
};