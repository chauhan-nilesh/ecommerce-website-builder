import { Fragment, useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../store/auth'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const { token } = useAuth()

    return (
        <header className="bg-white shadow-sm">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-12 w-auto" src="/eazzy.png" alt="" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-orange-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <NavLink to="/" className={({ isActive }) => `text-sm font-semibold leading-6 ${isActive ? "text-orange-600" : " text-zinc-900"}`}>
                        Home
                    </NavLink>
                    <NavLink to="pricing" className={({ isActive }) => `text-sm font-semibold leading-6 ${isActive ? "text-orange-600" : " text-zinc-900"}`}>
                        Pricing
                    </NavLink>
                    <NavLink to="about-us" className={({ isActive }) => `text-sm font-semibold leading-6 ${isActive ? "text-orange-600" : " text-zinc-900"}`}>
                        About Us
                    </NavLink>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {token ?
                        <Link to="/seller/dashboard" className="text-sm font-semibold leading-6 text-zinc-900">
                            Account <span aria-hidden="true">&rarr;</span>
                        </Link>
                        :
                        <Link to="signup" className="text-sm font-semibold leading-6 text-orange-600">
                            Sign Up <span aria-hidden="true">&rarr;</span>
                        </Link>
                    }
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-orange-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-10 w-auto"
                                src="/eazzy.png"
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-orange-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-orange-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="pricing"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-50"
                                >
                                    <button onClick={() => setMobileMenuOpen(false)}>Pricing</button>
                                </Link>
                                <Link
                                    to="terms-and-conditions"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-50"
                                >
                                    <button onClick={() => setMobileMenuOpen(false)}>Terms & Conditions</button>
                                </Link>
                                <Link
                                    to="about-us"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-50"
                                >
                                    <button onClick={() => setMobileMenuOpen(false)}>About Us</button>
                                </Link>
                            </div>
                            <div className="py-6">
                                {token ?
                                    <Link
                                        to="/seller/dashboard"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-orange-50"
                                    >
                                        <button onClick={() => setMobileMenuOpen(false)}>
                                        Account
                                            </button>
                                    </Link>
                                    : <>
                                        <Link
                                            to="login"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-orange-600 hover:bg-orange-50"
                                        >
                                            <button onClick={() => setMobileMenuOpen(false)}>Log in</button>
                                        </Link>
                                        <Link
                                            to="signup"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base bg-orange-600 font-semibold leading-7 text-orange-50"
                                        >
                                            <button onClick={() => setMobileMenuOpen(false)}>Sign Up</button>
                                        </Link>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Header;