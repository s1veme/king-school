function reviewRussianInput(input) {
    const letters = {
        "q": "й",
        "w": "ц",
        "e": "у",
        "r": "к",
        "t": "е",
        "y": "н",
        "u": "г",
        "i": "ш",
        "o": "щ",
        "p": "з",
        "[": "х",
        "{": "Х",
        "]": "ъ",
        "}": "Ъ",
        "|": "/",
        "`": "ё",
        "~": "Ё",
        "a": "ф",
        "s": "ы",
        "d": "в",
        "f": "а",
        "g": "п",
        "h": "р",
        "j": "о",
        "k": "л",
        "l": "д",
        ";": "ж",
        ":": "Ж",
        "'": "э",
        "\"": "Э",
        "z": "я",
        "x": "ч",
        "c": "с",
        "v": "м",
        "b": "и",
        "n": "т",
        "m": "ь",
        ",": "б",
        "<": "Б",
        ".": "ю",
        ">": "Ю",
        "/": ".",
        "?": ",",
        "@": "\"",
        "#": "№",
        "$": ";",
        "^": ":",
        "&": "?"
    };

    let output = '';

    for (let index = 0, length = input.length; index < length; index++) {
        output += letters[input.charAt(index)] || input.charAt(index);
    }

    return output;
}

function liveSearch() {
    let cards = document.querySelectorAll('.answer')
    let search_query = document.getElementById('questionInput').value;
    for (let i = 0; i < cards.length; i++) {
        console.log(reviewRussianInput(search_query.toLowerCase()))

        if (cards[i].innerText.toLowerCase().includes(search_query.toLowerCase()) ||
            cards[i].innerText.toLowerCase().includes(reviewRussianInput(search_query.toLowerCase()).toLowerCase())) {
            cards[i].classList.remove("is-hidden");
        } else {
            cards[i].classList.add("is-hidden");
        }
    }
}

const input = document.querySelector('#questionInput')
input.addEventListener('input', liveSearch)
