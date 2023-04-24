class Maths {

    difference(anchor, latest, isAbsolute = false) {
        if (typeof anchor !== 'number') throw new Error(`'anchor' must be of type 'number', instead received '${typeof anchor}': '${anchor}'`);
        if (typeof latest !== 'number') throw new Error(`'latest' must be of type 'number', instead received '${typeof latest}': '${latest}'`);

        const difference = latest - anchor;

        if (isAbsolute) return Math.abs(difference);

        return difference;
    }

    percent_difference(anchor, latest, precision = 3) {
        if (typeof anchor !== 'number') throw new Error(`'anchor' must be of type 'number', instead received '${typeof anchor}': '${anchor}'`);
        if (typeof latest !== 'number') throw new Error(`'latest' must be of type 'number', instead received '${typeof latest}': '${latest}'`);

        const percent_difference = (latest - anchor) / Math.abs(anchor);
        return Math.floor(percent_difference * Math.pow(10, precision + 2)) / Math.pow(10, precision);
    }

    toFixed(value, precision) {
        if (typeof value !== 'number' && typeof value !== 'string') throw new Error(`'value' must be of type 'number', instead received '${typeof value}': ${value}`);

        if (typeof precision !== 'number' && typeof precision !== 'string') throw new Error(`'precision' must be of type 'number', instead received '${typeof precision}': ${precision}`);

        const truePrecision = parseInt(precision);
        if (truePrecision != truePrecision) throw new Error(`'precision' value of '${precision}' can not be parsed to an integer, instead it returns 'NaN'`);

        const trueValue = parseFloat(value);
        if (trueValue != trueValue) throw new Error(`'value' value of '${value}' can not be parsed to a number, instead it returns 'NaN'`);

        return Math.round(trueValue * Math.pow(10, precision)) / Math.pow(10, precision);
    }

}

const instance = new Maths();
module.exports = instance;