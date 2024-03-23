function calculatePAYE(basicSalary) {
    let tax = 0;
    if (basicSalary <= 12298) {
        tax = 0;
    } else if (basicSalary <= 23885) {
        tax = (basicSalary - 12298) * 0.1;
    } else if (basicSalary <= 35472) {
        tax = (11587 * 0.1) + ((basicSalary - 23885) * 0.15);
    } else if (basicSalary <= 47059) {
        tax = (11587 * 0.1) + (11587 * 0.15) + ((basicSalary - 35472) * 0.2);
    } else if (basicSalary <= 59176) {
        tax = (11587 * 0.1) + (11587 * 0.15) + (11587 * 0.2) + ((basicSalary - 47059) * 0.25);
    } else {
        tax = (11587 * 0.1) + (11587 * 0.15) + (11587 * 0.2) + (12117 * 0.25) + ((basicSalary - 59176) * 0.3);
    }
    return tax;
}

function calculateNHIF(basicSalary) {
    let nhif = 0;
    if (basicSalary < 6000) {
        nhif = 150;
    } else if (basicSalary <= 8000) {
        nhif = 300;
    } else if (basicSalary <= 12000) {
        nhif = 400;
    } else if (basicSalary <= 15000) {
        nhif = 500;
    } else if (basicSalary <= 20000) {
        nhif = 600;
    } else if (basicSalary <= 25000) {
        nhif = 750;
    } else if (basicSalary <= 30000) {
        nhif = 850;
    } else if (basicSalary <= 35000) {
        nhif = 900;
    } else if (basicSalary <= 40000) {
        nhif = 950;
    } else if (basicSalary <= 45000) {
        nhif = 1000;
    } else if (basicSalary <= 50000) {
        nhif = 1100;
    } else if (basicSalary <= 60000) {
        nhif = 1200;
    } else if (basicSalary <= 70000) {
        nhif = 1300;
    } else if (basicSalary <= 80000) {
        nhif = 1400;
    } else if (basicSalary <= 90000) {
        nhif = 1500;
    } else if (basicSalary <= 100000) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}

function calculateNSSF(basicSalary) {
    const nssfRate = 0.06;
    return basicSalary * nssfRate;
}

function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}

function calculateNetSalary(grossSalary, paye, nhif, nssf) {
    return grossSalary - paye - nhif - nssf;
}

function main() {
    const basicSalary = parseFloat(prompt("Enter the basic salary:"));
    const benefits = parseFloat(prompt("Enter the benefits:"));

    const paye = calculatePAYE(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const netSalary = calculateNetSalary(grossSalary, paye, nhif, nssf);

    console.log("PAYE (Tax):", paye);
    console.log("NHIF Deductions:", nhif);
    console.log("NSSF Deductions:", nssf);
    console.log("Gross Salary:", grossSalary);
    console.log("Net Salary:", netSalary);
}

main();