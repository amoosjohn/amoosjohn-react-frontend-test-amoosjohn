interface User {
    id:number;
    name:string;
    email:string;
}

export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('accessToken');
};

export const setAccessToken = (accessToken: string): void => {
    localStorage.setItem('accessToken', accessToken);
};

export const setUser = (user: User): void => {
    const userJsonString = JSON.stringify(user);
    localStorage.setItem('user', userJsonString);
};

export const getAccessToken = (): string|null => {
    return localStorage.getItem('accessToken');
};

export const removeAccessToken = (): void => {
    localStorage.removeItem('accessToken');
};

export const removeUser = (): void => {
    localStorage.removeItem('user');
};

export const getUser = (): User => {
    const user = JSON.parse(localStorage.getItem("user") as any);
    return user;
};