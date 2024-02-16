import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function SocialLinks() {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin < FaLinkedin size={30} />
                </>
            ),
            href: 'https://ae.linkedin.com/in/dr-sabari-dey',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Instagram < FaInstagram size={30} />
                </>
            ),
            href: 'https://www.instagram.com/drsabaridey_obgyn/'
        },
        {
            id: 3,
            child: (
                <>
                    Mail < HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:foo@gmail.com',
            style: 'rounded-br-md'
        },
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
                        <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SocialLinks