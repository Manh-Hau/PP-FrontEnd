export const vn = {
    common: {
        cancel: 'Cancel',
        create: 'Tạo mới',
        delete: 'Xoá',
        update: 'Cập nhật'
    },
    header: {
        home: 'TRANG CHỦ',
        bio: 'TIỂU SỬ',
        activities: 'HOẠT ĐỘNG',
        media: 'TRUYỀN THÔNG',
        contact: 'LIÊN HỆ',
        search: 'Tìm kiếm theo tên...',
        material: 'Chất liệu',
        size: 'Kích thước',
        price: 'Giá',
        date: 'Ngày'
    },
    backdrop: {
        artist: 'Hoạ sĩ'
    },
    create_dialog_admin: {
        title: 'Tạo Ảnh Mới',
        name: 'Tên',
        material_vn: 'Chất liệu_VN',
        material_en: 'Chất liệu_EN',
        date: 'Ngày',
        size: 'Kích thước',
        price_vn: 'Giá_VN',
        price_en: 'Giá_EN',
        validate_name: 'Tên phải có ít nhất một kí tự.',
        add_success: 'Thêm ảnh thành công!'
    },
    edit_dialog_admin: {
        title: 'Cập Nhật Ảnh',
        name: 'Tên',
        material_vn: 'Chất liệu_VN',
        material_en: 'Chất liệu_EN',
        date: 'Ngày',
        size: 'Kích thước',
        price_vn: 'Giá_VN',
        price_en: 'Giá_EN',
        validate_name: 'Tên phải có ít nhất một kí tự.',
        update_success: 'Chỉnh sửa thành công!'
    },
    footer: {
        artist: 'Hoạ sĩ',
        regard: 'Trân trọng'
    },
    image_modal: {
        material: 'Chất liệu',
        size: 'Kích thước',
        price: 'Giá',
        contact: 'Liên hệ mua tranh',
        date: 'Ngày'
    },
    image_picker: {
        choose_image: 'Chọn Ảnh',
        upload_image: 'Tải Ảnh Lên'
    },
    grid_table: {
        find_by_name: 'Tìm kiếm theo tên'
    },
    activities: {
        header: 'HOẠT ĐỘNG',
        activity_1: 'Triển lãm cá nhân Hoa Vàng Trên Cỏ Xanh',
        activity_2: 'Đấu tranh giá gây quỹ từ thiện chương trình Hoa Hậu Nam Vương Á Âu',
        activity_3: 'Giải nhất sáng tạo tác phẩm nghệ thuật về Đất nước con người Rumania',
        activity_4: 'Giải nhì hội thi trang trí nón lá kỉ niệm 1978 năm khởi nghĩa Hai Bà Trưng - 108 năm Quốc tế Phụ Nữ',
        activity_5: 'Tranh tường'
    },
    bio: {
        title: 'TIỂU SỬ',
        content_1: 'Họa sĩ Phan Phú Yên\n Sinh năm 1996 tại tỉnh Phú Yên',
        content_2: '2002 – 2014: Học tiểu học, Trung học, Trung học phổ thông tại Thị trấn La Hai, Huyện Đồng Xuân, Tỉnh Phú Yên\n 2014 – 2019: Học tại trường Đại học Kiến Trúc Thành phố Hồ Chí Minh',
        content_3: '2019 - đến nay: Sống và làm việc tại Thành phố Hồ Chí Minh\n 09/11 – 15/11/2024: Triển lãm cá nhân – Hoa Vàng Trên Cỏ Xanh tại Hawaii Art Place, Thành phố Hồ Chí Minh.'
    },
    contact: {
        success_send_mail: 'Gửi Mail thành công!',
        header: 'LIÊN HỆ',
        phone_number: 'Số điện thoại',
        first_name: 'Tên',
        last_name: 'Họ',
        message: 'Tin nhắn',
        send: 'GỬI'
    },
    media: {
        header: 'TRUYỀN THÔNG'
    },
    admin: {
        headers: {
            image: 'Hình ảnh',
            name: 'Tên',
            material: 'Chất liệu',
            size: 'Kích thước',
            price: 'Giá',
            date: 'Ngày',
            action: 'Thao tác',
            confirm_delete: 'Xoá ảnh thành công!',
            create_new_image: (img: string) => `Bức hình ${img} này sẽ được xoá, bạn chắc chứ?`,
            button_create_new: 'Tạo ảnh mới'
        }
    },
    login: {
        title: 'ĐĂNG NHẬP',
        button_login: 'Đăng nhập'
    }
} as const;