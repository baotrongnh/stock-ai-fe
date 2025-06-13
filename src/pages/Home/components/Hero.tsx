import { Button } from '@/components/ui/button';
import { Link } from "react-router";
import heroGif from "../../../assets/Hero_video.gif"

export default function Hero() {
    const ACCENT = "#33965d";
    const BORDER = '#237849'

    return (
        <main className="flex flex-col items-center justify-center flex-1  mt-30">
            <button
                className="mt-12 mb-9 px-6 py-2 rounded-full border font-bold hover:bg-opacity-10 transition"
                style={{
                    borderColor: BORDER,
                    color: ACCENT,
                    backgroundColor: "#f0f9f3",
                    fontWeight: '500',
                    transition: '0.2s',
                    cursor: 'pointer',
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = ACCENT + "22")}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = "#f0f9f3")}
            >
                Đừng để thị trường bỏ lỡ bạn!
            </button>
            <h1 className="text-3xl md:text-5xl leading-10 md:leading-14 font-semibold text-center mb-8">
                Khai Phá Sức Mạnh Đầu Tư Với <span>
                    <Link to='/' state={{ color: ACCENT }}>
                        <span style={{ color: ACCENT }}>Stock</span>Intel
                    </Link>
                </span>
                <br />
                <span style={{ color: ACCENT }}>Trợ Lý AI</span> Toàn Năng Của Bạn.
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mb-6 text-md">
                Với StockIntel, bạn nắm trong tay giải pháp AI đột phá, biến dữ liệu phức tạp thành quyết định đầu tư thông minh, nhanh chóng và hiệu quả hơn bao giờ hết.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2">
                    <span style={{ color: ACCENT }}>★</span>
                    <span>Tiết Kiệm 80% Thời Gian Phân Tích</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span style={{ color: ACCENT }}>★</span>
                    <span>Phát Hiện Cơ Hội Vượt Trội</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span style={{ color: ACCENT }}>★</span>
                    <span>Ra Quyết Định Tự Tin</span>
                </div>
            </div>
            <div className="w-72 mb-10">
                <Button
                    className="w-full py-7 bg-gradient-to-r from-green-400 to-green-700 font-bold text-md px-4 rounded-full cursor-pointer hover:opacity-90 transition"
                >
                    Dùng thử miễn phí →
                </Button>

            </div>


            <div className="w-[80%] h-[600px] rounded-xl overflow-hidden shadow-lg  ">
                <img
                    src={heroGif}
                    alt="Hero animation"
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>


        </main>
    )
}
