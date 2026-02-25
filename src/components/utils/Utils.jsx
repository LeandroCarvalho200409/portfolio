
export const getObjectByLangWithOrderedArray = (texts, lang) => {
    if (!texts || !Array.isArray(texts) || texts.length != 3 || !lang) return null;

    if (lang === "DE") {
        return texts[0]
    } else if (lang === "PT") {
        return texts[1]
    } else {
        return texts[2]
    }
}

export const getHighlightBgByTheme = () => {
    const theme = document.documentElement.getAttribute("data-theme");

    if (theme === "nord") {
        return "bg-primary";
    }

    return "bg-neutral";
}