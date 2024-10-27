export const en = {
    common: {
        cancel: 'Cancel',
        create: 'Create',
        delete: 'Delete',
        update: 'Update'
    },
    header: {
        home: 'HOME',
        bio: 'BIO',
        activities: 'ACTIVITIES',
        media: 'MEDIA',
        contact: 'CONTACT',
        material: 'Material',
        size: 'Size',
        price: 'Price',
        date: 'Date',
        search: 'Search by name...'
    },
    backdrop: {
        artist: 'Artist'
    },
    create_dialog_admin: {
        title: 'Create New Image',
        name: 'Name',
        material_vn: 'Material_VN',
        material_en: 'Material_EN',
        date: 'Date',
        size: 'Size',
        price_vn: 'Price_VN',
        price_en: 'Price_EN',
        validate_name: 'The name must contain at least one character.',
        add_success: 'Add image successfully!'
    },
    edit_dialog_admin: {
        title: 'Update Image',
        name: 'Name',
        material_vn: 'Material_VN',
        material_en: 'Material_EN',
        date: 'Date',
        size: 'Size',
        price_vn: 'Price_VN',
        price_en: 'Price_EN',
        validate_name: 'The name must contain at least one character.',
        update_success: 'Update image successfully!'
    },
    footer: {
        artist: 'Artist',
        regard: 'Best Regards'
    },
    image_modal: {
        material: 'Material',
        size: 'Size',
        price: 'Price',
        contact: 'Contact for buy',
        date: 'Date'
    },
    image_picker: {
        choose_image: 'Choose Image',
        upload_image: 'Upload Image'
    },
    grid_table: {
        find_by_name: 'Find by name'
    },
    activities: {
        header: 'ACTIVITIES',
        activity_1: 'The Yellow Flowers on the Green Grass Solo Exhibition',
        activity_2: 'Charity Fundraising Auction for the Miss and Mister Eurasia Program',
        activity_3: 'First Prize for Creative Artwork on the Land and People of Romania',
        activity_4: 'Second Prize in the Conical Hat Decoration Contest Celebrating 1978 Years of the Hai Ba Trung Uprising and 108 Years of International Women’s Day',
        activity_5: 'Mural'
    },
    bio: {
        title: 'BIO',
        content_1: 'Artist Phan Phu Yen\n Born in 1996 in Phu Yen Province',
        content_2: '2002 – 2014: Attended primary school, middle school, and high school in La Hai Town, Dong Xuan District, Phu Yen Province\n 2014 – 2019: Studied at Ho Chi Minh City University of Architecture',
        content_3: '2019 – Present: Living and working in Ho Chi Minh City\n November 9th – November 15th, 2024: Solo exhibition – Yellow Flowers on the Green Grass at Hawaii Art Place, Ho Chi Minh City'
    },
    contact: {
        success_send_mail: 'Send Email Successfully!',
        header: 'CONTACT',
        phone_number: 'Phone number',
        first_name: 'First Name',
        last_name: 'Last Name',
        message: 'Message',
        send: 'SEND'
    },
    media: {
        header: 'MEDIA'
    },
    admin: {
        headers: {
            image: 'Image',
            name: 'Name',
            material: 'Material',
            size: 'Size',
            price: 'Price',
            date: 'Date',
            action: 'Action',
            confirm_delete: 'Delete image successfully!',
            create_new_image: (img: string) => `Are you sure you want to delete the image ${img}?`,
            button_create_new: 'Create New'
        }
    },
    login: {
        title: 'LOGIN',
        button_login: 'Log In'
    }
} as const;