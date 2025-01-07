import { items, projects } from "../frontendConstants";

const Home = () => {
  return (
    <div>
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
                Know About Us
              </p>
              <div className="h-1 w-12 bg-primary mt-2"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Empowering the Elderly for a Brighter Future
            </h1>

            <p className="text-lg text-gray-600">
              We are dedicated to supporting senior citizens in Old Age Homes in
              Pune, Maharashtra. Our mission is to enhance the quality of life
              for the elderly by providing access to essential services in
              health, social welfare, and financial stability. Through regular
              events and awareness sessions, we inform residents about relevant
              government schemes, pension benefits, and healthcare options.
            </p>

            <button className="mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
              Learn more
            </button>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Happy elderly person celebrating"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
        </div>
      </section>
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4 md:px-8 lg:flex lg:items-center lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="inline-block">
              <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
                What We Do
              </p>
              <div className="h-1 w-12 bg-primary mt-2"></div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mt-4">
              We organize events and awareness sessions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We care for the elderly in Shivner Pratishthan Old Age Homes,
              enhancing their health, happiness, and quality of life.
            </p>

            {/* Dynamically render items */}
            <ul className="mt-8 space-y-6">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-primary mr-4 text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/elderly-support.jpg"
                  alt="Elderly support"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          {/* Section Heading */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-600 uppercase">
              Projects We Have Done
            </p>
            <h2 className="text-4xl text-gray-900 font-normal mt-4">
              We are Creating sustainable developed society, for everyone and
              forever.
            </h2>
          </div>

          {/* Project Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group">
                <div className="h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-left">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                  <button className="mt-4 px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded shadow hover:bg-gray-100">
                    See more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
