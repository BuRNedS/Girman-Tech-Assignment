import React from 'react';
import Searchbar from "@/components/search";
import { useSearchParams } from "next/navigation";
import { ObjectId } from "mongodb";
import useSWR from "swr";
import styles from "../styles/search.module.css"
import Cards from '@/components/cards';
import Link from 'next/link';
import No_Result from '@/components/no_result';

interface User {
        _id: ObjectId;
        first_name: string;
        last_name: string;
        city: string;
        contact_number: string;
}

const fetchUsers = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return response.json();
};

const Search_Query: React.FC = () => {
    const search = useSearchParams();
    const searchQuery = search ? search.get("q") : null;
    const encodedSearchQuery = encodeURI(searchQuery || "");

    const { data, error, isLoading } = useSWR<User[]>(
        `/api/search?q=${encodedSearchQuery}`,
        fetchUsers
    );

    return (
        <div className="flex flex-col">
            <header className={`${styles.header} fixed top-0 left-0 right-0 z-50 bg-white shadow-md`}>
                <div className={styles.logoParent}>
                    <div className={styles.logo}>
                        <Link href="/"><img className={styles.imageIcon} alt="" src="image.png" /></Link>
                        <div className={styles.text12}>
                            <b className={styles.girman}>Girman</b>
                            <div className={styles.technologies}>TECHNOLOGIES</div>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <img className={styles.magnifyingGlassIcon} alt="" src="magnifying-glass.svg" />
                        <div className={styles.wrapper1}>
                            <div className={styles.text13}>
                                <Searchbar />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto p-4 pt-[100px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-20">
                        {isLoading && <div className="col-span-full">Loading...</div>}
                        {error && <div className="col-span-full text-red-500">Error: {error.message}</div>}
                        {data && data.length === 0 && <div className="col-span-full">
                                <No_Result />
                        </div>}
                        {data && data.map((user: User) => (
                                <Cards key={user._id.toString()} user={user} />
                        ))}
                </div>
                </main>
        </div>
    );
};

export default Search_Query;