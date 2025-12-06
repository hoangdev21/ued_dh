# Hướng dẫn sử dụng Logo

## Cách thêm logo vào website

### 1. Chuẩn bị file logo
- Đặt file logo với tên `logo.png` vào thư mục gốc của project (cùng thư mục với file `index.html`)
- Định dạng khuyến nghị: PNG với nền trong suốt
- Kích thước khuyến nghị: 64x64px hoặc 128x128px (hình vuông)
- Chất lượng: Độ phân giải cao để hiển thị đẹp trên màn hình retina

### 2. Các vị trí hiển thị logo

#### Header Logo (góc phải trên)
- Kích thước: 32x32px
- Hình tròn với viền gradient
- Có fallback emoji 📚 nếu không tải được ảnh

#### Footer Logo (cuối trang)
- Kích thước: 24x24px
- Hình tròn với background gradient
- Có fallback emoji 📚 nếu không tải được ảnh

#### Watermark (tùy chọn)
- Kích thước: 40x40px
- Vị trí: góc dưới bên phải
- Để kích hoạt, uncomment code trong HTML

### 3. Thay đổi tên file logo

Nếu bạn muốn sử dụng tên file khác, hãy thay đổi `src="logo.png"` thành tên file của bạn trong các vị trí sau:

```html
<!-- Header logo -->
<img src="your-logo.png" alt="Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">

<!-- Footer logo -->
<img src="your-logo.png" alt="Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">

<!-- Watermark logo (nếu sử dụng) -->
<img src="your-logo.png" alt="Logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
```

### 4. Tùy chỉnh thông tin branding

Thay thế các placeholder sau:
- `[YourName]` → Tên của bạn
- `[Tên của bạn]` → Tên của bạn
- `Education Tools` → Tên brand/công cụ của bạn

### 5. Định dạng logo khuyến nghị

**Cho website giáo dục:**
- Icon sách, bút chì, mũ tốt nghiệp
- Màu sắc: xanh dương, tím, xanh lá
- Style: hiện đại, đơn giản, dễ nhận biết

**Kỹ thuật:**
- Format: PNG (hỗ trợ transparency)
- Kích thước: 64x64px minimum
- Tỷ lệ: 1:1 (hình vuông)
- Chất lượng: cao để không bị mờ khi scale

### 6. Backup và fallback

Hệ thống có sẵn fallback emoji 📚 nếu:
- File logo không tồn tại
- Lỗi tải ảnh
- Đường dẫn không đúng

### 7. Cấu trúc thư mục

```
XepLoaiUED/
├── index.html
├── logo.png          ← Logo chính
├── README-LOGO.md    ← File hướng dẫn này
└── images/           ← Thư mục chứa ảnh khác (tùy chọn)
    └── logo.png
```

Nếu bạn đặt logo trong thư mục `images/`, hãy thay đổi src thành `src="images/logo.png"`