import { Link } from "react-router";

const ACCENT = "#33965d";

export default function Header() {
    return (
        <header className="bg-white shadow fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link to='/' className='text-2xl font-bold' state={{ color: ACCENT }}>
                        <span  style={{ color: ACCENT }}>Stock</span>Intel
                    </Link>
                </div>
                <nav className="flex items-center space-x-9">
                    {/*
                        Using an array of objects to map through for navigation links
                    */}
                    {[
                        { to: "/about", label: "Giới thiệu" },
                        { to: "/docs", label: "Tài liệu hướng dẫn" },
                        { to: "/pricing", label: "Bảng giá" },
                        { to: "/blog", label: "Blog" },
                        { to: "/podcast", label: "Podcast" },
                        { to: "/contact", label: "Liên hệ" },
                    ].map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="font-semibold text-gray-700 transition-colors underline-offset-8 hover:underline"
                            style={{
                                transition: "color 0.2s",
                                textDecorationColor: ACCENT
                            }}
                            // Mouse over and out events to handle color change
                            onMouseOver={e => {
                                e.currentTarget.style.color = ACCENT;
                                e.currentTarget.style.textDecorationColor = ACCENT;
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.color = "#374151";
                                e.currentTarget.style.textDecorationColor = ACCENT;
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center space-x-3">
                    <Link
                        to="/login"
                        className="px-5 py-2 rounded-full border font-semibold transition"
                        style={{
                            borderColor: ACCENT,
                            color: ACCENT,
                        }}
                        onMouseOver={e => (e.currentTarget.style.backgroundColor = ACCENT + "22")}
                        onMouseOut={e => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                        Đăng nhập
                    </Link>
                </div>
            </div>
        </header>
    );
}
