/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-start p-4 overflow-y-auto">
      <div className="relative bg-gray-800 w-full max-w-4xl mx-auto my-8 p-8 rounded-2xl shadow-2xl border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white dark:hover:text-white transition-colors duration-200 cursor-pointer"
          aria-label="Close privacy policy"
        >
          <FaTimes size={24} className="hover:scale-110 transition-transform" />
        </button>

        <div className="prose dark:prose-invert max-w-none">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#c3590e] mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-white">Effective Date: 07/23/2025</p>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <p className="text-sm leading-relaxed text-white">
                At RecoveryRx, we are committed to protecting your privacy and ensuring the confidentiality of your personal and health-related information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.recoveryrxclinic.com or interact with our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                1. Information We Collect
              </h2>
              <p className="text-white text-sm">
                We may collect the following types of information:
              </p>
              
              <h3 className="text-lg font-semibold text-[#c3590e] mt-4">Personal Information</h3>
              <ul className="space-y-2 pl-5 list-disc marker:text-[#c3590e] text-sm text-white">
                <li className="pl-2">Full name, email address, phone number, mailing address</li>
                <li className="pl-2">Date of birth or age</li>
                <li className="pl-2">Medical history, treatment preferences, or other health-related data (if submitted via forms)</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#c3590e] mt-4">Automatically Collected Information</h3>
              <ul className="space-y-2 pl-5 list-disc marker:text-[#c3590e] text-sm text-white">
                <li className="pl-2">IP address</li>
                <li className="pl-2">Browser type and operating system</li>
                <li className="pl-2">Pages visited and duration of visit</li>
                <li className="pl-2">Referring website and navigation paths</li>
              </ul>

              <h3 className="text-lg font-semibold text-[#c3590e] mt-4">Cookies & Tracking Technologies</h3>
              <p className="text-white text-sm">
                We use cookies and similar technologies to enhance your experience and understand how you interact with our website. You can disable cookies through your browser settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                2. How We Use Your Information
              </h2>
              <p className="text-white text-sm">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-[#c3590e] text-sm text-white">
                <li className="pl-2">Provide and manage medical or wellness services</li>
                <li className="pl-2">Schedule appointments or consultations</li>
                <li className="pl-2">Improve our website and user experience</li>
                <li className="pl-2">Respond to inquiries and requests</li>
                <li className="pl-2">Send administrative emails and updates</li>
                <li className="pl-2">Ensure compliance with legal and regulatory requirements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                3. Sharing Your Information
              </h2>
              <p className="text-white text-sm">
                We do not sell or rent your personal data. We may share your information only in the following situations:
              </p>
              <ul className="space-y-2 pl-5 list-disc marker:text-[#c3590e] text-sm text-white">
                <li className="pl-2">With healthcare providers and staff involved in your care</li>
                <li className="pl-2">With trusted third-party service providers who support our operations (e.g., website hosting, analytics)</li>
                <li className="pl-2">As required by law or to comply with legal obligations (e.g., court orders, subpoenas)</li>
                <li className="pl-2">In emergency situations where your health or safety is at risk</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                4. Data Security
              </h2>
              <p className="text-white text-sm">
                We use appropriate technical and organizational safeguards to protect your personal and health information from unauthorized access, disclosure, or misuse. This includes encryption, access controls, and secure server environments.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                5. HIPAA Compliance
              </h2>
              <p className="text-white text-sm">
                As a healthcare-focused organization, RecoveryRx complies with the Health Insurance Portability and Accountability Act (HIPAA) where applicable. We ensure the privacy and protection of any Protected Health Information (PHI) submitted through our platform or in-person services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                6. Your Rights
              </h2>
              <p className="text-white text-sm">You have the right to:</p>
              <ul className="space-y-2 pl-5 list-disc marker:text-[#c3590e] text-sm text-white">
                <li className="pl-2">Access and review your personal data</li>
                <li className="pl-2">Request corrections to inaccurate information</li>
                <li className="pl-2">Request deletion of your data, where applicable</li>
                <li className="pl-2">Withdraw consent for data processing</li>
                <li className="pl-2">Opt-out of non-essential communications</li>
              </ul>
              <p className="text-white text-sm mt-3">
                To exercise these rights, please contact us at info@recoveryrxclinic.com
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                7. Third-Party Links
              </h2>
              <p className="text-white text-sm">
                Our website may contain links to third-party sites or services. We are not responsible for the privacy practices of these sites. We recommend reviewing their privacy policies separately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                8. Children's Privacy
              </h2>
              <p className="text-white text-sm">
                Our website is not intended for children under 13. We do not knowingly collect personal data from children without parental consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                9. Updates to This Policy
              </h2>
              <p className="text-white text-sm">
                We may update this Privacy Policy from time to time. When we do, we will revise the "Effective Date" above and post the updated version on our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#c3590e] border-b border-gray-200 dark:border-gray-700 pb-2">
                10. Contact Us
              </h2>
              <p className="text-white text-sm">
                If you have any questions or concerns about this Privacy Policy or your personal information, please contact us at:
              </p>
              <div className="mt-4 text-sm text-white">
                <p className="font-semibold text-[#c3590e] mb-2">RecoveryRx</p>
                <div className="flex flex-col space-y-2">
                  <p className="text-white">Email: info@recoveryrxclinic.com</p>
                  <p className="text-white">Phone: 410-449-7007</p>
                  <p className="text-white">Website: www.recoveryrxclinic.com</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
