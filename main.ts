import inquirer from 'inquirer';

interface Currency {
  code: string;
}

const currencies: Currency[] = [
  { code: 'USD' },
  { code: 'EUR' },
  { code: 'GBP' },
  // Add more currencies as needed
];

async function convertCurrency() {
  const questions = [
    {
      type: 'list',
      name: 'fromCurrency',
      message: 'Select the currency to convert from:',
      choices: currencies.map(currency => ({ name: `${currency.code}`, value: currency.code }))
    },
    {
      type: 'list',
      name: 'toCurrency',
      message: 'Select the currency to convert to:',
      choices: currencies.map(currency => ({ name: `${currency.code}`, value: currency.code }))
    },
    {
      type: 'input',
      name: 'amount',
      message: 'Enter the amount to convert:'
    }
  ];

  const answers = await inquirer.prompt(questions);

  const { fromCurrency, toCurrency, amount } = answers;
  const amountFloat = parseFloat(amount);

  if (isNaN(amountFloat)) {
    console.error('Invalid amount entered');
    return;
  }

  const conversionRate = 1.2; // Example conversion rate (replace with actual rates)
  const convertedAmount = amountFloat * conversionRate;

  console.log(`${amountFloat} ${fromCurrency} equals ${convertedAmount} ${toCurrency}`);
}

convertCurrency();
