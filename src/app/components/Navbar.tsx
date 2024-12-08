"use client"

import Link from 'next/link';
import { useState } from 'react';


const Navbar = () => {




  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Search for:', searchQuery);
  };
    return (


        <div>

<div className="nav w-[1440px] h-24 relative">
  <div className="w-[1440px] h-24 absolute left-0 top-0">
    <div className="w-[1440px] h-[60px] absolute left-0 top-9 bg-white">
    



      <div className="w-[760px] h-[60px] absolute">
  <div className="w-[760px] h-[60px] absolute left-[340px] top-1 overflow-hidden">
  <Link href="/">

    <p className="w-[120.76px] h-6 absolute left-[154.53px] top-3.5 text-base text-center text-[#111]">
      New &amp; Featured
    </p>
    </Link>


  <Link href="/Product">


    <p className="w-[32.51px] h-6 absolute left-[299.09px] top-3.5 text-base text-center text-[#111]">
      Men
    </p>

    </Link>



  <Link href="/">

    <p className="w-[56.75px] h-6 absolute left-[355.41px] top-3.5 text-base text-center text-[#111]">
      Women
    </p>

    </Link>



  <Link href="/">

    <p className="w-[33.48px] h-6 absolute left-[435.95px] top-3.5 text-base text-center text-[#111]">
      Kids
    </p>

    </Link>



  <Link href="/">

    <p className="w-[33.25px] h-6 absolute left-[493.23px] top-3.5 text-base text-center text-[#111]">
      Sale
    </p>

    </Link>



  <Link href="/">

    <p className="w-[55.39px] h-6 absolute left-[550.28px] top-3.5 text-base text-center text-[#111]">
      SNKRS
    </p>

    </Link>

  </div>








  
  <div className="w-[180px] h-10 relative">
  <div className="w-[180px] h-10 absolute left-[1131px] top-2.5 rounded-[100px] bg-neutral-100">
  <div className="w-[84px] h-6 absolute left-12 top-2 overflow-hidden">
  <form
  onSubmit={handleSearchSubmit}
            className="w-[120.31px] h-6 absolute left-0 top-0 text-base text-left text-[#ccc]">
             <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search" 
              className="w-[120.31px] h-6 absolute  left-0 top-0 text-base text-left bg-neutral-100 hover:text-black text-[#2f2e2e]"
            />
             
    </form>

            </div>
  
  
  <div className="flex justify-start items-start absolute left-0.5 top-0.5 overflow-hidden px-2 py-1.5 rounded-[100px]">

    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
      preserveAspectRatio="none"
    >
      <g clipPath="url(#clip0_1_322)">
        <path
          d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471"
          stroke="#111111"
        strokeWidth  ="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_322">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
    
  </div>
</div>
</div>









</div>
        <div className="flex justify-start items-start absolute left-[1318px] top-0 gap-3 py-3">
          <div
            className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden p-1.5 rounded-[100px]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_25)">
                <path
                  d="M16.794 3.75002C18.118 3.75002 19.362 4.26602 20.298 5.20102C21.2262 6.13093 21.7475 7.39113 21.7475 8.70502C21.7475 10.0189 21.2262 11.2791 20.298 12.209L12 20.508L3.70096 12.209C2.77307 11.2791 2.25195 10.0192 2.25195 8.70552C2.25195 7.39188 2.77307 6.13189 3.70096 5.20202C4.15999 4.74032 4.70604 4.37425 5.30751 4.12501C5.90897 3.87578 6.5539 3.74832 7.20496 3.75002C8.52896 3.75002 9.77296 4.26602 10.709 5.20102L11.469 5.96102L12 6.49202L12.53 5.96102L13.29 5.20102C13.7492 4.73963 14.2953 4.37384 14.8967 4.12478C15.4982 3.87573 16.143 3.74835 16.794 3.75002Z"
                  stroke="#111111"
                  strokeWidth="1.5"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_25">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden p-1.5 rounded-[100px]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_29)">
                <path
                  d="M8.25 8.25V6C8.25 5.40326 8.48705 4.83097 8.90901 4.40901C9.33097 3.98705 9.90326 3.75 10.5 3.75H13.5C14.0967 3.75 14.669 3.98705 15.091 4.40901C15.5129 4.83097 15.75 5.40326 15.75 6C15.75 6.59674 15.5129 7.16903 15.091 7.59099C14.669 8.01295 14.0967 8.25 13.5 8.25H3.75V16.5C3.75 17.4946 4.14509 18.4484 4.84835 19.1517C5.55161 19.8549 6.50544 20.25 7.5 20.25H16.5C17.4946 20.25 18.4484 19.8549 19.1517 19.1517C19.8549 18.4484 20.25 17.4946 20.25 16.5V8.25H17.5"
                  stroke="#111111"
                  strokeWidth="1.5"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_29">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>










  <svg
  width={79}
  height={79}
  viewBox="0 0 79 79"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-[78.47px] h-[78.47px] relative"
  preserveAspectRatio="none"
