const TextUtils = {
    capitalize: (text?: string) => {
        text = text || '';
        return text.replace(/\b\w/g, function (letter) {
            return letter.toUpperCase();
        });
    }
}

export default TextUtils;