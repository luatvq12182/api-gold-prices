/**
    0: Giá Vàng miếng hôm nay
    1: Giá Vàng nhẫn trơn hôm nay
    2: Giá Vàng trang sức hôm nay
    3: Giá Vàng đồng xu hôm nay
    4: Giá Vàng trắng hôm nay
 */
const GOLDS_BY_CATEGORY = {
    // Giá Vàng miếng hôm nay
    "Vàng miếng SJC Ngọc Thẩm": 1,
    "Vàng miếng SJC theo lượng": 1,
    "Vàng miếng SJC PNJ": 1,
    "Vàng miếng SJC BTMC": 1,
    "Vàng miếng DOJI Hà Nội lẻ": 1,
    "Vàng miếng DOJI HCM lẻ": 1,
    "Vàng miếng Phúc Long DOJI": 1,
    "Vàng miếng SJC BTMH": 1,
    "Vàng miếng SJC Phú Quý": 1,
    "Vàng miếng SJC Mi Hồng": 1,
    "1 Lượng vàng 9999 Phú Quý": 1,
    "Vàng Kim Bảo 9999": 1,
    "Vàng Phúc Lộc Tài 9999": 1,
    "Vàng miếng PNJ - Phượng Hoàng": 1,
    "Phú quý 1 lượng 99.9": 1,
    "Vàng 999 Mi Hồng": 1,
    "Vàng 985 Mi Hồng": 1,
    "Vàng 980 Mi Hồng": 1,
    "Vàng 9999 Bảo Tín Mạnh Hải": 1,
    "Vàng 999 Bảo Tín Mạnh Hải": 1,
    "Vàng 950 Mi Hồng": 1,
    // Giá Vàng nhẫn trơn hôm nay
    "Vàng nhẫn tròn Phú Quý 9999": 2,
    "Vàng nhẫn trơn 9999 PNJ": 2,
    "Vàng nhẫn trơn BTMC": 2,
    "Vàng nhẫn ép vỉ Rồng Thăng Long BTMH": 2,
    "Vàng nhẫn ép vỉ Kim Gia Bảo": 2,
    "Nhẫn Tròn 9999 Hưng Thịnh Vượng": 2,
    "Vàng nhẫn SJC 9999 theo phân": 2,
    "Vàng nhẫn SJC 9999 theo chỉ": 2,
    "Vàng nhẫn trơn 9999 Ngọc Thẩm": 2,
    // Giá Vàng trang sức hôm nay
    "Vàng trang sức 999.9": 4,
    "Vàng trang sức 999 Phú Quý": 3,
    "Trang sức vàng Rồng Thăng Long 9999": 3,
    "Trang sức vàng Rồng Thăng Long 999": 3,
    "Vàng Trang sức 9999 PNJ": 3,
    "Vàng Trang sức 24K PNJ": 3,
    "Vàng trang sức 99": 3,
    "Vàng nữ trang 99": 3,
    "Vàng trang sức 98": 3,
    "Nữ trang 68%": 3,
    "Nữ trang 41.7%": 3,
    "Vàng 999.9 phi SJC": 3,
    // Giá Vàng đồng xu hôm nay
    "Vàng đồng xu": 4,
    // Giá Vàng trắng hôm nay
    "Vàng Trắng Ngọc Thẩm": 5,
};
/**
    1: Giá Vàng 9999 hôm nay
    2: Giá Vàng 24k hôm nay
    3: Giá Vàng 99 hôm nay
    4: Giá Vàng 10k hôm nay
    5: Giá Vàng Ý hôm nay
    6: Giá Vàng 999 hôm nay
    7: Giá Vàng 916 hôm nay
    8: Giá Vàng 18k hôm nay
    9: Giá Vàng 14k hôm nay
    10: Giá Vàng 98 hôm nay
    11: Giá Vàng 985 hôm nay
    12: Giá Vàng 980 hôm nay
    13: Giá Vàng 950 hôm nay
    14: Giá Vàng 750 hôm nay
    15: Giá Vàng 680 hôm nay
    16: Giá Vàng 610 hôm nay
    17: Giá Vàng 990 hôm nay
 */
