interface Calculation {
  firstNumber: number;
  secondNumber: number;
  getCalculation: (value: number, addNumber: number) => boolean;
}

const calculation: Calculation = {
  firstNumber: Number(Math.floor(Math.random() * 10)),
  secondNumber: Number(Math.floor(Math.random() * 21)),
  getCalculation: function (value: number, addNumber: number) {
    if (typeof value === 'number') {
      console.log(addNumber);

      return addNumber === value;
    }
    return false;
  },
};

export default calculation;
