import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/

function avgCityMpg(data) {
    var sum = 0;
    var count = 0;
    for(var car of data) {
        sum += car.city_mpg;
        count += 1;
    }
    return sum / count;
}

function avgHwyMpg(data) {
    var sum = 0;
    var count = 0;
    for(var car of data) {
        sum += car.highway_mpg;
        count += 1;
    }
    return sum / count;
}

function getYears(data) {
    var years = [];
    for(var car of data) {
        years[years.length] = car.year;
    }
    return years;
}

function getRatioHybrids(data) {
    var hcount = 0;
    var count = 0;
    for (var car of data) {
        if (car.hybrid) {
            hcount += 1;
        }
        count += 1;
    }
    return hcount / count;
}

/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: {
        city: avgCityMpg(mpg_data),
        highway: avgHwyMpg(mpg_data)
    },
    allYearStats: getStatistics(getYears(mpg_data)),
    ratioHybrids: getRatioHybrids(mpg_data),
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: getMakerHybrids(mpg_data),
    avgMpgByYearAndHybrid: getAvgMpgByYearAndHybrid(mpg_data)
};

function getMakerHybrids(data){
    var makerHybrids = [];
    for (var car of data) {
        if (car.hybrid) {
            // check for existing make
            var makeFound = false;
            for (var entry of makerHybrids){
                if (entry.make == car.make) {
                    // make already added
                    makeFound = true;
                    // check for existing id
                    var idFound = false;
                    for (var id of entry.hybrids) {
                        if (id == car.id) {
                            // id already added
                            idFound = true;
                            break; // id already found
                        }
                    }
                    // add id
                    if (!idFound){
                        entry.hybrids[entry.hybrids.length] = car.id;
                    }
                    break; // make already found
                }
            }
            // add make
            if (!makeFound) {
                makerHybrids[makerHybrids.length] = {'make': car.make, 'hybrids': [car.id]};
            }
        }
    }
    return makerHybrids;
}

function getAvgMpgByYearAndHybrid(data) {
    var result = {};
    // build arrays of cars
    for (var car of data) {
        // year not added
        if (!(car.year in result)) {
            // add year entry
            result[car.year] = {
                hybrid: {
                    cars: []
                },
                notHybrid: {
                    cars: []
                }
            };
        }
        // either way, add car
        if (car.hybrid) {
            var car_arr = result[car.year].hybrid.cars;
            car_arr.push(car);
        } else {
            var car_arr = result[car.year].notHybrid.cars;
            car_arr.push(car);
        }
    }
    // call avg functions on everything
    for (var year of Object.values(result)){
        year.hybrid.city = avgCityMpg(year.hybrid.cars);
        year.hybrid.highway = avgHwyMpg(year.hybrid.cars);
        year.notHybrid.city = avgCityMpg(year.notHybrid.cars);
        year.notHybrid.highway = avgHwyMpg(year.notHybrid.cars);
        delete year.hybrid.cars;
        delete year.notHybrid.cars;
    }
    return result;
}