const GOLDS_BY_AGE = {
    // vang 9999
    "Vàng miếng SJC Ngọc Thẩm": [1, 2],
    "Vàng SJC 1 chỉ": [1, 2],
    "Vàng SJC 2 chỉ": [1, 2],
    "Vàng SJC 5 chỉ": [1, 2],
    "Vàng miếng SJC theo lượng": [1, 2],
    "Vàng miếng SJC PNJ": [1, 2],
    "Vàng miếng SJC BTMC": [1, 2],
    "Vàng miếng DOJI Hà Nội lẻ": [1, 2],
    "Vàng miếng DOJI HCM lẻ": [1, 2],
    "Vàng miếng Phúc Long DOJI": [1, 2],
    "Vàng miếng SJC BTMH": [1, 2],
    "Vàng miếng SJC Phú Quý": [1, 2],
    "Vàng miếng SJC Mi Hồng": [1, 2],
    "Vàng nhẫn tròn Phú Quý 9999": [1, 2],
    "1 Lượng vàng 9999 Phú Quý": [1, 2],
    "Vàng Kim Bảo 9999": [1, 2],
    "Vàng Phúc Lộc Tài 9999": [1, 2],
    "Vàng miếng PNJ - Phượng Hoàng": [1, 2],
    "Vàng miếng Rồng Thăng Long": [1, 2],
    "Vàng nhẫn trơn BTMC": [1, 2],
    "Bản vị vàng BTMC": [1, 2],
    "Vàng nhẫn ép vỉ Rồng Thăng Long BTMH": [1, 2],
    "Vàng nhẫn ép vỉ Kim Gia Bảo": [1, 2],
    "Vàng đồng xu": [1, 2],
    "Vàng trang sức 999.9": [1, 2],
    "Nhẫn Tròn 9999 Hưng Thịnh Vượng": [1, 2],
    "Vàng nhẫn SJC 9999 theo phân": [1, 2],
    "Trang sức vàng Rồng Thăng Long 9999": [1, 2],
    "Vàng nhẫn SJC 9999 theo chỉ": [1, 2],
    "Vàng Trang sức 9999 PNJ": [1, 2],
    "Trang sức vàng SJC 9999": [1, 2],
    "Vàng nhẫn trơn 9999 Ngọc Thẩm": [1, 2],
    "Vàng 9999 Bảo Tín Mạnh Hải": [1, 2],
    // vang 24k
    "Vàng 24k (nghìn/chỉ)": [2, 6],
    "Vàng Trang sức 24K PNJ": [2],
    "Vàng ta Ngọc Thẩm": [2, 17],
    // vang 99
    "Vàng trang sức 99": [3],
    "Vàng nữ trang 99": [3],
    "Vàng trang sức SJC 99%": [3],
    // vang 10k
    "Nữ trang 41.7%": [4],
    "Vàng 416 (10K)": [4],
    // vang y
    "Vàng 18K Ngọc Thẩm": [5, 8],
    "Vàng Trắng Ngọc Thẩm": [5],
    "Vàng 680 (16.3K)": [5],
    "Nữ trang 68%": [5],
    "Vàng 375 (9K)": [5],
    // vang 999
    "Vàng trang sức 999 Phú Quý": [6],
    "Phú quý 1 lượng 99.9": [6],
    "Vàng 999 Mi Hồng": [6],
    "Vàng 999 Bảo Tín Mạnh Hải": [6],
    // 916
    "Vàng 916 (22K)": [7],
    // 18k
    "Vàng 18K PNJ": [8],
    // "Vàng 18K Ngọc Thẩm": 7,
    // 14k
    "Vàng 14K PNJ": [9],
    // 98
    "Vàng trang sức 98": [10],
    // 985
    "Vàng 985 Mi Hồng": [11],
    // 980
    "Vàng 980 Mi Hồng": [12],
    // 950
    "Vàng 950 Mi Hồng": [13],
    // 750
    "Vàng 750 Mi Hồng": [14],
    // 680
    "Vàng 680 Mi Hồng": [15],
    // 610
    "Vàng 610 Mi Hồng": [16],
    "Vàng 610 (14.6K)": [16],
    // 990
    // "Vàng ta Ngọc Thẩm": 17,
};
/**
    0: Vàng ta
    1: Vàng tây
 */
