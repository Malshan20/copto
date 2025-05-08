"use client"

import { motion } from "framer-motion"
import { Cookie, Info, Settings, Clock } from "lucide-react"
import Link from "next/link"

export default function CookiesPolicyContent() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative">
      <div className="absolute -top-20 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50">
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Legal Information
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
              Cookies
            </span>{" "}
            Policy
          </h1>
          <p className="text-gray-300 text-lg mb-8">How we use cookies and similar technologies on our platform.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl"></div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-black/60 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 md:p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center mb-6 pb-6 border-b border-purple-500/20">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mr-4 mb-4 md:mb-0 w-fit">
                  <Cookie className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Cookies Policy</h2>
                  <p className="text-gray-400">Last updated: May 8, 2025</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none space-y-6">
                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Info className="h-5 w-5 mr-2 text-purple-400" />
                    1. Introduction
                  </h3>
                  <p className="text-gray-300">
                    This Cookies Policy explains how Copto ("we", "our", or "us") uses cookies and similar technologies
                    to recognize you when you visit our website, mobile application, and all related services
                    (collectively, the "Service"). It explains what these technologies are and why we use them, as well
                    as your rights to control our use of them.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Cookie className="h-5 w-5 mr-2 text-purple-400" />
                    2. What Are Cookies?
                  </h3>
                  <p className="text-gray-300">
                    Cookies are small data files that are placed on your computer or mobile device when you visit a
                    website. Cookies are widely used by website owners in order to make their websites work, or to work
                    more efficiently, as well as to provide reporting information.
                  </p>
                  <p className="text-gray-300 mt-2">
                    Cookies set by the website owner (in this case, Copto) are called "first-party cookies". Cookies set
                    by parties other than the website owner are called "third-party cookies". Third-party cookies enable
                    third-party features or functionality to be provided on or through the website (e.g., advertising,
                    interactive content, and analytics). The parties that set these third-party cookies can recognize
                    your computer both when it visits the website in question and also when it visits certain other
                    websites.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-purple-400" />
                    3. Why Do We Use Cookies?
                  </h3>
                  <p className="text-gray-300">
                    We use first-party and third-party cookies for several reasons. Some cookies are required for
                    technical reasons in order for our Service to operate, and we refer to these as "essential" or
                    "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our
                    users to enhance the experience on our Service. Third parties serve cookies through our Service for
                    advertising, analytics, and other purposes.
                  </p>
                  <p className="text-gray-300 mt-2">
                    The specific types of cookies served through our Service and the purposes they perform include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                    <li>
                      <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with
                      services available through our Service and to use some of its features, such as access to secure
                      areas. Because these cookies are strictly necessary to deliver the Service, you cannot refuse them
                      without impacting how our Service functions.
                    </li>
                    <li>
                      <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the
                      performance and functionality of our Service but are non-essential to their use. However, without
                      these cookies, certain functionality may become unavailable.
                    </li>
                    <li>
                      <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is
                      used either in aggregate form to help us understand how our Service is being used or how effective
                      our marketing campaigns are, or to help us customize our Service for you.
                    </li>
                    <li>
                      <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more
                      relevant to you. They perform functions like preventing the same ad from continuously reappearing,
                      ensuring that ads are properly displayed, and in some cases selecting advertisements that are
                      based on your interests.
                    </li>
                    <li>
                      <strong>Social Media Cookies:</strong> These cookies are used to enable you to share pages and
                      content that you find interesting on our Service through third-party social networking and other
                      websites. These cookies may also be used for advertising purposes.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-purple-400" />
                    4. How Long Do Cookies Stay on My Device?
                  </h3>
                  <p className="text-gray-300">
                    The length of time that a cookie remains on your device depends on whether it is a "persistent" or
                    "session" cookie. Session cookies last until you stop browsing, and persistent cookies last until
                    they expire or are deleted.
                  </p>
                  <p className="text-gray-300 mt-2">
                    Most of the cookies we use are persistent and will expire between 30 minutes and two years from the
                    date they are downloaded to your device. You can see the specific expiration date of each cookie in
                    your browser settings.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">5. How to Control and Delete Cookies</h3>
                  <p className="text-gray-300">
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                    preferences by clicking on the appropriate opt-out links provided in the cookie banner or cookie
                    policy on our Service.
                  </p>
                  <p className="text-gray-300 mt-2">
                    You can also set or amend your web browser controls to accept or refuse cookies. If you choose to
                    reject cookies, you may still use our Service, but your access to some functionality and areas of
                    our Service may be restricted. As the means by which you can refuse cookies through your web browser
                    controls vary from browser to browser, you should visit your browser's help menu for more
                    information.
                  </p>
                  <p className="text-gray-300 mt-2">
                    In addition, most advertising networks offer you a way to opt out of targeted advertising. If you
                    would like to find out more information, please visit{" "}
                    <a
                      href="http://www.aboutads.info/choices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300"
                    >
                      http://www.aboutads.info/choices/
                    </a>{" "}
                    or{" "}
                    <a
                      href="http://www.youronlinechoices.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300"
                    >
                      http://www.youronlinechoices.com
                    </a>
                    .
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">6. Do You Serve Targeted Advertising?</h3>
                  <p className="text-gray-300">
                    Third parties may serve cookies on your computer or mobile device to serve advertising through our
                    Service. These companies may use information about your visits to this and other websites in order
                    to provide relevant advertisements about goods and services that you may be interested in. They may
                    also employ technology that is used to measure the effectiveness of advertisements. This can be
                    accomplished by them using cookies or web beacons to collect information about your visits to this
                    and other sites in order to provide relevant advertisements about goods and services of potential
                    interest to you. The information collected through this process does not enable us or them to
                    identify your name, contact details, or other personally identifying details unless you choose to
                    provide these.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">7. How Often Will You Update This Cookies Policy?</h3>
                  <p className="text-gray-300">
                    We may update this Cookies Policy from time to time in order to reflect, for example, changes to the
                    cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this
                    Cookies Policy regularly to stay informed about our use of cookies and related technologies.
                  </p>
                  <p className="text-gray-300 mt-2">
                    The date at the top of this Cookies Policy indicates when it was last updated.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">8. Where Can I Get Further Information?</h3>
                  <p className="text-gray-300">
                    If you have any questions about our use of cookies or other technologies, please contact us at{" "}
                    <a href="mailto:privacy@copto.com" className="text-purple-400 hover:text-purple-300">
                      privacy@copto.com
                    </a>
                    .
                  </p>
                </section>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-500/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <p className="text-gray-400 mb-4 md:mb-0">
                    For more information about our legal policies, please visit our{" "}
                    <Link href="/legal" className="text-purple-400 hover:text-purple-300">
                      Legal Center
                    </Link>
                    .
                  </p>
                 
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
