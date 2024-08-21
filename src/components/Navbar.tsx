import { motion } from "framer-motion";
import Link from "next/link";
import { signOut, useSession } from 'next-auth/react';
export default function Navbar() {

    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        // User is authenticated, you can access the session data
        console.log(session);
    }
    console.log("session", session, status);

    const handleClickScroll = () => {
        const element = document.getElementById('about');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - 50,
                behavior: 'smooth'
            });
        }
    };

    const handleClickScroll2 = () => {
        const element = document.getElementById('projects');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - 50,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <motion.header
                className="flex justify-center items-center w-full fixed px-4 top-0 z-10 pt-4"
                initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                animate={{ transform: 'translateY(0px)', opacity: 100 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
            >
                <nav style={{ boxShadow: '0 0 30px 2.5px #0a0a0a' }} className="flex h-14 max-w-[46rem] w-screen bg-gradient-to-br from-primary/90 to to-secondary/90 backdrop-blur-md rounded-lg border-1 border-accent px-4">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center">
                            <img draggable={false} className="h-7 w-7 rounded-full" src="https://images.guns.lol/Hcs87.jpg" />
                            <button onClick={handleClickScroll} className="p-2 duration-300 text-text text-lg font-semibold hover:bg-secondary font-leaguespartan rounded-md">
                                About
                            </button>
                            <button onClick={handleClickScroll2} className="p-2 duration-300 text-text text-lg font-semibold hover:bg-secondary font-leaguespartan rounded-md">
                                Projects
                            </button>
                        </div>
                        <div className="min-[330px]:flex hidden flex-row gap-2 items-center">
                            {status !== 'authenticated' ?
                                <Link href={'/login'}>
                                    <p draggable={false} className="p-2 duration-300 text-text text-lg font-semibold hover:bg-secondary font-leaguespartan rounded-md">
                                        Log In
                                    </p>
                                </Link>
                                :
                                <>
                                    <p draggable={false} className="p-2 duration-300  text-indigo-600 text-lg font-semibold font-leaguespartan rounded-md">
                                        Hi {session?.user?.email}
                                    </p>
                                    <p onClick={() => signOut()} draggable={false} className="cursor-pointer p-2 duration-300 text-text text-lg font-semibold hover:bg-secondary font-leaguespartan rounded-md">
                                        Log out
                                    </p>
                                </>
                            }
                        </div>
                    </div>
                </nav>
            </motion.header>
        </>
    );
}
