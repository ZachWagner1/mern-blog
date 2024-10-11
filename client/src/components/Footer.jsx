import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsTwitter, BsGithub } from 'react-icons/bs';

export default function FooterComponent() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link
                        to='/'
                        className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg text-white'>
                        Zach's
                        </span>
                        Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title='About' />
                            <Footer.Link href='https://github.com/zachWagner1/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                JS Projects
                            </Footer.Link>
                            <Footer.Link href='/about'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Zach's Blog
                            </Footer.Link>
                    </div>
                    <div>
                        <Footer.Title title='Follow Us' />
                            <Footer.Link href='https://github.com/zachWagner1/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Github
                            </Footer.Link>
                            <Footer.Link href='#'>
                                Discord
                            </Footer.Link>
                    </div>
                    <div>
                        <Footer.Title title='Legal' />
                            <Footer.Link href='#'>
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href='#'>
                                Terms &amp; Conditions
                            </Footer.Link>
                    </div>
                </div>
            </div>  
            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by="Zach's Blog" year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsTwitter}/>
                    <Footer.Icon href='https://github.com/zachWagner1/' icon={BsGithub}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}