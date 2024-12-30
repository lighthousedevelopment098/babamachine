import React from "react";

const MemberBenefits = () => {
  return (
    <div className="block p-6 bg-white rounded-lg shadow-md">
      <h3 className="heading text-xl font-bold mb-4">
        Those who have not registered as a member.
      </h3>
      <dl className="merit space-y-4">
        <div>
          <dt className="font-semibold text-blue-600">
            <span>Member benefits 01</span>
          </dt>
          <dd className="text-gray-700">
            <span>You can browse the sales price of used machines!</span>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-blue-600">
            <span>Member benefits 02</span>
          </dt>
          <dd className="text-gray-700">
            <span>
              Immediately receive notification of new arrivals of construction equipment by
              e-mail!
            </span>
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-blue-600">
            <span>Member benefits 03</span>
          </dt>
          <dd className="text-gray-700">
            <span>Information on used exhibition sales</span>
          </dd>
        </div>
      </dl>
      <p className="btn01 mt-6 text-center">
        <a
          href="https://www.machinelines.com/en/register"
          className="inline-block bg-primary text-white px-6 py-6 rounded-none shadow-md hover:bg-hoverprimary"
        >
          New member registration
        </a>
      </p>
    </div>
  );
};

export default MemberBenefits;
