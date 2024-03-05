import './mainbar.css'
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AddBoxOutlined, ArrowCircleDownOutlined, ContrastOutlined, WidgetsOutlined } from "@mui/icons-material";

const TABLE_HEAD = [
    "Brand",
    "Discription",
    "Member",
    "Categories",
    "Tag",
    "Next meeting",
];

const TABLE_ROWS = [
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
        name: "Spotify",
        discription: "lorem10nrgaliughuliangljdanglting",
        tags: "#DigitalIndia"
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
        name: "Amazon",
        discription: "lorem10nrgaliughuliangljdanglting",
        tags: "#DigitalIndia"
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
        name: "Pinterest",
        discription: "lorem10nrgaliughuliangljdanglting",
        tags: "#DigitalIndia"
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
        name: "Google",
        discription: "lorem10nrgaliughuliangljdanglting",
        tags: "#DigitalIndia"
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
        name: "netflix",
        discription: "lorem10nrgaliughuliangljdanglting",
        tags: "#DigitalIndia"
    },
];

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Mainbar = () => {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="main-navbar">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div className="product-bar">
                            <Typography variant="h3" color="blue-gray" className="text-xl px-3">
                                Products
                            </Typography>
                        </div>
                        <div className="search-bar">
                            <div className="container flex mx-auto">
                                <div className="flex border-2 rounded">
                                    <button className="flex items-center justify-right px-4 border-r float-end">
                                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                                            </path>
                                        </svg>
                                    </button>
                                    <input type="text" className="px-4 py-2 w-80" placeholder="Search..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <hr />
            <div className="filter">
                <div className="all-filter mt-3">
                    {/* start all Brands */}
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                <WidgetsOutlined />All Brands
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <form method="POST" action="#">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    type="submit"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block w-full px-4 py-2 text-left text-sm'
                                                    )}
                                                >
                                                    Sign out
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </form>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    {/* end all Brands */}

                    {/* dark all Brands */}
                    <Menu as="div" className="relative inline-block text-left ms-3">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                <ContrastOutlined />Dark
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                dark
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Light
                                            </a>
                                        )}
                                    </Menu.Item>


                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    {/* dark all Brands */}

                    {/* sort start */}
                    <Menu as="div" className="relative inline-block text-left ms-3 bottom-1">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Sort
                                <ChevronDownIcon
                                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                />
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <Menu.Item key={option.name}>
                                            {({ active }) => (
                                                <a
                                                    href={option.href}
                                                    className={classNames(
                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    {option.name}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    {/* sort start */}

                    {/* filter start */}
                    <Menu as="div" className="relative inline-block text-left ms-3 bottom-1">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Sort
                                <ChevronDownIcon
                                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                />
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
                        </Transition>
                    </Menu>
                    {/* filter start */}
                </div>


                <div className="all-meeting mt-3">

                    {/* new meeting */}
                    <Menu as="div" className="relative inline-block text-left ms-3">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                <AddBoxOutlined />Meeting
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                New Meeting
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    {/* end new meeting */}

                    {/* start import */}
                    <Menu as="div" className="relative inline-block text-left ms-3">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                <ArrowCircleDownOutlined />Import and export
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                        </Transition>
                    </Menu>
                    {/* end import */}

                </div>

            </div>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            (
                                {
                                    img,
                                    name,
                                    discription,
                                    tags,
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <Avatar
                                                    src={img}
                                                    alt={name}
                                                    size="md"
                                                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                />
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold"
                                                >
                                                    {name}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {discription}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex -space-x-1 overflow-hidden">
                                                <img
                                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                                <img
                                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                                <img
                                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                                <img
                                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            kjfabnli
                                        </td>
                                        <td>
                                            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                                #Badge
                                            </span>
                                            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                                #DigitalIndia
                                            </span>
                                        </td>
                                        <td>
                                            kjfabnli
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Button variant="outlined" size="sm">
                    Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton variant="outlined" size="sm">
                        1
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        2
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        3
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        ...
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        8
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        9
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        10
                    </IconButton>
                </div>
                <Button variant="outlined" size="sm">
                    Next
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Mainbar;
