import Header from "./Header";
import { useEffect } from 'react';
import { useFetchUser, useState } from "../hooks/useFetchUser";

export default function LandingPage() {
    const [pfp, setPfp] = useState('');

    useEffect(() => {
        useFetchUser().then((response) => {
            setPfp(response.data.profile_picture);
        }
        )
    })
    return (
        <>
            <Header />

            <div className="mainTitle">

            </div>

            <div className="content">

            </div>
        </>
    )

}