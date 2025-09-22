
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SUPPORTED_CURRENCIES } from "./constants";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatCurrency
(amount: number, currencyCode: string): string {
    const currency = SUPPORTED_CURRENCIES[currencyCode];
    if (!currency) return `${amount.toFixed(2)} ${currencyCode}`;

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'symbol',
    }).format(amount);
}

export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(date);
}

export function getCurrentMonth(): string {
    const now = new Date();
    return `${now.getFullYear()}-
    ${String(now.getMonth() + 1).padStart(2, '0')}`;
}