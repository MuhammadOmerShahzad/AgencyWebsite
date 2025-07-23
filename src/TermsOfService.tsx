import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
          <div className="space-y-6 text-base leading-relaxed">
            <p>These Terms and Conditions govern the use of each of the websites located at, or linked to, the URLs www.codeblend.com and related services offered on the site; the information provided on the sites and the ability to register in our database, receive newsletters, and promotional emails; as well as any related links (collectively, our “Sites”). Please read the following Terms and Conditions carefully.</p>
            <p>By using any one of our Sites, you understand and expressly agree to be legally bound by these Terms and Conditions and to follow these Terms and Conditions and all applicable laws and regulations governing our Sites. The Terms and Conditions shall supersede any subsequent terms or conditions included with any purchase order, whether or not such terms or conditions are signed by CodeBlend (“CodeBlend,” “we” or “us”).</p>
            <p>We reserve the right to change these Terms and Conditions at any time, effective immediately upon posting on our Sites. If you violate these Terms and Conditions, we may terminate your use of the Sites, bar you from future use of the Sites, and/or take appropriate legal action against you.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Copyright and Trademark Notice</h2>
            <p>The contents of all material available on our Sites are copyrighted by CodeBlend unless otherwise indicated. All rights are reserved and content may not be reproduced, downloaded, disseminated, or transferred, in any form or by any means, except with the prior written agreement of CodeBlend or as indicated below.</p>
            <p><strong>Permitted Use:</strong> Users may download pages or other content for their own personal use on a single computer, but no part of such content may be otherwise or subsequently reproduced, downloaded, disseminated, or transferred, in any form or by any means, except with the prior written agreement of, and with express attribution to, CodeBlend. You agree that you are only authorized to visit, view, and to retain a copy of pages of the Sites for your own personal use, and that you shall not duplicate, download, publish, modify, or otherwise distribute the material on the Sites for any purpose other than for personal use, unless otherwise specifically authorized by us to do so.</p>
            <p>You also agree not to deep-link to the site for any purpose, unless specifically authorized by us to do so.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-2">General Legal Notice and Liability Disclaimer</h2>
            <p>We make available our Sites and the information and services contained herein “as is.” While CodeBlend makes every effort to present accurate and reliable information on our Sites, CodeBlend does not endorse, approve, or certify such information, nor does it guarantee the accuracy, completeness, efficacy, or timeliness of such information. Use of such information is voluntary, and reliance on it should only be undertaken after an independent review by qualified experts.</p>
            <p>Reference herein to any specific commercial product, process, or service does not constitute or imply endorsement, recommendation, or favoring by CodeBlend.</p>
            <p>At certain places on this site, live “links” to other websites can be accessed. Such external sites contain information created, published, maintained, or otherwise posted by institutions or organizations independent of CodeBlend. CodeBlend does not endorse, approve, certify, or control these external sites and does not guarantee the accuracy, completeness, efficacy, or timeliness of information located at such sites. Use of any information obtained from such sites is voluntary, and reliance on it should only be undertaken after an independent review by qualified experts.</p>
            <p>CodeBlend assumes no responsibility for consequences resulting from the use of the information contained herein, or from the use of the information obtained at linked sites, or in any respect for the content of such information. CodeBlend is not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use, reference to, reliance on, or performance of such information.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-2">Severability</h2>
            <p>The invalidity or unenforceability of any particular provision of this Policy shall not affect the remaining provisions hereof, and this Policy shall be construed in all respects as if such invalid or unenforceable provision had been omitted.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 