const GOLDS_BY_KIND = {
    // Vàng ta
    "Vàng SJC 1 chỉ": 1,
    "Vàng SJC 2 chỉ": 1,
    "Vàng SJC 5 chỉ": 1,
    "Vàng miếng SJC theo lượng": 1,
    "Vàng miếng SJC PNJ": 1,
    "Vàng miếng SJC BTMC": 1,
    "Vàng miếng DOJI Hà Nội lẻ": 1,
    "Vàng miếng DOJI HCM lẻ": 1,
    "Vàng 24k (nghìn/chỉ)": 1,
    "Vàng miếng Phúc Long DOJI": 1,
    "Vàng miếng SJC Phú Quý": 1,
    "Vàng nhẫn tròn Phú Quý 9999": 1,
    "1 Lượng vàng 9999 Phú Quý": 1,
    "Vàng nhẫn trơn 9999 PNJ": 1,
    "Vàng Kim Bảo 9999": 1,
    "Vàng Phúc Lộc Tài 9999": 1,
    "Vàng miếng PNJ - Phượng Hoàng": 1,
    "Vàng miếng Rồng Thăng Long": 1,
    "Vàng nhẫn trơn BTMC": 1,
    "Bản vị vàng BTMC": 1,
    "Vàng nhẫn ép vỉ Rồng Thăng Long BTMH": 1,
    "Vàng nhẫn ép vỉ Kim Gia Bảo": 1,
    "Vàng đồng xu": 1,
    "Vàng trang sức 999.9": 1,
    "Vàng trang sức 999 Phú Quý": 1,
    "Phú quý 1 lượng 99.9": 1,
    "Nhẫn Tròn 9999 Hưng Thịnh Vượng": 1,
    "Vàng nhẫn SJC 9999 theo phân": 1,
    "Trang sức vàng Rồng Thăng Long 9999": 1,
    "Vàng nhẫn SJC 9999 theo chỉ": 1,
    "Trang sức vàng Rồng Thăng Long 999": 1,
    "Vàng Trang sức 9999 PNJ": 1,
    "Vàng Trang sức 24K PNJ": 1,
    "Trang sức vàng SJC 9999": 1,
    "Vàng nhẫn trơn 9999 Ngọc Thẩm": 1,
    "Vàng trang sức 99": 1,
    "Vàng nữ trang 99": 1,
    "Vàng ta Ngọc Thẩm": 1,
    "Vàng trang sức SJC 99%": 1,
    "Vàng 9999 Bảo Tín Mạnh Hải": 1,
    "Vàng 999 Bảo Tín Mạnh Hải": 1,
    "Vàng 999.0 phi SJC": 1,
    "Vàng 999.9 phi SJC": 1,
    // Vàng tây
    "Vàng trang sức 98": 2,
    "Vàng 985 Mi Hồng": 2,
    "Vàng 980 Mi Hồng": 2,
    "Vàng 916 (22K)": 2,
    "Vàng 18K PNJ": 2,
    "Vàng 750 Mi Hồng": 2,
    "Vàng 680 (16.3K)": 2,
    "Nữ trang 68%": 2,
    "Vàng 650 (15.6K)": 2,
    "Vàng 680 Mi Hồng": 2,
    "Vàng 610 Mi Hồng": 2,
    "Vàng 610 (14.6K)": 2,
    "Vàng 14K PNJ": 2,
    "Nữ trang 41.7%": 2,
    "Vàng 416 (10K)": 2,
    "Vàng 375 (9K)": 2,
    "Vàng 333 (8K)": 2,
    "Bạc Phú Quý 99.9": 2,
    "Vàng 950 Mi Hồng": 2,
};

const GOLDS_BY_TYPE = [
    "pnj",
    "sjc",
    "btmc",
    "doji",
    "phuquy",
    "mihong",
    "btmh",
    "ngoctham",
];

module.exports = {
    GOLDS_BY_AGE,
    GOLDS_BY_KIND,
    GOLDS_BY_CATEGORY,
    GOLDS_BY_TYPE,
};
