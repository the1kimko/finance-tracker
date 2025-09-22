import type { Category, Currency } from "./types";

export const
SUPPORTED_CURRENCIES:
Record<string, Currency> = {
    USD: { code: "USD", symbol: "$", name: "US Dollar" },
    EUR: { code: "EUR", symbol: "€", name: "Euro" },
    GBP: { code: "GBP", symbol: "£", name: "British Pound" },
    JPY: { code: "JPY", symbol: "¥", name: "Japanese Yen" },
    AUD: { code: "AUD", symbol: "A$", name: "Australian Dollar" },
    CAD: { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
    CHF: { code: "CHF", symbol: "CHF", name: "Swiss Franc" },
    CNY: { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
    INR: { code: "INR", symbol: "₹", name: "Indian Rupee" },
    RUB: { code: "RUB", symbol: "₽", name: "Russian Ruble" },
    BRL: { code: "BRL", symbol: "R$", name: "Brazilian Real" },
    ZAR: { code: "ZAR", symbol: "R", name: "South African Rand" },
}

export const DEFAULT_CATEGORIES:
Category[] = [
    // Expense Categories
    { id: "1", name: "Food & Dining", color: "#FF6384", type: "expense" },
    { id: "2", name: "Transportation", color: "#36A2EB", type: "expense" },
    { id: "3", name: "Shopping", color: "#FFCE56", type: "expense" },
    { id: "4", name: "Entertainment", color: "#4BC0C0", type: "expense" },
    { id: "5", name: "Healthcare", color: "#9966FF", type: "expense" },
    { id: "6", name: "Education", color: "#FF9F40", type: "expense" },
    { id: "7", name: "Travel", color: "#C9CBCF", type: "expense" },
    { id: "8", name: "Bills &Utilities", color: "#FF6384", type: "expense" },

    // Income Categories
    { id: "9", name: "Salary", color: "#36A2EB", type: "income" },
    { id: "10", name: "Freelace", color: "#FFCE56", type: "income" },
    { id: "11", name: "Investments", color: "#4BC0C0", type: "income" },
    { id: "12", name: "Gifts", color: "#9966FF", type: "income" },
    { id: "13", name: "Other", color: "#FF9F40", type: "income" },
]