>
  <g clipPath="url(#clip0_1_334)">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M68.9262 28.7725L25.8854 47.0298C22.302 48.5502 19.2874 49.3087 16.8581 49.3087C14.1248 49.3087 12.1336 48.3442 10.9108 46.4184C9.32501 43.9335 10.0182 39.9381 12.7385 35.7203C14.3536 33.2551 16.4069 30.9925 18.4079 28.828C17.9371 29.5931 13.7815 36.5083 18.3262 39.7648C19.2253 40.4187 20.5037 40.7391 22.0764 40.7391C23.3384 40.7391 24.7869 40.5332 26.3792 40.1179L68.9262 28.7725Z"
      fill="#111111"
    />
  </g>
  <defs>
    <clipPath id="clip0_1_334">
      <rect width="78.47" height="78.47" fill="white" transform="translate(0.264648 0.264648)" />
    </clipPath>
  </defs>
</svg>;








  



  
  </div>


       


     
        
        
      </div>
      <div className="w-[1440px] h-[60px] absolute left-0 top-0">
        <div className="w-[1211px] h-[60px] absolute left-[107px] top-0 overflow-hidden">
        
        
             










      </div>
    </div>
    <div className="w-[1440px] h-9 absolute left-0 top-0 bg-neutral-100">
      <div className="w-[1440px] h-9 absolute left-0 top-0">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 absolute left-12 top-1.5"
          preserveAspectRatio="none"
        >
          <g clipPath="url(#clip0_1_37)">
            <path
              d="M13.05 4.14V4.08C13.05 3.8 13.14 3.55 13.32 3.33C13.5 3.11 13.73 3 14.01 3C14.29 3 14.54 3.09 14.76 3.27C14.98 3.45 15.1 3.69 15.12 3.99C15.14 4.29 15.05 4.54 14.85 4.74C14.65 4.94 14.41 5.04 14.13 5.04L13.95 5.1L14.01 5.19L13.95 5.52L13.83 6.48C13.87 6.52 13.89 6.56 13.89 6.6L13.77 7.2C13.73 7.28 13.69 7.34 13.65 7.38L13.59 7.62C13.51 7.94 13.44 8.2 13.38 8.4C13.32 8.6 13.27 8.76 13.23 8.88V9C13.19 9.2 13.16 9.36 13.14 9.48C13.12 9.6 13.05 9.8 12.93 10.08C12.85 10.24 12.85 10.5 12.93 10.86L12.99 10.92C12.99 11.04 13.04 11.18 13.14 11.34C13.24 11.5 13.29 11.64 13.29 11.76C13.33 12.56 13.27 13.24 13.11 13.8L13.23 14.16C13.71 14.4 13.85 14.66 13.65 14.94L13.95 15.06C14.43 15.3 14.77 15.51 14.97 15.69C15.17 15.87 15.37 16.06 15.57 16.26C15.73 16.3 15.85 16.36 15.93 16.44L16.11 16.5C16.95 17.06 17.79 17.74 18.63 18.54L18.87 18.72V18.78L18.81 18.9L18.99 19.02H19.05C19.17 19.1 19.25 19.14 19.29 19.14H19.35C19.39 19.14 19.43 19.12 19.47 19.08L19.59 19.02C19.67 18.94 19.75 18.88 19.83 18.84H20.07C20.11 18.84 20.11 18.86 20.07 18.9L19.83 19.02L19.53 19.38H19.95L20.37 19.44C20.49 19.4 20.59 19.36 20.67 19.32L20.97 19.14C21.09 19.1 21.21 19.14 21.33 19.26H21.39C21.43 19.3 21.41 19.36 21.33 19.44L20.61 20.1C20.41 20.26 20.23 20.36 20.07 20.4L19.29 20.94C19.25 20.98 19.21 20.98 19.17 20.94L18.99 20.7L18.87 20.46L18.72 20.25L18.54 20.01L18.39 19.83L18.27 19.68L18.03 19.5C17.95 19.5 17.87 19.48 17.79 19.44L17.01 18.84C16.89 18.84 16.75 18.78 16.59 18.66C15.99 18.14 15.59 17.82 15.39 17.7L15.03 17.46L14.31 17.34C14.07 17.3 13.75 17.18 13.35 16.98L12.87 16.74C12.55 16.58 12.33 16.5 12.21 16.5L11.97 16.38C11.81 16.34 11.69 16.3 11.61 16.26L11.49 16.14C11.41 16.14 11.33 16.16 11.25 16.2L10.05 16.8L8.54996 17.46C8.14996 17.78 7.76996 18.04 7.40996 18.24L6.74996 18.54L5.72996 19.26C5.64996 19.34 5.56996 19.34 5.48996 19.26L5.36996 19.38C5.24996 19.42 5.16996 19.44 5.12996 19.44L4.88996 19.56V19.68H4.76996L4.64996 19.86C4.56996 20.02 4.48996 20.11 4.40996 20.13C4.32996 20.15 4.27996 20.18 4.25996 20.22C4.23996 20.26 4.21996 20.29 4.19996 20.31L4.07996 20.43L3.89996 20.55L3.62996 20.52L3.26996 20.58L3.02996 20.64C2.82996 20.68 2.66996 20.65 2.54996 20.55C2.42996 20.45 2.32996 20.3 2.24996 20.1C2.16996 19.98 2.20996 19.88 2.36996 19.8L2.42996 19.74C2.46996 19.7 2.52996 19.68 2.60996 19.68H2.96996L3.44996 19.5L3.68996 19.44C3.68996 19.36 3.70996 19.3 3.74996 19.26C3.78996 19.22 3.84996 19.2 3.92996 19.2V19.14C3.88996 19.06 3.86996 18.98 3.86996 18.9C3.82996 18.82 3.81996 18.76 3.83996 18.72C3.85996 18.68 3.87996 18.66 3.89996 18.66H3.92996L3.98996 18.84C4.02996 19.04 4.08996 19.1 4.16996 19.02L4.22996 18.9C4.26996 18.82 4.32996 18.78 4.40996 18.78L4.52996 18.9L4.64996 18.78L4.58996 18.72C4.58996 18.68 4.60996 18.66 4.64996 18.66L4.88996 18.42C5.08996 18.18 5.32996 17.96 5.60996 17.76C6.16996 17.32 6.76996 16.98 7.40996 16.74C7.60996 16.54 7.82996 16.44 8.06996 16.44C8.22996 16.16 8.46996 15.86 8.78996 15.54C9.06996 15.34 9.26996 15.2 9.38996 15.12C9.46996 14.96 9.56996 14.88 9.68996 14.88H9.74996L9.86996 14.76C9.94996 14.72 10.01 14.68 10.05 14.64V14.34C10.05 14.14 10.07 13.98 10.11 13.86C10.15 13.74 10.25 13.68 10.41 13.68L10.65 13.44C10.57 13.28 10.53 13.1 10.53 12.9H10.47C10.39 12.78 10.35 12.66 10.35 12.54C10.23 12.34 10.15 12.18 10.11 12.06H9.92996C9.88996 12.18 9.78996 12.26 9.62996 12.3L9.56996 12.42C9.40996 12.7 9.26996 12.91 9.14996 13.05C9.02996 13.19 8.80996 13.36 8.48996 13.56C8.28996 13.76 8.14996 13.98 8.06996 14.22C8.02996 14.34 8.02996 14.46 8.06996 14.58L8.00996 14.7H8.06996C8.06996 14.78 8.08996 14.82 8.12996 14.82H8.18996C8.26996 14.86 8.30996 14.91 8.30996 14.97C8.30996 15.03 8.24996 15.05 8.12996 15.03C8.00996 15.01 7.91996 14.97 7.85996 14.91C7.79996 14.85 7.74996 14.82 7.70996 14.82L7.52996 15C7.44996 15.12 7.36996 15.17 7.28996 15.15C7.20996 15.13 7.18996 15.1 7.22996 15.06L7.28996 15C7.32996 14.92 7.32996 14.88 7.28996 14.88L6.80996 15C6.76996 15.04 6.71996 15.04 6.65996 15C6.59996 14.96 6.60996 14.92 6.68996 14.88L6.98996 14.76C6.98996 14.72 6.96996 14.7 6.92996 14.7C6.76996 14.78 6.60996 14.8 6.44996 14.76L6.14996 14.7L6.08996 14.64C6.08996 14.6 6.10996 14.58 6.14996 14.58C6.30996 14.62 6.50996 14.6 6.74996 14.52L7.16996 14.34L7.64996 13.8L7.70996 13.68C7.86996 13.36 8.03996 13.07 8.21996 12.81C8.39996 12.55 8.58996 12.34 8.78996 12.18L8.84996 11.94C8.92996 11.78 9.00996 11.64 9.08996 11.52C9.16996 11.4 9.26996 11.24 9.38996 11.04L9.56996 10.8C9.72996 10.56 9.90996 10.44 10.11 10.44L10.29 10.26C10.33 10.22 10.35 10.16 10.35 10.08L10.47 9.96L10.41 9.9C10.17 9.7 10.05 9.52 10.05 9.36C10.01 9.08 10.1 8.84 10.32 8.64C10.54 8.44 10.76 8.35 10.98 8.37C11.2 8.39 11.37 8.46 11.49 8.58L11.61 8.7C11.65 8.7 11.67 8.72 11.67 8.76L11.91 8.88V9.06C11.99 9.14 12.03 9.2 12.03 9.24C12.11 9.12 12.23 8.98 12.39 8.82L12.69 7.86C12.69 7.7 12.73 7.54 12.81 7.38L12.93 7.2V7.08L13.11 6.36H13.23L13.41 5.64C13.45 5.52 13.45 5.38 13.41 5.22L13.17 4.62L13.05 4.14Z"
              fill="#111111"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_1_37"><rect width="24" height="24" fill="white"></rect></clipPath>
          </defs>
        </svg>
        <div className="flex justify-start items-center absolute left-[1129.19px] top-0">
          <div
            className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[15.375px] pl-3 pr-[6.125px] py-2.5"
          >











            <Link href="Product">
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-medium text-left text-[#111]">
              Find a Store
            </p></Link>









            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#111]">|</p>
          </div>
          <div
            className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[12.6875px] pl-2 pr-[4.125px] py-[11px]"
          >
            <Link href="Help">
            <p className="flex-grow-0 flex-shrink-0 text-[11px] font-medium text-left text-[#111]">
              Help
            </p>
            </Link>
            <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#111]">|</p>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[122.5px] h-9 relative">
          <Link href="Join">
            <p className="absolute left-2 top-[11px] text-[11px] font-medium text-left text-[#111]">
              Join Us
            </p>
            </Link>
            <p className="absolute left-[60.02px] top-[11px] text-xs text-left text-[#111]">|</p>
            <Link href="Login">
            <p
              className="absolute left-[75.14px] top-[11px] text-[11px] font-medium text-center text-[#111]"
            >
              Sign In
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[146.86px] h-[26px] absolute left-[-14675.94px] top-[5px] bg-white">
    <p
      className="w-[127.06px] h-4 absolute left-2.5 top-[5px] text-[13px] font-medium text-left text-[#111]"
    >
      Skip to main content
    </p>
  </div>
</div>


            
      
);
};

export default Navbar;