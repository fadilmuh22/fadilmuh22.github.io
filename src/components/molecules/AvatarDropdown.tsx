import { useState } from 'react';
import ProfileImage from 'src/assets/profile.jpg';

export const AvatarDropdown = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex items-center md:order-1 relative">
      <button
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-2 "
        onClick={handleDropDown}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-16 h-16 rounded-full"
          src={ProfileImage}
          alt="fadilmuh22"
        />
      </button>
      <div
        className={`z-50 absolute right-0 top-16 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${
          isOpen ? 'block' : 'hidden'
        }`}
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            Fadil Muh
          </span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
            fadilmuh2002@gmail.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
