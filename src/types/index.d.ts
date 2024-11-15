declare module '@/lib/utils' {
    type ClassValue = string | number | boolean | undefined | null;
    export function cn(...inputs: ClassValue[]): string;
  }