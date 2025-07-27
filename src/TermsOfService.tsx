import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './components/SEO';

const TermsOfService = () => {
  const navigate = useNavigate();
  return (
    <>
      <SEO 
        title="Terms of Service"
        description="Read CodByt's terms of service to understand the terms and conditions governing the use of our services, website, and software solutions."
        keywords="terms of service, terms and conditions, legal terms, CodByt terms, service agreement"
        url="https://codbyt.com/terms"
        type="website"
        tags={['Terms', 'Legal', 'Service Agreement', 'Conditions']}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-black dark:via-gray-900 dark:to-gray-900">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2 cursor-pointer select-none">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">CodByt</span>
            </div>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors duration-200"
            >
              Back to Home
            </button>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 text-gray-800 dark:text-gray-100">
            <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
            <div className="space-y-6 text-base leading-relaxed">
              <p>These Terms and Conditions govern the use of each of the websites located at, or linked to, the URLs www.codbyt.com and related services offered on the site; the information provided on the sites and the ability to register in our database, receive newsletters, and promotional emails; as well as any related services offered on the site. By using the site, you accept and agree to be bound and abide by these terms and conditions. If you do not want to agree to these terms and conditions, you must not access or use the site. These terms and conditions are effective as of the date of posting and may be modified at any time. Any such terms or conditions are signed by CodByt ("CodByt," "we" or "us").</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-2">Copyright and Trademark</h2>
              <p>The contents of all material available on our Sites are copyrighted by CodByt unless otherwise indicated. All rights are reserved and content may not be reproduced, downloaded, disseminated, or transferred, in any form or by any means, except with the prior written agreement of CodByt or as indicated below. Users may download pages or other content for their own personal use on a single computer, but no part of such content may be otherwise or subsequently reproduced, downloaded, disseminated, or transferred, in any form or by any means, except with the prior written agreement of, and with express attribution to, CodByt. You agree that you are only authorized to visit, view, and to retain a copy of pages of the Sites for your own personal use, and that you shall not duplicate, download, publish, modify, or otherwise distribute the material on the Sites for any purpose other than for personal use unless otherwise specifically authorized by us to do so.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-2">Disclaimer</h2>
              <p>We make available our Sites and the information and services contained herein "as is." While CodByt makes every effort to present accurate and reliable information on our Sites, CodByt does not endorse, approve, or certify such information, nor does it guarantee the accuracy, completeness, efficacy, or timeliness of such information. Use of such information is voluntary, and reliance on it should only be undertaken after an independent review of its accuracy, completeness, efficacy, and timeliness. Reference herein to any specific commercial product, process, or service by trade name, trademark, service mark, manufacturer, or otherwise does not constitute or imply endorsement, recommendation, or favoring by CodByt.</p>
              <p>At certain places on our Sites, live "links" to other Internet addresses can be accessed. Such external Internet addresses contain information created, published, maintained, or otherwise posted by institutions or organizations independent of CodByt. CodByt does not endorse, approve, certify, or control these external sites and does not guarantee the accuracy, completeness, efficacy, or timeliness of information located at such sites. Use of any information obtained from such sites is voluntary, and reliance on it should only be undertaken after an independent review of its accuracy, completeness, efficacy, and timeliness.</p>
              <p>CodByt assumes no responsibility for consequences resulting from the use of the information contained herein, or from the use of the information obtained at linked sites, or in any respect for the content of such information. CodByt is not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use, reference to, reliance on, or performance of such information.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
              <p>In no event shall CodByt be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this software, even if advised of the possibility of such damage.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-2">Governing Law</h2>
              <p>These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which CodByt operates, without regard to its conflict of law provisions.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:info@codbyt.com" className="text-blue-600 underline">info@codbyt.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService; 