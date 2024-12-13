const Related =()=> {
    return (
      <div className="px-4 sm:px-8 lg:px-12 w-full h-auto mt-8">
        <div className="w-full h-auto relative">
          {/* Helpful Section */}
          <p className="w-full h-auto text-[15px] text-left text-[#111]">
            Was this answer helpful?
          </p>
          <div className="flex space-x-4 mt-2">
            <svg
              width={31}
              height={30}
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px]"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_3842)">
                <path
                  d="M10.025 15.375C10.525 14.575 11.025 13.75 11.525 12.9L11.975 12.3C12.925 10.95 13.5125 10.125 13.7375 9.825C13.9625 9.525 14.325 8.875 14.825 7.875L15.125 7.275C15.175 7.225 15.225 7.025 15.275 6.675C15.375 5.825 15.525 5.2 15.725 4.8C15.975 4.1 16.375 3.75 16.925 3.75C17.675 3.75 18.225 4.025 18.575 4.575C18.875 5.075 19.025 5.65 19.025 6.3C19.025 6.85 18.75 7.85 18.2 9.3L17.9 10.125C17.8 10.475 17.725 10.95 17.675 11.55L17.525 12.3H20.15L20.975 12.375C21.575 12.425 22.1 12.525 22.55 12.675C23.2 12.825 23.65 13.05 23.9 13.35C24.2 13.75 24.375 14.175 24.425 14.625C24.475 14.925 24.475 15.325 24.425 15.825L23.525 23.325C23.375 24.575 22.775 25.425 21.725 25.875C21.125 26.125 20.35 26.25 19.4 26.25H6.125V15.375H10.025Z"
                  fill="#111111"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3842">
                  <rect
                    width={30}
                    height={30}
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width={31}
              height={30}
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px]"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_3845)">
                <path
                  d="M11.525 17.025L10.025 14.625H6.125V3.75H19.4L20 3.825C20.45 3.875 20.9 3.975 21.35 4.125C21.9 4.325 22.35 4.6 22.7 4.95C23.15 5.45 23.425 6.025 23.525 6.675L24.425 14.1C24.475 14.6 24.475 15 24.425 15.3C24.375 15.8 24.1875 16.2625 23.8625 16.6875C23.5375 17.1125 22.975 17.375 22.175 17.475C21.775 17.575 21.1 17.625 20.15 17.625H17.525L17.675 18.45C17.725 19.05 17.8 19.5 17.9 19.8L18.2 20.7C18.75 22.15 19.025 23.15 19.025 23.7C19.025 24.35 18.875 24.925 18.575 25.425C18.225 25.975 17.675 26.25 16.925 26.25C16.375 26.25 15.975 25.9 15.725 25.2C15.525 24.8 15.375 24.175 15.275 23.325C15.225 22.925 15.175 22.7 15.125 22.65L14.825 21.975C14.325 21.025 13.95 20.3875 13.7 20.0625C13.45 19.7375 12.825 18.875 11.825 17.475L11.525 17.025Z"
                  fill="#111111"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3845">
                  <rect
                    width={30}
                    height={30}
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
  
          {/* Related Section */}
          <div className="w-full h-auto mt-8">
            <p className="text-base font-medium text-[#757575]">RELATED</p>
            <div className="mt-4 space-y-2">
              <p className="text-base text-left text-[#111]">
                WHAT ARE NIKE'S DELIVERY OPTIONS?
              </p>
              <p className="text-base text-left text-[#111]">
                HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Related;