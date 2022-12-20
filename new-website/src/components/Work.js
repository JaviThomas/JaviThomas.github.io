import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";

export default function Work() {
  return (
    <section id="work" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <div className="flex flex-col w-full mb-10">
            <a href="#work">
              <FontAwesomeIcon
                icon={faBusinessTime}
                className="container mx-auto flex py-10 md:flex-row items-center sm:text-7xl text-5xl font-medium title-font text-white"
              />
            </a>
            <h1
              id="typewriter"
              className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center"
            >
              My Work History
            </h1>
          </div>

          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">
                August 2021 - Present
              </time>
              <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-400 py-2.5">
                FullStack Engineer| Johnson & Johnson
              </h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Designed Enterprise Data Management Frontend in React.js with
                  Custom Components to allow for in house data management.
                  Created and maintained postgress data connection Api's in
                  Node.js and custom data parsing logic.
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Created and Maintained Tableau Dashboards, along with
                  associated data tables.
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Implemented Cusum based Application performance monitoring in
                  python. Improved visiblitiy of worst performing applicaitons
                  by ticket volume and type.
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Created and maintained SQL Queries with Hive and Impala.
                  Increased effectiveness of data usage and simplified query
                  process.
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Lead effort to connect backend api logs to AWS Opensearch
                  service using a kinesis firehose datastream. Provided easy
                  access to logs and application error tracking.
                </li>
              </ul>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">
                November 2020 - Febuary 2021
              </time>
              <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-400 py-2.5">
                Software Engineering Intern | Trimble Maps
              </h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Collected data from AWS S3, to parse HTTP requests with data
                  in URI, JSON and XML formats into a pandas Dataframe. Data was
                  used to improve monitoring and reduce error analysis time.
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Modified the exception handler class object to log request ID
                  which aided in determining root causes while helping eliminate
                  future exceptions.
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Part of a team to create a Blue/Green deployment system using
                  Jenkins Pipelines. Automated the update of tags in the
                  Auto-scaling Groups (ASGs) to pull the correct version of the
                  data from S3. Deployment time went from 20 staff hours to 3
                  clicks.
                </li>
              </ul>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">
                June 2019 - December 2019
              </time>
              <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-400 py-2.5">
                IT Co-Op with ServiceNow | Church & Dwight
              </h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Worked on ServiceNow Configuration, Automated Testing
                  Framework (ATF) test building, design of pages and widgets.
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Automated email notifications on project completion to
                  Managers and Associated Users.
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Resolved production issue tickets such as incorrect data and
                  user updates.
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Developed form designs and implemented changes to production
                  and development instances to increase communication flow
                  between teams.
                </li>
              </ul>
            </li>

            <li class="ml-4">
              <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time class="mb-1 text-sm font-normal leading-none text-fuchsia-800 dark:text-fuchsia-500">
                May 2018 - August 2018
              </time>
              <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-400 py-2.5">
                Product Management Internship | Iconectiv
              </h3>
              <ul class="list-disc px-4">
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Researched publicly accessible data to design competitor
                  analysis SWOT presentations.
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Designed and developed Live Financial dashboards with Tableau
                  and Excel; Boosted Upper Level Management productivity by
                  providing an 'at a glance' view of sales numbers and trends.
                </li>
                <li class="text-base font-normal text-gray-500 dark:text-gray-400 py-2.5">
                  Collaborated with the development team, sales and product
                  owner to prototype reports and dashboards to help
                  differentiate products viability and value in the market.
                  Prototypes were later built into the product.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
