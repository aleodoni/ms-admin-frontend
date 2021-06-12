import {UserIcon, LockClosedIcon} from '@heroicons/react/solid';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-medium-blue bg-opacity-30 ">
        <h2 className="mt-6 text-center text-4xl font-extrabold text-white">Admin</h2>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <div className="relative flex flex-column items-center w-full flex-wrap px-5">
            <span className="z-10 flex h-full absolute rounded text-base items-center justify-center pl-3">
                <UserIcon className="h-7 w-6 text-gray-200" aria-hidden="true"/>
              </span>
              <input 
                type="text" 
                placeholder="username" 
                id="username"
                name="username"
                required 
                className="py-3 placeholder-gray-500-300 text-blueGray-600 relative bg-medium-blue border-medium-blue text-white rounded-sm text-lg border focus:outline-none focus:ring-light-green focus:border-light-green  w-full pl-12"
              />
            </div>
            <div className="relative flex flex-column items-center w-full flex-wrap px-5 pt-10 pb-10">
              <span className="z-10 flex h-full absolute rounded text-base items-center justify-center pl-3">
                <LockClosedIcon className="h-7 w-6 text-gray-200" aria-hidden="true"/>
              </span>
              <input 
                type="password" 
                placeholder="password" 
                id="password"
                name="password"
                required 
                className="py-3 placeholder-gray-500-300 text-blueGray-600 relative bg-medium-blue border-medium-blue text-white rounded-sm text-lg border focus:outline-none focus:ring-light-green focus:border-light-green w-full pl-12"
              />
            </div>
            <div className="px-5 pb-8">
              <button
                type="submit"
                className="inline-flex justify-center w-full py-2 px-4 border border-transparent shadow-lg text-lg font-medium rounded-sm bg-light-green bg-opacity-80 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-800"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
