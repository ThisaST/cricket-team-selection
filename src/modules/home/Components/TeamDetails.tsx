import React from 'react';
import DropDown from '../../shared/Dropdown';

const names = [
  'TM Dilshan',
  'DPMD Jayawardene',
  'ST Jayasuriya',
  'MDKJ Perera',
  'I Udana',
  'AD Mathews',
  'BKG Mendis',
  'KC Sangakkara',
  'DM de Silva',
  'MD Shanaka',
  'SL Malinga',
  'HMRKB Herath'
];

function TeamDetails() {
  return (
    <>
      <div className="lg:flex items-center justify-center w-full">
        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
          <div className="flex items-start justify-between w-full mb-4">
            <div className="flex w-full items-center border-b border-gray-200 pb-6">
              <div className="pl-3 w-full">
                <p className="text-xl font-medium leading-5 text-gray-800">
                  Sri Lanka
                </p>
                <p className="text-sm leading-normal pt-2 text-gray-500">
                  36 Team Members
                </p>
              </div>
            </div>
          </div>
          {names.map((player) => (
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium "
              >
                {player}
              </label>
            </div>
          ))}
        </div>
        <div></div>
        <DropDown />
      </div>

      <div className="lg:flex items-right justify-center w-full">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </>
  );
}

export default TeamDetails;
