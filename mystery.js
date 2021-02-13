const MystoryCodes = (input) => {
  let firstArray = [];
//   let secondArray = [];

  if (input === 1) {
    console.log("1");
  } else {
    let count = 1;
    let divisor = Math.pow(2, count);
    let subArrays = [];

    let arrCount = 0;

    for (let i = Math.pow(2, input - 1); i < Math.pow(2, input - 1) * 2; i++) {
      if (input < Math.pow(2, 3) && arrCount == Math.pow(2, 3)) {
        console.log("a", input, Math.pow(2, 3), arrCount);
        break;
      } else if (input < Math.pow(2, 4) && arrCount == Math.pow(2, 4)) {
        console.log("b", input, Math.pow(2, 4), arrCount);
        break;
      } else if (input < Math.pow(2, 5) && arrCount == Math.pow(2, 5)) {
        console.log("c", input, Math.pow(2, 5), arrCount);
        break;
      } else if (arrCount == Math.pow(2, 6)) {
        break;
      }
      firstArray.push(i);
      arrCount++;
    }

    while (divisor < Math.pow(2, input - 1)) {
      for (let i = 0; i < firstArray.length; ) {
        let subArray = firstArray.slice(i, i + divisor);
        subArrays.push(subArray);
        i += divisor;
      }

      subArrays.map((element, index) =>
        (index + 1) % 2 === 0 ? element.reverse() : element
      );

      for (let i = 0; i < subArrays.length; i++) {
        firstArray = subArrays.toString().split(",");
      }

      subArrays = [];

      count++;

      divisor = Math.pow(2, count);

      console.log("div", divisor);
    }

    firstArray.reverse();

    for (let i = input; i > 0; i--) {
      binary = (firstArray[firstArray.length - i] >>> 0).toString(2);

      if (binary.length < input) {
        binary = "0".repeat(input - binary.length) + binary;
      }
      console.log(binary);
    }
    console.log(firstArray);
  }
};

MystoryCodes(3);