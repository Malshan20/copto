"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Globe, Lock } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyContent() {
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
              Privacy
            </span>{" "}
            Policy
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Our commitment to protecting your privacy and personal information.
          </p>
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
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Privacy Policy</h2>
                  <p className="text-gray-400">Last updated: May 8, 2025</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none space-y-6">
                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-purple-400" />
                    1. Introduction
                  </h3>
                  <p className="text-gray-300">
                    This Privacy Policy describes how Copto ("we", "our", or "us") collects, uses, and shares your
                    personal information when you use our website, mobile application, API, and all related services
                    (collectively, the "Service").
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-purple-400" />
                    2. Information We Collect
                  </h3>
                  <p className="text-gray-300">
                    We collect several types of information from and about users of our Service:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                    <li>
                      <strong>Personal Information:</strong> This includes information that can be used to identify you,
                      such as your name, email address, phone number, and government-issued ID for KYC purposes.
                    </li>
                    <li>
                      <strong>Financial Information:</strong> This includes information about your cryptocurrency
                      holdings, trading history, and wallet addresses.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> This includes information about how you use the Service, such as your
                      IP address, browser type, device information, and pages visited.
                    </li>
                    <li>
                      <strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies to
                      collect information about your browsing activities.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-purple-400" />
                    3. How We Use Your Information
                  </h3>
                  <p className="text-gray-300">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                    <li>Provide, maintain, and improve the Service</li>
                    <li>Process transactions and send related information</li>
                    <li>Verify your identity and prevent fraud</li>
                    <li>Send you technical notices, updates, security alerts, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Communicate with you about products, services, offers, and events</li>
                    <li>Monitor and analyze trends, usage, and activities in connection with the Service</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-purple-400" />
                    4. How We Share Your Information
                  </h3>
                  <p className="text-gray-300">We may share your information with:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                    <li>
                      <strong>Service Providers:</strong> We share information with third-party vendors, consultants,
                      and other service providers who need access to such information to carry out work on our behalf.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in
                      response to valid requests by public authorities.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> We may share information in connection with a merger, sale of
                      company assets, financing, or acquisition of all or a portion of our business.
                    </li>
                    <li>
                      <strong>With Your Consent:</strong> We may share information with your consent or at your
                      direction.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">5. Your Rights and Choices</h3>
                  <p className="text-gray-300">
                    Depending on your location, you may have certain rights regarding your personal information, such as
                    the right to access, correct, delete, or restrict processing of your personal information.
                  </p>
                  <p className="text-gray-300 mt-2">
                    To exercise these rights, please contact us at privacy@copto.com. We will respond to your request
                    within a reasonable timeframe.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">6. Data Security</h3>
                  <p className="text-gray-300">
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, disclosure, alteration, and destruction.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">7. International Data Transfers</h3>
                  <p className="text-gray-300">
                    Your information may be transferred to, and processed in, countries other than the country in which
                    you are resident. These countries may have data protection laws that are different from the laws of
                    your country.
                  </p>
                  <p className="text-gray-300 mt-2">
                    We have taken appropriate safeguards to ensure that your personal information will remain protected
                    in accordance with this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">8. Data Retention</h3>
                  <p className="text-gray-300">
                    We retain your personal information for as long as necessary to fulfill the purposes for which we
                    collected it, including for the purposes of satisfying any legal, regulatory, tax, accounting, or
                    reporting requirements.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">9. Children's Privacy</h3>
                  <p className="text-gray-300">
                    Our Service is not directed to children under the age of 18. We do not knowingly collect personal
                    information from children under 18. If you are a parent or guardian and you are aware that your
                    child has provided us with personal information, please contact us.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">10. Changes to This Privacy Policy</h3>
                  <p className="text-gray-300">
                    We may update this Privacy Policy from time to time. If we make material changes, we will notify you
                    by email or through the Service prior to the change becoming effective.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">11. Contact Information</h3>
                  <p className="text-gray-300">
                    If you have any questions about this Privacy Policy, please contact us at{" "}
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
