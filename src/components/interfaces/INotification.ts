export enum typeNotification{
    SUCC,
    FAIL,
    ATEN
}

export interface INotification{
    id: number,
    title: string,
    description: string,
    type: typeNotification,
}