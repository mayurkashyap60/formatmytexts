import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#27548A]">
        <div className="max-w-7xl sm:px-6 lg:px-1">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="sm:block">
                <div className="flex space-x-4">
                  <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Format My Text</a>
                  {/* <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">URL Shortner</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
