import React from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const AboutModal = ({ user, handleModalSubmit }) => {
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-black bg-white">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handleModalSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-3 text-sm ">
              <label className="block text-sm">User Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md bg-gray-100  text-gray-900 "
                defaultValue={user?.displayName}
              />
            </div>

            <div className="space-y-3 text-sm">
              <label className="block text-sm">Email</label>
              <input
                defaultValue={user?.email}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <div className="space-y-3 text-sm">
              <label className="block text-sm">University</label>
              <input
                type="text"
                name="university"
                placeholder="University Name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>

            <div className="space-y-3 text-sm">
              <label className="block text-sm">Address</label>
              <textarea
                type="text"
                name="address"
                placeholder="Enter Your Addres Address"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-green-400"
              />
            </div>
            <PrimaryButton
              type="submit"
              classes="block w-full p-3 text-center rounded-sm text-white"
            >
              Submit
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
