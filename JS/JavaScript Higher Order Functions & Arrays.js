$_$wp(1);
const companies = ($_$w(1, 0), [
    {
        name: 'Company One',
        category: 'Finance',
        start: 1981,
        end: 2003
    },
    {
        name: 'Company Two',
        category: 'Retail',
        start: 1992,
        end: 2008
    },
    {
        name: 'Company Three',
        category: 'Auto',
        start: 1999,
        end: 2007
    },
    {
        name: 'Company Four',
        category: 'Retail',
        start: 1989,
        end: 2010
    },
    {
        name: 'Company Five',
        category: 'Technology',
        start: 2009,
        end: 2014
    },
    {
        name: 'Company Six',
        category: 'Finance',
        start: 1987,
        end: 2010
    },
    {
        name: 'Company Seven',
        category: 'Auto',
        start: 1986,
        end: 1996
    },
    {
        name: 'Company Eight',
        category: 'Technology',
        start: 2011,
        end: 2016
    },
    {
        name: 'Company Nine',
        category: 'Retail',
        start: 1981,
        end: 1989
    }
]);
const ages = ($_$w(1, 1), [
    33,
    12,
    20,
    16,
    5,
    54,
    21,
    44,
    61,
    13,
    15,
    45,
    25,
    64,
    32
]);
$_$w(1, 2), companies.forEach(company => {
    $_$wf(1);
    return $_$w(1, 3), company;
});
let canDrink = ($_$w(1, 4), []);
for (let i = 0; $_$w(1, 5), i < ages.length; i++) {
    if ($_$w(1, 6), ages[i] > 20) {
        $_$w(1, 7), canDrink.push(ages[i]);
    }
}
const canDrink1 = ($_$w(1, 8), ages.filter(function (age) {
    $_$wf(1);
    if ($_$w(1, 9), age > 20) {
        return $_$w(1, 10), true;
    }
}));
const canDrink2 = ($_$w(1, 11), ages.filter(age => {
    $_$wf(1);
    return $_$w(1, 12), age > 20;
}));
const retailCompanies = ($_$w(1, 13), companies.filter(company => {
    $_$wf(1);
    return $_$w(1, 14), company.category == 'Retail';
}));
const eightiesCompanies = ($_$w(1, 15), companies.filter(company => {
    $_$wf(1);
    return $_$w(1, 16), ($_$w(1, 17), company.start > 1979) && ($_$w(1, 18), company.start < 1990);
}));
const goodCompanies = ($_$w(1, 19), companies.filter(company => {
    $_$wf(1);
    return $_$w(1, 20), company.end - company.start > 9;
}));
const companyNames = ($_$w(1, 21), companies.map(function (company) {
    $_$wf(1);
    return $_$w(1, 22), company.name;
}));
const companyNames2 = ($_$w(1, 23), companies.map(company => {
    $_$wf(1);
    return $_$w(1, 24), company.name;
}));
const companyNames3 = ($_$w(1, 25), companies.map(company => {
    $_$wf(1);
    return $_$w(1, 26), `${ company.name } [${ company.start } - ${ company.end }]`;
}));
const ageMap = ($_$w(1, 27), ages.map(age => {
    $_$wf(1);
    return $_$w(1, 28), Math.sqrt(age);
}).map(age => {
    $_$wf(1);
    return $_$w(1, 29), age * 2;
}));
const sortedCompanies = ($_$w(1, 30), companies.sort(function (c1, c2) {
    $_$wf(1);
    if ($_$w(1, 31), c1.start > c2.start) {
        return $_$w(1, 32), 1;
    } else {
        return $_$w(1, 33), -1;
    }
}));
const sortedCompanies2 = ($_$w(1, 34), companies.sort((a, b) => {
    $_$wf(1);
    return $_$w(1, 35), a.start > b.start ? ($_$w(1, 36), 1) : ($_$w(1, 37), -1);
}));
const sortedAges = ($_$w(1, 38), ages.sort((a, b) => {
    $_$wf(1);
    return $_$w(1, 39), a - b;
}));
let ageSum = ($_$w(1, 40), 0);
for (let i = 0; $_$w(1, 41), i < ages.length; i++) {
    $_$w(1, 42), ageSum += ages[i];
}
const ageSum1 = ($_$w(1, 43), ages.reduce(function (total, age) {
    $_$wf(1);
    return $_$w(1, 44), total + age;
}, 0));
const ageSum2 = ($_$w(1, 45), ages.reduce((total, age) => {
    $_$wf(1);
    return $_$w(1, 46), total + age;
}, 0));
const totalYears = ($_$w(1, 47), companies.reduce(function (total, company) {
    $_$wf(1);
    return $_$w(1, 48), total + (company.end - company.start);
}, 0));
const totalYears1 = ($_$w(1, 49), companies.reduce((total, company) => {
    $_$wf(1);
    return $_$w(1, 50), total + (company.end - company.start);
}, 0));
const combined = ($_$w(1, 51), ages.map(age => {
    $_$wf(1);
    return $_$w(1, 52), age * 2;
}).filter(age => {
    $_$wf(1);
    return $_$w(1, 53), age >= 40;
}).sort((a, b) => {
    $_$wf(1);
    return $_$w(1, 54), b - a;
}).reduce((a, b) => {
    $_$wf(1);
    return $_$w(1, 55), a + b;
}, 0));
$_$w(1, 56), $_$tracer.log(combined, 'combined', 1, 56);
$_$wpe(1);