import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io5";
// import { BsInstagram, BsTwitter, BsGithub, BsDribble } from "react-icons/bs";
export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="grid w-full justify-between sm:flex md:grid-col-1 ">
          <div className="mt-5  ">
            <Link
              to="/"
              className="self-centered whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Shreyansh's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About " />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  100 js projects
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Shreyansh's blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us " />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/shreyansh12333"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal " />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Shreyansh's blog"
            year={new Date().getFullYear()}
          />
          <div className="">
            <Footer.Icon href="#" icon={IoLogoFacebook} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
