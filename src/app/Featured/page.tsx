import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import { FeaturedCarousel } from "@/components/ProductItem";
import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Featured() {
  return (
    
    <div>
    
    

     <Navbar />
    

    
   
<div className="px-4 sm:px-8 lg:px-12">
    <section className="flex flex-col left-12 mt-16 max-w-[200px]">
        <h1 className="font-semibold text-sm text-left  md:text-2xl">New(500)</h1>
        <div className="font-medium text-[15px] lg:text-md max-w-[150px] hover:text-black space-y-2 mt-6 flex flex-col">
          <Link href={"Stock"}>Shoes</Link>
          <Link href={"Stock"}>Sports Bras</Link>
          <Link href={"Stock"}>Tops & T-Shirts</Link>
          <Link href={"Stock"}>Hoodies & Sweatshirts</Link>
          <Link href={"Stock"}>Jackets</Link>
          <Link href={"Stock"}>Trousers & Tights</Link>
          <Link href={"Stock"}>Shorts</Link>
          <Link href={"Stock"}>Tracksuits</Link>
          <Link href={"Stock"}>Jumpsuits & Rompers</Link>
          <Link href={"Stock"}>Skirts & Dresses</Link>
          <Link href={"Stock"}>Socks</Link>
          <Link href={"Stock"}>Accessories & Equipment</Link>
        </div>
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-between items-center text-sm mt-1">
            Gender
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-2 text-[9px] lg:text-sm">
          <Link href='Stock'>
            <h1 className="flex gap-2 items-center">
              
              Men
            </h1>
            </Link>
            <Link href='Stock'>
            <h1 className="flex gap-2 items-center">
             
              Women
            </h1>
            </Link>
            <Link href='Stock'>
            <h1 className="flex gap-2 items-center">
             
              Unisex
            </h1>
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-between text-sm items-center mt-1">
            Kids
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-2 text-[9px] lg:text-sm">
            <Link href='Stock'>
            <h1 className="flex gap-2 items-center">          
              Boys
            </h1>
            </Link>
            <Link href='Stock'>
            <h1 className="flex gap-2 items-center">           
              Girls
            </h1>
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex text-[9px] lg:text-[12px] justify-between items-center mt-1">
            Sort By Price
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-2 text-[9px] lg:text-sm">
            <h1 className="flex gap-2 items-center">
           
              Under ₹ 2 500.00
            </h1>
            <h1 className="flex gap-2 items-center">
             ₹ 2 501.00 - ₹ 7 500.00
            </h1>
          </div>
        </div>
      </section>



  
   





      <section className="max-w-full -mt-[870px] ml-40  mx-auto overflow-clip">
        <div className="flex gap-4 ml-10 md:ml-[400px] lg:ml-[620px] xl:ml-[800px] overflow-clip">
          <h1 className="flex items-center gap-2  mt-16 font-semibold text-sm">
            Hide Filters
            <span>
              <FiFilter size={14} />
            </span>
          </h1>
          <h2 className="flex items-center gap-2 mt-16 font-semibold text-sm">
            Sort By
            <span>
              <RiArrowDropDownLine size={25} />
            </span>
          </h2>
        </div>
        <div className="mb-20 ">
          <FeaturedCarousel />
        </div>
        
        </section>


       
       
       
 






<section className=" w-full py-16">
  <div className="-mt-6 w-full">
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    
      <div className="space-y-4 w-full">
        <h1 className="font-semibold ml-2 text-xl">Related Categories</h1>

        {/* Flex container for buttons */}
        <div className="flex flex-wrap gap-2">
          
          {/* First Row Buttons */}
          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full shadow-none text-black border-[1px]  group-hover:text-white">
                Best Selling Products
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px]  shadow-none">
                Best Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px]  shadow-none">
                New Basketball Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px]  shadow-none">
                New Football Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px]  shadow-none">
                New Men's Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px]  shadow-none">
                New Running Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px] shadow-none">
                Best Men's Shoes
              </Button>
            </Link>
          </div>

          {/* Force a new row for the last three buttons */}
          <div className="w-full"></div>

          {/* Last Row Buttons */}
          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px] shadow-none">
                New Jordan Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px] shadow-none">
                Best Women's Shoes
              </Button>
            </Link>
          </div>

          <div className="group hover:border-black border-neutral-200 w-full sm:w-auto">
            <Link href="Stock">
              <Button className="bg-white hover:bg-black rounded-full text-black group-hover:text-white border-[1px] shadow-none">
                Best Training & Gym
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
 





   
    

        
    <Footer />

   


    
  
   


   
    

    </div>
  );
}