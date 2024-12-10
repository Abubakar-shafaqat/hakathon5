import Image from "next/image";

function Pickanddrop() {
    return ( 
       
            
        <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image src={"/Pick - Up.png"} alt="" width={410} height={132} className="max-w-full" />
        <Image src={"/Switch.png"} alt="" width={60} height={60} className="max-w-full" />
        <Image src={"/Drop - Off.png"} alt="" width={410} height={132} className="max-w-full" />
      </section>
      
      
          
          
          
     );
}

export default Pickanddrop;