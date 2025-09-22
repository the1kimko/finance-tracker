
export interface Currency {
    code: string
    symbol: string
    name: string
}

export interface Transaction {
    id: string
    amount: number
    currency: string
    category: string
    description: string
    date: Date
    type: 'income' | 'expense'
    account?: string
}

export interface Budget {
    id: string
    category: string
    monthlyLimit: number
    currency: string
    spent: number
    month: string // Format: 'YYYY-MM'
}

export interface Category {
    id: string
    name: string
    color: string
    icon?: string
    type: 'income' | 'expense'
}

export interface UserSettings {
    defaultCurrency: string
    displayCurrencies: string[]
}