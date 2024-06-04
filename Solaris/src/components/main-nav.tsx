import { useEffect, useState } from "react";
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

interface NavbarProps {
  scrollToExplorar?: () => void;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ scrollToExplorar }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const [navigation, setNavigation] = useState<NavigationItem[]>([
    { name: 'Inicio', href: '/home', current: false },
    { name: 'Explorar', href: '#explorarRef', current: false },
    { name: 'Sobre nós', href: '/sobre-nos', current: false },
    { name: 'Galeria', href: '/gallery', current: false },
  ]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const updatedNavigation = navigation.map(item => ({
      ...item,
      current: item.href === currentPath,
    }));

    setNavigation(updatedNavigation);
  }, [currentPath]);

  const handleExploreClick = () => {
    const updatedNavigation = navigation.map(item => ({
      ...item,
      current: item.name === 'Explorar',
    }));

    setNavigation(updatedNavigation);
    if (currentPath === '/gallery') {
      navigate('/home#explorarRef');
    } else if (scrollToExplorar) {
      scrollToExplorar();
    }
  };

  return (
    <Disclosure as="nav" className={classNames("fixed top-0 w-full z-10 transition-opacity duration-300", isScrolled ? "bg-white opacity-100" : "bg-white bg-opacity-5")}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto"
                    src="/favicons/projectsolaris.png"
                    alt="project Solaris"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 bg-light-green-logo hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">abrir o menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item: NavigationItem) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        if (item.name === 'Explorar') {
                          e.preventDefault();
                          handleExploreClick();
                        }
                      }}
                      className={classNames(
                        item.current
                          ? 'text-black border-b-2 border-green-logo'
                          : 'text-gray-300 hover:text-black hover:border-b hover:border-gray-300',
                        'px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item: NavigationItem) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={(e) => {
                    if (item.name === 'Explorar') {
                      e.preventDefault();
                      handleExploreClick();
                    }
                  }}
                  className={classNames(
                    item.current
                      ? 'bg-green-logo text-white'
                      : 'text-gray-900 bg-light-green-logo',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
