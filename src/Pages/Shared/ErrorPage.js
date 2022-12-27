import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-full p-16  text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-100">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            We couldn't find that page
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Looks like we couldn't find that page. Please try again or contact
            an administrator if the problem persists.
          </p>
          <Link to="/">
            <PrimaryButton classes="text-white px-8 py-4 text-xl rounded-lg">
              Back to Home
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
