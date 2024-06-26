import Link from "next/link";


const Navbare =({ href, title}: any) => {
    return (
        <Link
        href={href}
        className="block py-2 pl-3  pr-4 text-TextColor1 rounded md:p-0"
        >
            {title}
        </Link>
    );
};
export default Navbare;