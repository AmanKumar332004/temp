import React from "react";

function App() {
  const products = [
    {
      image: "/path/to/socioboard.png",
      title: "SOCIOBOARD",
      description:
        "Get leads on your business website through social media with our engagement automation platform.",
    },
    {
      image: "/path/to/grocbasket.png",
      title: "GROC BASKET",
      description:
        "Provide your customers with the convenience of shopping for groceries with a simple click.",
    },
    {
      image: "/path/to/socioleads.png",
      title: "SOCIOLEADS",
      description:
        "Convert your website into a sales machine by getting leads from Facebook and LinkedIn.",
    },
    {
      image: "/path/to/gramboard.png",
      title: "GRAMBOARD",
      description:
        "Autopilot all your marketing tasks on Instagram and skyrocket your engagement in the most hassle-free way.",
    },
    {
      image: "/path/to/cure24x7.png",
      title: "CURE24x7",
      description:
        "Schedule your appointment and consult with the doctor of your choice at your own convenience by simply sitting at home.",
    },
    {
      image: "/path/to/brandzter.png",
      title: "BRANDZTER",
      description:
        "Keep your brand name safe from getting misused and track where it appears on the Internet, without any manual work.",
    },
    {
      image: "/path/to/brandzter.png",
      title: "BRANDZTER",
      description:
        "Keep your brand name safe from getting misused and track where it appears on the Internet, without any manual work.",
    },
    {
      image: "/path/to/brandzter.png",
      title: "BRANDZTER",
      description:
        "Keep your brand name safe from getting misused and track where it appears on the Internet, without any manual work.",
    },
    {
      image: "/path/to/brandzter.png",
      title: "BRANDZTER",
      description:
        "Keep your brand name safe from getting misused and track where it appears on the Internet, without any manual work.",
    },
  ];

  return (
    <div id="container" className="height-100% width-100% mb-0">
      <div className="bg-white">
        <header className="bg-white shadow">
          <div className="py-10 px-2 flex justify-between items-center  ">
            <div className="flex items-center">
              <a href="/" className="text-lg font-bold">
                GLOBUSSOFT
              </a>
              <span className="text-gray-500 ml-2">
                TECHNOLOGY AHEAD OF TIME
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/" className="hover:underline">
                About Us
              </a>
              <a href="/" className="hover:underline">
                Products & Services
              </a>
              <a href="/" className="hover:underline">
                Incubators
              </a>
              <a href="/" className="hover:underline">
                Why us
              </a>
              <a href="/" className="hover:underline">
                Careers
              </a>
              <a href="/" className="hover:underline">
                Blogs
              </a>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </div>
          </div>
        </header>

        <section className="container mx-auto py-24 flex flex-col md:flex-row justify-between items-center h-[700px]">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-medium mb-4 ml-40">
              <span className="text-[48px] ml-20">Expanding <br></br><span className="text-blue-400">Possibilities for the<br></br></span><span className="text-blue-400">Next Generation</span></span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 ml-40">
              We help people to conceptualize their imagination, and dive<br></br> deeper
              to amplify their business potential. Improve your<br></br> business
              strategies with our simple solutions to complex <br></br>connections.
            </p>
          </div>
          <div className="md:w-1/2 mb-0 md:mt-14 ">
            <img
              src="https://i.ibb.co/q55t6hK/globus-building.png"
              alt="Globus Building"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </section>

        <section className="container mt-0 py-24 text-center mb-0">
          <h2 className=" font-normal text-[40px]  text-blue-400 ">
            Technology You Can Trust
          </h2>
          {/* <br></br> */}
          <h2 className="font-normal text-[36px] mb-4 text-black">
            Providing virtual solutions to help people flourish
          </h2>
        </section>

        <div className="flex h-[526px] w-[1300px] bg-blue-500 text-white p-10 ml-32 ">
          <div className="flex-1 p-4">
            <h2 className="text-2xl font-normal ">
              Globussoft enables corporations and organizations to directly
              address the necessity of becoming fast, dependable, and
              innovative.
            </h2>
            <p className="mb-4">
              We help you transform businesses with our extensive range of
              solutions from Web, Desktop, and Mobile Applications along with
              Digital Marketing. With a gamut of software and maintenance
              services, we aim at introducing cutting edge technology to help
              enterprises leverage their capabilities.
            </p>
            <p className="mb-4">
              We are CMM – Level 3, Nasscom Certified, ISO 9001-2015 Certified,
              Microsoft Gold Certified Software Products Company. Our humongous
              experience of over a decade and technical expertise keeps us a
              century ahead of our competitors. With about 2 Million people
              consuming our services across 50 countries, we dedicatedly deliver
              quality results that compound over time. In the era of digital
              marketing and software solutions, Globussoft has unfolded as a key
              player globally. Give your dreams a pair of wings, and get ready
              to fly with us.
            </p>
          </div>
          <div className="flex-1 p-4 flex flex-col justify-center">
            <img src="../src/assets/img-new-dimensions-copy-min-1.png"></img>
          </div>
        </div>

        <div className="w-full h-863">
          <img src="../src/assets/bgn-shapes-lines.png"></img>
        </div>

        <div className="w-full h-[80] text-center text-[30px] ">
          <span className="text-blue-400">We Care Enough To </span>
          <br></br>
          <span>Deliver Our Best</span>
        </div>

        <div className="w-full h-[48] text-center text-[16px] mt-4">
          <span>
            Globussoft aims at constantly developing itself and accepting
            challenges
          </span>
          <br></br>
          <span>
            to provide the best services that cater to the needs of its
            customers.
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex justify-between">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    READ MORE
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    REACH US
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex h-[1120px] w-full bg-gray-200">
          <div className="flex-1 bg-white  pb-48 flex items-center justify-center">
            <img
              src="../src/assets/photo_2019-12-18_14-14-51-copy.jpg"
              alt="Certifications"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-1 bg-white p-10 flex flex-col gap-10">
            <h1 className="text-4xl font-bold text-gray-800">
              What does Globussoft Offer?
            </h1>
            <p className="text-lg text-gray-600">
              We aim at providing faster and more reliable services to help
              business and society move ahead with technology.
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col items-center">
                <img
                  src="https://img.icons8.com/ios/50/000000/checklist.png"
                  alt="Development & Design"
                  className="w-20 h-20"
                />
                <h2 className="text-2xl font-bold text-gray-800">
                  Development & Design
                </h2>
                <p className="text-gray-600 text-center">
                  With our user-friendly & malleable designing strategies, we
                  provide development solutions to all IT services.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://img.icons8.com/ios/50/000000/online-marketing.png"
                  alt="Digital Marketing"
                  className="w-20 h-20"
                />
                <h2 className="text-2xl font-bold text-gray-800">
                  Digital Marketing
                </h2>
                <p className="text-gray-600 text-center">
                  Establish the best online presence for your business with our
                  automation platforms and digital strategies.
                </p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col items-center">
                <img
                  src="https://img.icons8.com/ios/50/000000/mobile-app.png"
                  alt="Mobile Solutions"
                  className="w-20 h-20"
                />
                <h2 className="text-2xl font-bold text-gray-800">
                  Mobile Solutions
                </h2>
                <p className="text-gray-600 text-center">
                  Alter your approach towards your business activities by
                  getting insights and manage your work remotely.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <img
                  src="https://img.icons8.com/ios/50/000000/startup.png"
                  alt="Companion To Startups"
                  className="w-20 h-20 mb-[20px] p-0 left-0"
                />
                <h2 className="text-2xl font-bold text-gray-800">
                  Companion To Startups
                </h2>
                <p className="text-gray-600 text-center">
                  We infuse our innovative expertise with your ideas and
                  imagination to help your brainchild come into life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[177px] w-full text-center ">
          <span className="text-[42px] text-grey-400">
            We Are An Assembly of
          </span>
          <br></br>
          <span className="text-[42px] text-blue-400">
            Our Strategic Business Units
          </span>
        </div>

        <div className="w-full h-[360px] bg-white flex justify-center gap-9 ">
          <div className="w-[850px] h-[340px] bg-white border-2 p-5 text-center">
            <span className="text-[32px] mb-15">
              Growth of Business & Distribution Units
            </span>
            <br></br>
            <span className="text-[24px] text-blue-400 mt-12 ">
              Winning intent with strategy implementation
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span className="text-[20px] mt-16 ">
              Globussoft has launched its business across various Strategic
              Business Units to focus better on specific market segments. We
              have an expert team in marketing, operations, finance, HR, and
              digital marketing. All work directly together to help in
              accomplishing customer goals and become more successful than ever.
            </span>
          </div>
          <div className="w-[400px] h-[340px] bg-gray-500">IMG</div>
        </div>

        <div className="w-full h-[250px] text-center mt-36 mb-0">
          <span className="text-[45px] text-black">
            Meet Our <span className="text-[45px] text-blue-400">Clients</span>
          </span>
          <br></br>
          <span className="text-[16px] ">
            They have been accrediting our services for years
          </span>
        </div>

        <div className="flex items-center ml-28 mb-0">
          <div className="bg-white rounded-lg shadow-md p-6 ">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Profile Picture"
                className="w-12 h-12 rounded-full "
              />

              <div className="ml-4">
                <p className="text-gray-600 text-sm">
                  Very Professional Individuals,Will never hesitate to
                  <br></br>
                  work with their Team again
                </p>
                <h4 className="text-lg font-medium text-gray-800">
                  Jenny Wilson
                </h4>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Profile Picture"
                className="w-12 h-12 rounded-full "
              />

              <div className="ml-4">
                <p className="text-gray-600 text-sm">
                  Very Professional Individuals,Will never hesitate to
                  <br></br>
                  work with their Team again
                </p>
                <h4 className="text-lg font-medium text-gray-800">
                  Jenny Wilson
                </h4>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Profile Picture"
                className="w-12 h-12 rounded-full "
              />

              <div className="ml-4">
                <p className="text-gray-600 text-sm">
                  Very Professional Individuals,Will never hesitate to
                  <br></br>
                  work with their Team again
                </p>
                <h4 className="text-lg font-medium text-gray-800">
                  Jenny Wilson
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span>
            ______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
          </span>
        </div>

        <div className="w-full h-[90px] text-center">
          <span className="text-[32px]">
            Our <span className="text-blue-400">Facts and Figures</span>
          </span>
          <br></br>
          <span className="text-[32px]">Justify Why We are The Best </span>
        </div>

        <div className="flex items-center mt-36 gap-28 ml-32">
          <div>
            <span className="text-[40px] text-blue-400 font-extrabold">
              75%
            </span>
            <br></br>
            <span>Senior Developers</span>
          </div>
          <div>
            <span className="text-[40px] text-blue-400 font-extrabold">
              18550+
            </span>
            <br></br>
            <span className="text-[20px]">Global Clients</span>
          </div>
          <div>
            <span className="text-[40px] text-blue-400 font-extrabold">
              97%
            </span>
            <br></br>
            <span className="text-[20px]">Customer Recommendations</span>
          </div>
          <div>
            <span className="text-[40px] text-blue-400 font-extrabold">
              98%
            </span>
            <br></br>
            <span className="text-[20px]">Customer needs accomplished</span>
          </div>
          <div>
            <span className="text-[40px] text-blue-400 font-extrabold">
              3570+
            </span>
            <br></br>
            <span className="text-[20px]">Projects Delivered</span>
          </div>
          <div>
            <span className="text-[40px] text-blue-400 font-extrabold">
              87+
            </span>
            <br></br>
            <span className="text-[20px]">Countries Reached</span>
          </div>
        </div>

        <div className="w-full h-[400px] mt-28 text-center">
          <div>
            <span className="text-[50px]">Our Partners In</span>
            <br></br>
            <span className="text-[50px] text-blue-400">Business</span>
            <br></br>
            <span className="text-[17px]">
              Our partners are our treasured assets and the life- force behind
              our <br></br>corporation, who have been with us through our decade
              of excellence by <br></br>virtue of our commitment and passion.
            </span>
          </div>
        </div>

        <div className="flex items-center h-[234px] w-full gap-20">
          <div>
            <span className="text-[32px] ml-36">Experience</span>
            <br></br>
            <span className="text-[36px] font-extrabold text-blue-400 ml-40">
              Digital Innovation
            </span>
          </div>

          <div>
            <span>
              We weave imagination and innovation together to breathe life
              <br></br> into our clients’ ideas. Unlock value into your business
              dreams,<br></br> and let us drive success into your path. Contact
              us for further<br></br> information. Our Experienced Business
              Analyst team will get<br></br> back with a Strategic Development
              plan.
            </span>
          </div>

          <div>
            <button
              type="button"
              className="rounded-full w-[173px] bg-blue-400 px-3 py-5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ml-14"
            >
              Request a Quote
            </button>
          </div>
        </div>

        <footer class="w-full h-[420px] bg-blue-500 text-white">
          <div class="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
            <div class="w-full px-4 md:w-1/2 lg:px-0">
              <h1 class="max-w-sm text-3xl font-bold">
                Subscribe to our Newsletter
              </h1>
              <form
                action=""
                class="mt-4 inline-flex w-full items-center md:w-3/4"
              >
                <input
                  class="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                />
                <button
                  type="button"
                  class="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </form>
            </div>
            <div class="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3 mb-32">
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-2xl font-extrabold text-white ">Discover</p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-white">
                  <li>Products</li>
                  <li>Jobs @ Globussoft</li>
                  <li>Blogs</li>
                  
                </ul>
              </div>
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-2xl font-extrabold text-white ">Get in Touch</p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-white">
                  <li>+91 8767115115</li>
                  <li>0788 4083007</li>
                  <li>080 43707075</li>
                  
                </ul>
              </div>
              <div class="mb-8 lg:mb-0">
                <p class="mb-6 text-2xl font-extrabold text-white ">Social Networks</p>
                <ul class="flex flex-col space-y-4 text-[14px] font-medium text-white">
                  <li>globussoftsupport</li>
                  <li>support@globussoft.com</li>
                  
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-4" />
          <div class="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
            <div class="inline-flex items-center">
              <svg
                width="40"
                height="46"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                ></path>
              </svg>
              <span class="ml-4 text-[14px] font-normal">Copyright © 2006-2024 Globussoft Technologies.</span>
            </div>
            <div class="mt-4 md:mt-0 flex items-center ">
              <p class="text-sm font-medium text-white ">
                <span className="mr-5">Home</span>
                <span className="ml-5">About Us</span>
                <span className="ml-5">Career</span>
                <span className="ml-5">Contact Us</span>
                <span className="ml-5">Partner with Us</span>
                <span className="ml-5">Privacy Policy</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
