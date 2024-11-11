import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Layout({
    children
} : {children:React.ReactNode}) {

    return (
        <div className="flex flex-col justify-between min-h-screen">  
            <Navbar />
            <main className="dark flex-grow">  
                <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100 ">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}