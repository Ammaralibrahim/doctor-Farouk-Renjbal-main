import Image from "next/image";
import Photo from "@/public/photo.jpg";
export default function Home() {
  return (
    <>
      <section className="py-16 pt-20">
        <div className="container max-w-screen-xl mx-auto px-4">
          <header className="flex flex-col lg:flex-row justify-between lg:mb-20">
            <div className="text-center lg:text-left mb-20 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-10">
                <span className="w-20 h-0.5 bg-indigo-700" />
                <p className="font-medium text-indigo-700 text-xl">
                  DR.Farouk Renjbal
                </p>
              </div>
              <h1 className="font-bold text-gray-800 text-4xl md:text-6xl xl:text-5xl mb-10">
                Professor Dr.consultant <br />
                public health
              </h1>
              <p className="font-normal text-gray-500 text-sm md:text-md xl:text-lg mb-10">
              Hello, I&apos;m Dr. Farouk Renjbal, a professor and public health consultant specializing in Ottawa, Canada.
              </p>
              <div class="flex items-center mb-4">
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 512 512"
                  >
                    <title>ionicons-v5-n</title>
                    <path
                      d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z"
                      style={{
                        fill: "none",
                        stroke: "#000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                    <circle
                      cx={256}
                      cy={192}
                      r={48}
                      style={{
                        fill: "none",
                        stroke: "#000",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 32,
                      }}
                    />
                  </svg>
                </div>
                <div>Ottawa, ON..Canada.</div>
              </div>
              <div class="flex items-center mb-4">
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />{" "}
                  </svg>
                </div>
                <div>514-991-9262</div>
              </div>
              <div class="flex items-center mb-4">
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width={20}
                    height={20}
                    viewBox="0 0 256 256"
                    xmlSpace="preserve"
                  >
                    <defs></defs>
                    <g
                      style={{
                        stroke: "none",
                        strokeWidth: 0,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "none",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                      <path
                        d="M 25.261 33.117 c 2.858 -3.93 5.295 -8.178 6.717 -11.911 h 9.172 c 0.552 0 1 -0.448 1 -1 s -0.448 -1 -1 -1 H 27.194 v -2.916 c 0 -0.552 -0.448 -1 -1 -1 s -1 0.448 -1 1 v 2.916 H 11.777 c -0.552 0 -1 0.448 -1 1 s 0.448 1 1 1 h 18.059 c -1.334 3.245 -3.465 6.91 -5.926 10.346 c -1.757 -2.169 -3.22 -4.526 -4.328 -7.015 c -0.225 -0.505 -0.815 -0.73 -1.32 -0.507 c -0.504 0.225 -0.731 0.816 -0.507 1.32 c 1.246 2.8 2.92 5.437 4.933 7.849 c -2.417 3.162 -5.061 6.029 -7.545 8.04 c -0.429 0.348 -0.495 0.978 -0.148 1.407 c 0.198 0.244 0.487 0.371 0.778 0.371 c 0.221 0 0.444 -0.073 0.629 -0.223 c 2.546 -2.062 5.204 -4.911 7.644 -8.059 c 1.341 1.431 2.801 2.773 4.386 3.991 c 0.182 0.14 0.396 0.207 0.609 0.207 c 0.3 0 0.597 -0.134 0.793 -0.391 c 0.336 -0.438 0.254 -1.066 -0.184 -1.402 C 28.056 35.917 26.591 34.565 25.261 33.117 z"
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 63.49 33.603 c -4.796 0 -8.697 3.901 -8.697 8.697 v 17.661 c 0 0.553 0.447 1 1 1 s 1 -0.447 1 -1 V 49.084 h 13.394 v 10.877 c 0 0.553 0.447 1 1 1 s 1 -0.447 1 -1 V 42.3 C 72.187 37.504 68.285 33.603 63.49 33.603 z M 70.187 47.084 H 56.793 V 42.3 c 0 -3.692 3.004 -6.697 6.697 -6.697 c 3.692 0 6.696 3.004 6.696 6.697 V 47.084 z"
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 80.959 26.7 H 53.02 v -8.92 c 0 -4.985 -4.056 -9.042 -9.041 -9.042 H 9.041 C 4.056 8.738 0 12.794 0 17.779 v 24.372 c 0 4.986 4.056 9.042 9.041 9.042 L 9.058 62.3 c 0 0.404 0.244 0.77 0.617 0.924 c 0.124 0.052 0.254 0.076 0.383 0.076 c 0.26 0 0.516 -0.102 0.707 -0.293 L 22.58 51.192 h 14.4 v 8.921 c 0 4.985 4.056 9.041 9.042 9.041 H 67.42 l 11.815 11.814 c 0.191 0.191 0.447 0.293 0.707 0.293 c 0.129 0 0.259 -0.024 0.383 -0.076 c 0.374 -0.154 0.617 -0.52 0.617 -0.924 V 69.154 h 0.017 c 4.985 0 9.041 -4.056 9.041 -9.041 V 35.741 C 90 30.756 85.944 26.7 80.959 26.7 z M 22.166 49.192 c -0.265 0 -0.52 0.105 -0.707 0.293 l -10.401 10.4 v -9.693 c 0 -0.553 -0.448 -1 -1 -1 H 9.041 C 5.159 49.192 2 46.033 2 42.151 V 17.779 c 0 -3.883 3.159 -7.042 7.041 -7.042 h 34.938 c 3.883 0 7.041 3.159 7.041 7.042 v 8.92 h -4.998 c -4.985 0 -9.042 4.056 -9.042 9.042 v 13.451 H 22.166 z M 88 60.113 c 0 3.883 -3.158 7.041 -7.041 7.041 h -1.017 c -0.553 0 -1 0.447 -1 1 v 9.693 l -10.401 -10.4 c -0.188 -0.188 -0.441 -0.293 -0.707 -0.293 H 46.021 c -3.883 0 -7.042 -3.158 -7.042 -7.041 V 35.741 c 0 -3.883 3.159 -7.042 7.042 -7.042 h 34.938 c 3.883 0 7.041 3.159 7.041 7.042 V 60.113 z"
                        style={{
                          stroke: "none",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </div>
                <div>514-991-9262</div>
              </div>
              <div class="flex items-center mb-4">
                <div class="mr-2">
                  <a
                    href="https://pdf.ac/2myZcl"
                    target="_blank"
                    type="button"
                    class="text-white bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-indigo-700 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700"
                  >
                    Download CV
                  </a>
                </div>
              </div>
              {/* Other information */}

              <hr className="text-gray-500 mb-5" />
              <span className="font-normal text-gray-500 text-sm">Thanks.</span>
            </div>
            {/* Image displayed on top and centered on mobile */}
            <div className="mx-auto lg:mx-0 mt-5 lg:mt-0 lg:ml-auto lg:mr-0 text-center">
              <Image
                src={Photo}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </header>
        </div>
      </section>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div className="fixed">
        <div
          class="elfsight-app-dc004f29-df5a-4c84-b125-d38be86d22a1"
          data-elfsight-app-lazy
        ></div>
      </div>
    </>
  );
}
