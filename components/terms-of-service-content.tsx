"use client"

import { motion } from "framer-motion"
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function TermsOfServiceContent() {
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
              Terms of
            </span>{" "}
            Service
          </h1>
          <p className="text-gray-300 text-lg mb-8">Please read these terms carefully before using our platform.</p>
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
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Terms of Service</h2>
                  <p className="text-gray-400">Last updated: May 8, 2025</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none space-y-6">
                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-purple-400" />
                    1. Acceptance of Terms
                  </h3>
                  <p className="text-gray-300">
                    By accessing or using the Copto platform, website, mobile application, API, and all related services
                    (collectively, the "Service"), you agree to be bound by these Terms of Service. If you do not agree
                    to these terms, please do not use our Service.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-purple-400" />
                    2. Eligibility
                  </h3>
                  <p className="text-gray-300">
                    You must be at least 18 years old to use our Service. By using our Service, you represent and
                    warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.
                  </p>
                  <p className="text-gray-300 mt-2">
                    You also represent and warrant that you are not a resident of a country or jurisdiction where access
                    to or use of our Service would be contrary to law or regulation.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Scale className="h-5 w-5 mr-2 text-purple-400" />
                    3. Account Registration and Security
                  </h3>
                  <p className="text-gray-300">
                    To use certain features of our Service, you may need to create an account. You agree to provide
                    accurate, current, and complete information during the registration process and to update such
                    information to keep it accurate, current, and complete.
                  </p>
                  <p className="text-gray-300 mt-2">
                    You are responsible for safeguarding your account credentials and for all activities that occur
                    under your account. You agree to notify us immediately of any unauthorized use of your account or
                    any other breach of security.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">4. Cryptocurrency Trading</h3>
                  <p className="text-gray-300">
                    Our Service allows you to trade cryptocurrencies. You acknowledge and agree that:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                    <li>Cryptocurrency trading involves significant risk, including the possible loss of principal.</li>
                    <li>Cryptocurrency prices are highly volatile and can change rapidly without notice.</li>
                    <li>
                      We do not provide investment advice, and any information provided through our Service should not
                      be construed as such.
                    </li>
                    <li>
                      You are solely responsible for your trading decisions and for understanding the risks involved.
                    </li>
                    <li>We are not responsible for any losses you may incur as a result of your trading activities.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">5. Fees and Payments</h3>
                  <p className="text-gray-300">
                    We charge fees for certain services, as described on our website. We reserve the right to change our
                    fee structure at any time. Changes to fees will be posted on our website and will take effect
                    immediately.
                  </p>
                  <p className="text-gray-300 mt-2">
                    You are responsible for paying all fees associated with your use of our Service. You are also
                    responsible for all taxes applicable to your transactions.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">6. Prohibited Activities</h3>
                  <p className="text-gray-300">
                    You agree not to engage in any of the following prohibited activities:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                    <li>Violating any applicable law, regulation, or these Terms.</li>
                    <li>
                      Using our Service for any illegal purpose, including money laundering, terrorist financing, or
                      fraud.
                    </li>
                    <li>
                      Attempting to interfere with, compromise the system integrity or security, or decipher any
                      transmissions to or from the servers running our Service.
                    </li>
                    <li>Using any robot, spider, crawler, scraper, or other automated means to access our Service.</li>
                    <li>
                      Circumventing or bypassing measures we may use to prevent or restrict access to our Service.
                    </li>
                    <li>
                      Engaging in market manipulation, such as pump and dump schemes, wash trading, spoofing, or
                      layering.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-purple-400" />
                    7. Limitation of Liability
                  </h3>
                  <p className="text-gray-300">
                    To the maximum extent permitted by law, Copto and its affiliates, officers, employees, agents,
                    partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or
                    punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                    intangible losses, resulting from:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                    <li>Your access to or use of or inability to access or use the Service.</li>
                    <li>Any conduct or content of any third party on the Service.</li>
                    <li>Any content obtained from the Service.</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">8. Disclaimer of Warranties</h3>
                  <p className="text-gray-300">
                    Our Service is provided on an "as is" and "as available" basis. Copto and its affiliates, officers,
                    employees, agents, partners, and licensors expressly disclaim all warranties of any kind, whether
                    express or implied, including, but not limited to the implied warranties of merchantability, fitness
                    for a particular purpose, and non-infringement.
                  </p>
                  <p className="text-gray-300 mt-2">
                    We make no warranty that the Service will meet your requirements, be available on an uninterrupted,
                    secure, or error-free basis, or that defects will be corrected.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">9. Indemnification</h3>
                  <p className="text-gray-300">
                    You agree to defend, indemnify, and hold harmless Copto and its affiliates, officers, employees,
                    agents, partners, and licensors from and against any claims, liabilities, damages, losses, and
                    expenses, including without limitation reasonable attorney's fees and costs, arising out of or in
                    any way connected with your access to or use of the Service or your violation of these Terms.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">10. Termination</h3>
                  <p className="text-gray-300">
                    We may terminate or suspend your account and access to the Service immediately, without prior notice
                    or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                  </p>
                  <p className="text-gray-300 mt-2">
                    Upon termination, your right to use the Service will immediately cease. If you wish to terminate
                    your account, you may simply discontinue using the Service.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">11. Governing Law</h3>
                  <p className="text-gray-300">
                    These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                    which Copto is established, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">12. Changes to Terms</h3>
                  <p className="text-gray-300">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                    revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                    What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p className="text-gray-300 mt-2">
                    By continuing to access or use our Service after any revisions become effective, you agree to be
                    bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to
                    use the Service.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">13. Contact Information</h3>
                  <p className="text-gray-300">
                    If you have any questions about these Terms, please contact us at{" "}
                    <a href="mailto:legal@copto.com" className="text-purple-400 hover:text-purple-300">
                      legal@copto.com
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
