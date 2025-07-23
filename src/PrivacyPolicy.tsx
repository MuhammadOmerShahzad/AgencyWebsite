import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-black dark:via-gray-900 dark:to-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2 cursor-pointer select-none">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CodeBlend</span>
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Home
          </button>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 text-gray-800 dark:text-gray-100">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          <div className="space-y-6 text-base leading-relaxed">
            <p>The website ("Site") for CodeBlend LLC (“CodeBlend”, “We”, “Our”, “Us” or “Company”) was created to provide software development services (the "Services").</p>
            <p>The privacy of our Site visitors ("you," "your," or "user") is important to us, and in order to protect your personal information, we have implemented the following Privacy Policy with provisions that apply to the collection of data by CodeBlend, its subsidiaries, and its affiliates.</p>
            <p>Our Privacy Policy discloses the type and nature of information we collect and how we use it, as well as the choices you can make about the way your information is collected and used. We also explain how any requests for personal or personally identifiable information will be used. By exploring and using CodeBlend’s Site and/or Services, and by submitting information to CodeBlend, you signify acceptance to the terms of our Privacy Policy.</p>
            <p>If you have questions or concerns regarding this statement, you should first contact us at <a href="mailto:sales@codeblend.com" className="text-blue-600 underline">sales@codeblend.com</a>.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Updates and Changes to the Privacy Policy</h2>
            <p>In the event of a change in this policy, a revised Privacy Policy will be posted to our Website, and the “Updated” date will be changed. If the revised Privacy Policy contains a material change to how we collect or use personal information, notice of the change will be emailed to you or posted on the Website’s home page.</p>
            <p>Please revisit this page to familiarize yourself with changes to the Privacy Policy. You agree to accept posting of a revised Privacy Policy as described herein as actual notice to you of such revised Privacy Policy. Your continued use of the Services after such posting constitutes the collection and use of your information as described in the then-current Privacy Policy.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
            <p>We are required by law, regulation, or securities reasons to ask for certain personal information in order to provide our Services to you. CodeBlend makes commercially reasonable best efforts to maintain the confidentiality, integrity, and security of our clients’ personal information.</p>
            <p>You may choose to provide additional information during subsequent visits to the Site, but keep in mind that some of this information will be required if you wish to partake in the Services.</p>
            <p>When visiting our website, we also store every instance of access in a log file and therefore, the following Data are stored in this process:</p>
            <ul className="list-disc ml-6">
              <li>Computer or mobile device information</li>
              <li>Website from which our domain is accessed and website usage information</li>
              <li>Operating system of your computer</li>
              <li>Country from which our website is accessed</li>
              <li>Name of your internet provider</li>
              <li>Name and URL of the Data accessed</li>
              <li>Date and time of access</li>
              <li>IP address of the accessing computer</li>
            </ul>
            <p>Keeping client information secure, and using it only as our Users want us to, are matters of principle for all of us at CodeBlend. With this in mind, here is our commitment to each and every User:</p>
            <ul className="list-disc ml-6">
              <li>Except as you may otherwise expressly approve, we will limit the collection and use of client and user information to what we believe would be useful to service your accounts, administer our business, or to tell you about our Services;</li>
              <li>We will restrict employee access to client and user information to those who need to know in order to provide Services to you;</li>
              <li>We will educate our employees according to our internal policies to reinforce the importance of confidentiality and client and user privacy;</li>
              <li>We will maintain commercially reasonable and customary security standards and procedures to protect information about you; and</li>
              <li>We will respond quickly to your request to correct inaccurate information.</li>
            </ul>
            <p>CodeBlend will also gather the names and email addresses of users who contact us through the Site with questions about our company or lending platform. We collect this information for the sole purpose of responding to such inquiries and do not store the contact information unless requested to do so, as in the case of job applicants who submit resumes.</p>
            <p>Any data including, but not limited to, your name, address, telephone number, email address, and biometric information submitted to CodeBlend during the identity verification process is handled securely by our third-party, specialist identity verification provider. CodeBlend retains an ID and status of the process for our information and does NOT store, or use, any of the personally identifiable information (PII) submitted as part of that process.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-2">How and Why We Gather Information</h2>
            <p>When you register for an account for the Services or at any later time, we collect certain personal information from you to open an account, transact business, communicate with you, verify your identity, and fulfill legal and regulatory requirements. We call this your “Profile.” From time to time, we may request additional information (e.g., through surveys) to help us further assess your needs and preferences.</p>
            <p>If you choose to provide such information, during registration or otherwise, you are giving CodeBlend the permission to use and store it consistent with this Privacy Policy. We may also obtain your personal information from your transactions with us or other Users through the Services, or from third parties such as credit reporting agencies. If we combine or associate information from other sources with personal information that you provide directly to us through or in connection with the Services, we will treat the combined information as personal information in accordance with this Privacy Policy.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Cookies</h2>
            <p>When you visit the Website, whether or not you register for an account, we may send one or more cookies...</p>
            {/* ...continue with the rest of the provided Privacy Policy content, using similar formatting... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 