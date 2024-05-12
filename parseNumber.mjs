export default function parseNumber (
    string
) {
    if (typeof string === 'number') return string;

    string = string ?? ""
        .toString()
        .trim();

    let value = NaN;

    if (string.endsWith("%")) {
        string = string.substring(
            0,
            string.length - 1
        );

        value = parseFloat(string) / 100;
    } else {
        value = parseFloat(string);
    }

    return value;
}
