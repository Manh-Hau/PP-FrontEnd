export type TBaseResponse<T> = {
    isSuccess: boolean;
    message: string;
    data: T;
};

interface TypeDateError {
    error: string;
    message: string;
    statusCode: number;
}

export interface TypeErrorResponse {
    response: {
        data: TypeDateError;
        status?: number;
    };
    message: string;
}

export interface Translations {
    common: {
        cancel: string;
        create: string;
        delete: string;
        update: string;
    };
    header: {
        home: string;
        bio: string;
        activities: string;
        media: string;
        contact: string;
        material: string;
        size: string;
        price: string;
        date: string;
        search: string;
    };
    backdrop: {
        artist: string;
    };
    create_dialog_admin: {
        title: string;
        name: string;
        material_vn: string;
        material_en: string;
        date: string;
        size: string;
        price_vn: string;
        price_en: string;
        validate_name: string;
        add_success: string;
    };
    edit_dialog_admin: {
        title: string;
        name: string;
        material_vn: string;
        material_en: string;
        date: string;
        size: string;
        price_vn: string;
        price_en: string;
        validate_name: string;
        update_success: string;
    };
    footer: {
        artist: string;
        regard: string;
    };
    image_modal: {
        material: string;
        size: string;
        price: string;
        contact: string;
        date: string;
    };
    image_picker: {
        choose_image: string;
        upload_image: string;
    };
    grid_table: {
        find_by_name: string;
    };
    activities: {
        header: string;
        activity_1: string;
        activity_2: string;
        activity_3: string;
        activity_4: string;
        activity_5: string;
    };
    bio: {
        title: string;
        content_1: string;
        content_2: string;
        content_3: string;
    };
    contact: {
        success_send_mail: string;
        header: string;
        phone_number: string;
        first_name: string;
        last_name: string;
        message: string;
        send: string;
    };
    media: {
        header: string;
    };
    admin: {
        headers: {
            image: string;
            name: string;
            material: string;
            size: string;
            price: string;
            date: string;
            action: string;
            confirm_delete: string;
            create_new_image: (img: string) => string;
            button_create_new: string;
        };
    };
    login: {
        title: string;
        button_login: string;
    };
}

