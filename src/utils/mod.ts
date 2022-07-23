export const mod = (score: number) => {
    const s = Math.floor((score - 10) / 2);
    return s > 0 ? `+${s}` : s;
};

export const proficiency = (level: number) => {
    if (level === 1) return 2;
    return Math.floor(level / 5) + 1;
};
