import React, { useEffect, useState } from "react";
import AppLayout from "../Layouts/AppLayout";
import AccountBox from "../components/AccountBox";
import ThemeLoader from "../components/Theme/ThemeLoader";
const MyAccount = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <AppLayout>
            <div className="my-account container mt-3">
                {loading ? <ThemeLoader /> :
                    Array?.from({ length: 20 })?.map((_, i) => (
                        <AccountBox className={"mb-3"} group={"group1"} key={i} id={i} />
                    ))
                }
            </div>
        </AppLayout>
    )
}

export default MyAccount;