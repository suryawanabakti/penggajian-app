
export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    roles: any;
}

export interface TypePasswordToggle {
    setShowPassword: any;
    showPassword: boolean;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };

};



