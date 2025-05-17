import Navbar from "../components/Navbar";

export default function Layout({children} : Readonly<{children: React.ReactNode}>) {
    return (
        <main style={{fontFamily: "my-font"}}>
            <Navbar/>
            {children}
        </main>
    )
}