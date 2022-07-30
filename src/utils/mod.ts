/**
 * Returns the modifier value as a string, prefixed with + or -.
 * @param score Ability Score
 * @returns Modifier string.
 */
export const mod = (score: number) => {
    const s = modraw(score);
    return s > 0 ? `+${s}` : `${s}`;
};

/**
 * Returns the modifier value.
 * @param score Ability Score
 * @returns Modifier.
 */
export const modraw = (score: number) => Math.floor((score - 10) / 2);

/**
 * Returns proficiency modifier based on level.
 * @param level Character level.
 * @returns Proficiency score.
 */
export const proficiency = (level: number) => {
    if (level === 1) return 2;
    return Math.floor(level / 5) + 1;
};
