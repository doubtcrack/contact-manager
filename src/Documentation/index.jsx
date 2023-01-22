import React from "react";
import { img1, img2, img3, img4, img5, img6, img7, img8 } from "./images";
const Documentation = () => {
  return (
    <div className="m-4 md:lg:w-4/5 text-left">
      <div className="mt-7 px-0 py-4 align-start">
        {" "}
        <section>
          {" "}
          <h4 class="mt-0 mb-4  pl-2 font-sans font-bold text-xl">
            Introduction
          </h4>
          <div className="pt-4 mt-4 space-y-4 border-t border-gray-200 "></div>
          <p class=" md:lg:right-0 bg-red-100 p-4 my-4 rounded">
            ReactJS is a JavaScript library for building user interfaces, it
            allows for reusable UI components and efficient updates with virtual
            DOM.
          </p>
          <p class=" bg-green-100 p-4 my-4 rounded">
            TypeScript adds optional type checking to improve code structure and
            catch errors.
          </p>
          <p class=" bg-rose-100 p-4 my-4 rounded">
            Tailwind CSS provides a set of pre-defined CSS classes that can be
            used to quickly and easily style elements.
          </p>
          <p class=" bg-sky-100 p-4 my-4 rounded">
            Chart.js is a JavaScript library for creating charts and graphs. It
            is simple to use and has a wide range of chart types, including bar
            charts, line charts, and pie charts.
          </p>
          <p class=" bg-fuchsia-100 p-4 my-4 rounded">
            Redux manages application state and allows for easy data updates and
            organization.
          </p>
          <p class=" p-4 my-4 rounded">
            Together, these tools provide a powerful and efficient development
            experience.
          </p>
        </section>
        <section>
          <h4 class="mt-0 mb-4  pl-2 font-sans font-bold text-xl">
            PreRequisite
          </h4>
          <div className="pt-4 mt-4 space-y-4 border-t border-gray-200 "></div>

          <ul className="list-disc pl-10">
            <li>
              <p className=" mt-0 mb-4 font-sans font-bold text-slate-500">
                Nodejs
              </p>
              <p className=" mt-0 mb-4  font-sans">
                Make sure to have the Node.js installed & running in your
                computer. If you already have installed Node on your computer,
                you can skip this step if you have pre-installed Nodejs.
              </p>
            </li>
            <li>
              <p className=" mt-0 mb-4  font-sans font-bold text-slate-500">
                Git
              </p>
              <p className=" mt-0 mb-4 font-sans">
                Make sure to have the Git installed globally & running on your
                computer. If you already have installed git on your computer,
                you can skip this step.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h4 class="mt-12 mb-4  pl-2 font-sans font-bold text-xl">
            How to Use
          </h4>
          <div className="  border-t border-gray-200 "></div>
          <p class=" p-4 my-4 rounded">Let's Install this Project.</p>

          <h3 class="mt-0 mb-4  pl-2 font-sans font-bold text-large">Steps</h3>
          <ul className="list-decimal pl-10">
            <li>
              <p className=" mt-0 mb-4  font-sans">Open the command prompt.</p>
            </li>
            <li>
              <p className=" mt-0 mb-4 font-sans">
                Clone the <b>contact-manager </b> project from Github to your
                local machine by running the command{" "}
                <i className="bg-purple-50  rounded">
                  git clone https://github.com/doubtcrack/contact-manager.git
                </i>{" "}
                in your terminal.
              </p>
            </li>
            <li>
              <p className=" mt-0 mb-4 font-sans">
                Change into the project directory by running the command{" "}
                <i className="bg-purple-50  rounded">cd contact-manager</i>.
              </p>
            </li>
            <li>
              <p className=" mt-0 mb-4 font-sans">
                Run the command{" "}
                <i className="bg-purple-50  rounded">npm install</i> to install
                all the necessary dependencies for the project.
              </p>
            </li>
            <li>
              <p className=" mt-0 mb-4 font-sans">
                Once the dependencies are installed, you can start the
                development server by running the command{" "}
                <i className="bg-purple-50  rounded">npm start</i>. This will
                start the server and open the application in your default
                browser.
              </p>
            </li>
            <li>
              <p className=" mt-0 mb-4 font-sans">
                The application should be running on{" "}
                <i className="bg-purple-50  rounded">http://localhost:3000/</i>.
              </p>
            </li>
            <li>
              <p className=" mt-0 mb-4 font-sans">
                Now you are able to interact and make changes to the project.
              </p>
            </li>
            <li>
              <p className=" mt-0 mb-4 font-sans">
                Once you are done with the changes, you can run the command{" "}
                <i className="bg-purple-50  rounded">npm run build</i> to create
                a production-ready version of the application.
              </p>
            </li>
            <li>
              <p className=" mt-0 mb-4 font-sans">
                you can now deploy the build folder to your server.
              </p>
            </li>
          </ul>
          <div className="bg-gray-100 p-4 my-4 rounded">
            Note: Make sure to check the package.json file for any additional
            setup or customization instructions.
          </div>
        </section>
        <section>
          {" "}
          <h4 class="mt-0 mb-4  pl-2 font-sans font-bold text-xl">OverView</h4>
          <div className="pt-4 mt-4 space-y-4 border-t border-gray-200 "></div>
          <section class="overflow-hidden text-gray-700 ">
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
              <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap lg:w-1/2 md:w-1/2 ">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={img1}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap lg:w-1/2 md:w-1/2 ">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={img2}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap lg:w-1/2 md:w-1/2 ">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={img3}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap lg:w-1/2 md:w-1/2 ">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={img4}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap lg:w-1/2 md:w-1/2 ">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={img5}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap lg:w-1/2 md:w-1/2 ">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={img6}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap lg:w-1/2 md:w-1/2 ">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={img7}
                    />
                  </div>
                </div>
                <div class="flex flex-wrap lg:w-1/2 md:w-1/2 ">
                  <div class="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full rounded-lg"
                      src={img8}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Documentation;
