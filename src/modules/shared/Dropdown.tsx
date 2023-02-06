import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function DropDown() {
  const [selected, setSelected] = useState<string>("India");

  const updateOpposition = (country: string) => {
    setSelected(country);
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {selected ?? 'Opposition'}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium "
                >
                <input
                  id="default-checkbox"
                  type="checkbox"
                  name="playerCheckbox"
                  value={selected}
                  onChange={() => updateOpposition("India")}
                  className={`${classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                  )} w-4 h-4 mr-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                />
                  India
                </label>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium "
                >
                <input
                  id="default-checkbox"
                  type="checkbox"
                  name="playerCheckbox"
                  value={selected}
                  onChange={() => updateOpposition("Australia")}
                  className={`${classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                  )} w-4 h-4 mr-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                />
                  Australia
                </label>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium "
                >
                <input
                  id="default-checkbox"
                  type="checkbox"
                  name="playerCheckbox"
                  value={selected}
                  onChange={() => updateOpposition("England")}
                  className={`${classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                  )} w-4 h-4 mr-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                />
                  England
                </label>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 text-sm font-medium "
                  >
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="playerCheckbox"
                    value={selected}
                    onChange={() => updateOpposition("England")}
                    className={`${classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )} w-4 h-4 mr-3 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                  />
                    New Zealand
                  </label>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
