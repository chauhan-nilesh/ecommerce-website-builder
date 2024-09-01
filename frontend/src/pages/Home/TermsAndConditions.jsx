import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-9">
      <header className="text-center mb-5">
        <h1 className="text-4xl font-bold text-black">Terms and Conditions</h1>
      </header>
      <section className="bg-white p-8 mx-8 lg:mx-28 rounded-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-600 text-lg">
            Welcome to [Your Company Name]. These terms and conditions outline the rules and regulations for the use of [Your Company Name]'s Website, located at [your-website-url].
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Acceptance of Terms</h2>
          <p className="text-gray-600 text-lg">
            By accessing this website we assume you accept these terms and conditions. Do not continue to use [Your Company Name] if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Cookies</h2>
          <p className="text-gray-600 text-lg">
            We employ the use of cookies. By accessing [Your Company Name], you agreed to use cookies in agreement with the [Your Company Name]'s Privacy Policy.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. License</h2>
          <p className="text-gray-600 text-lg">
            Unless otherwise stated, [Your Company Name] and/or its licensors own the intellectual property rights for all material on [Your Company Name]. All intellectual property rights are reserved. You may access this from [Your Company Name] for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. User Comments</h2>
          <p className="text-gray-600 text-lg">
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. [Your Company Name] does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of [Your Company Name],its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, [Your Company Name] shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Governing Law</h2>
          <p className="text-gray-600 text-lg">
            These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </div>
        <Link to="/" className="text-center">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">Back to Home</button>
        </Link>
      </section>
    </div>
  );
};

export default TermsAndConditions;
