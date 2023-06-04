import Head from "next/head";

import {
  AiFillInstagram,
  AiFillLinkedin,
 
  AiFillGithub
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Img from "../public/Img.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/Sae.png";
import web2 from "../public/wthr.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyhk</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1QP4P_mzlz6mO37jVPP5BW8HzFR4JgeHX/view?usp=sharing"
                  target='_blank'
                  rel="noreferrer"
                  
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Haisam Khurshid
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            As a full stack developer, my passion lies in creating innovative and seamless digital solutions. With a strong foundation in both frontend and backend development, I possess the expertise to handle every aspect of the development process.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/haisamk18" target='_blank' rel="noreferrer"><AiFillGithub /></a>
              <a href="https://www.linkedin.com/in/haisam-khurshid/" target='_blank' rel="noreferrer"><AiFillLinkedin /></a>
              <a href="https://www.instagram.com/haixsam/" target='_blank' rel="noreferrer"><AiFillInstagram /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={Img} layout="fill" objectFit="cover" alt="haisampic"/>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies/clubs </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including Frontend Development,
              Backend Development and Database Integration.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="haisampic" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Frontend Development
              </h3>
              <p className="py-2">
              Building responsive and user-friendly web interfaces using modern frontend technologies and Frameworks such as React, Next.js, and JavaScript.
              </p>
              <p className="py-2">
              Implementing interactive features and dynamic content to enhance the user experience. 
              </p>
              <p className="py-2">
              Optimizing websites for performance and cross-browser compatibility. 
              </p>
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">HTML/CSS</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="haisampic" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Backend Development
              </h3>
              <p className="py-2">
              Developing robust server-side applications using frameworks like Node.js, Python, or Ruby on Rails.
              </p>
              <p className="py-2">
              Designing and implementing RESTful APIs for seamless communication between frontend and backend systems.  
              </p>
              <p className="py-2">
              Integrating third-party services and APIs to extend the functionality of web applications. 
              </p>
              <h4 className="py-4 text-teal-600"> Tools I Use</h4>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Express.js</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">php</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} alt="dn" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Database Integration</h3>
              <p className="py-2">
              Designing and implementing database schemas to efficiently store and retrieve data.
              </p>
              <p className="py-2">
              Working with SQL and NoSQL databases, such as MySQL, PostgreSQL, MongoDB, or Firebase.
              </p>
              <p className="py-2">
              Implementing data models and performing database queries to support application requirements.
              </p>
              <h4 className="py-4 text-teal-600"> Tools I Use</h4>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">Firebase</p>
              <p className="text-gray-800 py-1">SQL</p>
              
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-1 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 container">
              <Image
                className="rounded-lg object-contain image"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="jcned"
              />
               <div class="middle">
                <a class="text" href="https://www.saezhcet.org/" target='_blank'>View Demo</a>
                <a class="text" href="" target='_blank'>View Code(Private)</a>
               </div>
              
            </div>
            <div className="basis-1/3 flex-1 container">
              <Image
                className="rounded-lg object-contain image"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="jcned"
              />
               <div class="middle">
                <a class="text" href="https://wthrapp.vercel.app/" target='_blank'>View Demo</a>
                <a class="text" href="https://github.com/haisamk18/wthrapp" target='_blank'>View Code</a>
               </div>
              
            </div>
            
            
            
          </div>
        </section>
      </main>
    </div>
  );
}
