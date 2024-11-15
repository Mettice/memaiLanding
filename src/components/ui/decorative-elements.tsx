export function DecorativeElements() {
    return (
      <>
        <div className="absolute top-0 right-0 -z-10">
          <svg
            width="350"
            height="350"
            viewBox="0 0 350 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-20"
          >
            <circle cx="175" cy="175" r="175" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="0"
                y1="0"
                x2="350"
                y2="350"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4F46E5" />
                <stop offset="1" stopColor="#9333EA" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute -bottom-32 left-0 -z-10">
          <svg
            width="450"
            height="450"
            viewBox="0 0 450 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-20"
          >
            <circle cx="225" cy="225" r="225" fill="url(#paint1_linear)" />
            <defs>
              <linearGradient
                id="paint1_linear"
                x1="0"
                y1="450"
                x2="450"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9333EA" />
                <stop offset="1" stopColor="#4F46E5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </>
    )
  }