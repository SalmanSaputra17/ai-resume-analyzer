import clsx, {type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

/**
 * Formats a size in bytes to a human-readable string (KB, MB, GB)
 * @param bytes - The size in bytes to format
 * @param decimals - Number of decimal places to show (default: 2)
 * @returns A formatted string representing the size
 */
export const formatSize = (bytes: number, decimals: number = 2): string => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
}

export const generateUUID = () => crypto.randomUUID();

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}