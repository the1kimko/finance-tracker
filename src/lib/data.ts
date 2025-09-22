//
import type { Transaction, Budget, UserSettings } from "./types";
import { getCurrentMonth } from "./utils";

// Mock transactions data for demonstration purposes
export const MOCK_TRANSACTIONS:
Transaction[] = [
    {
        id: "1",
        amount: 2500,
        currency: "USD",
        category: "Salary",
        description: "Monthly Salary",
        date: new Date("2024-05-01"),
        type: "income",
    },
    {
        id: "2",
        amount: 47.5,
        currency: "USD",
        category: "Groceries",
        description: "Weekly groceries",
        date: new Date("2024-05-03"),
        type: "expense",
    },
    {
        id: "3",
        amount: 120,
        currency: "EUR",
        category: "Transportation",
        description: "Monthly metro pass",
        date: new Date("2024-05-05"),
        type: "expense",
    },
    {
        id: "4",
        amount: 60,
        currency: "GBP",
        category: "Shopping",
        description: "New kicks",
        date: new Date("2024-05-10"),
        type: "expense",
    },
]

// Mock budgets
export const MOCK_BUDGETS:
Budget[] = [
    {
        id: "1",
        category: "Groceries",
        monthlyLimit: 350,
        currency: "USD",
        spent: 285.75,
        month: getCurrentMonth(),
    },
    {
        id: "2",
        category: "Transportation",
        monthlyLimit: 150,
        currency: "EUR",
        spent: 120,
        month: getCurrentMonth(),
    },
    {
        id: "3",
        category: "Entertainment",
        monthlyLimit: 300,
        currency: "GBP",
        spent: 150,
        month: getCurrentMonth(),
    },
]

// Default user settings
export const DEFAULT_USER_SETTINGS:
UserSettings = {
    defaultCurrency: "USD",
    displayCurrencies: ["USD", "EUR", "GBP"],
}

// Data management functions (using localStorage currently)
export const DataService = {
    getTransactions: (): Transaction[] => {
        if (typeof window === "undefined") return MOCK_TRANSACTIONS;
        const stored = localStorage.getItem("finance-transactions");
        return stored ? JSON.parse(stored) : MOCK_TRANSACTIONS;
    },
    saveTransactions: (transaction: Transaction): void => {
        if (typeof window === "undefined") return;
        const transactions = DataService.getTransactions();
        const existingIndex = transactions.findIndex(t => t.id === transaction.id);
        if (existingIndex >= 0) {
            transactions[existingIndex] = transaction; // Update existing
        } else {
            transactions.push(transaction); // Add new
        }
        localStorage.setItem("finance-transactions", JSON.stringify(transactions));
    },
    deleteTransaction: (id: string): void => {
        if (typeof window === "undefined") return;
        let transactions = DataService.getTransactions();
        transactions = transactions.filter(t => t.id !== id);
        localStorage.setItem("finance-transactions", JSON.stringify(transactions));

        DataService.updateBudgetSpending();
    },
    getBudgets: (): Budget[] => {
        if (typeof window === "undefined") return MOCK_BUDGETS;
        const stored = localStorage.getItem("finance-budgets");
        return stored ? JSON.parse(stored) : MOCK_BUDGETS;
    },
    saveBudget: (budget: Budget): void => {
        if (typeof window === "undefined") return;
        const budgets = DataService.getBudgets();
        const existingIndex = budgets.findIndex(b => b.id === budget.id);

        if (existingIndex >= 0) {
            budgets[existingIndex] = budget; // Update existing
        } else {
            budgets.push(budget); // Add new
        }
        localStorage.setItem("finance-budgets", JSON.stringify(budgets));
    },

    updateBudgetSpending: (): void => {
        if (typeof window === "undefined") return;
        const budgets = DataService.getBudgets();
        const transactions = DataService.getTransactions();

        const updatedBudgets = budgets.map(budget => {
            const totalSpent = transactions
                .filter(t => {
                    const transactionDate = new Date(t.date);
                    const transactionMonth = `${transactionDate.getFullYear()}-
                        ${String(transactionDate.getMonth() + 1).padStart(2, '0')}`;
                    return t.type === "expense" &&
                        t.category === budget.category &&
                        transactionMonth === budget.month;
                })
                .reduce((sum, t) => sum + t.amount, 0);

            return { ...budget, spent: totalSpent };
        });

        localStorage.setItem("finance-budgets", JSON.stringify(updatedBudgets));
    },
}