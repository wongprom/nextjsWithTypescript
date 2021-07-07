import { Menu, Transition, Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
const HeadlessUi = () => {
  const data = [
    {
      q: 'what is React',
      a: 'Best thing',
    },
    {
      q: 'Why use Tailwind',
      a: 'Best thing ever',
    },
  ];
  return (
    <>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="rounded bg-yellow-800 text-white p-2">
              Open Me
            </Menu.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="flex flex-col">
                <Menu.Item disabled>
                  {({ active, disabled }) => (
                    <a
                      className={`${active && 'bg-blue-500'} ${
                        disabled && 'bg-gray-400 text-gray-600'
                      }`}
                    >
                      Disabled
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a className={`${active && 'bg-blue-500'}`}>Option 1</a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a className={`${active && 'bg-blue-500'}`}>Option 2</a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
      {/* //! ------------------ Disclosure ------------------*/}
      <div className="w-full px-4 pt-16">
        <div className="flex flex-col space-y-2 w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
          {data.map(({ q, a }) => (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{q}?</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {a}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeadlessUi;
