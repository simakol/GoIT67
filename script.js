// const foo = async () => {
//   await Promise.reject("Reject"); // throw new Error(...)
//   return "Ok";
// };

// foo().then(console.log);

function getStone(stoneName) {
  const stones = {
    Смарагд: {
      price: 1300,
      quantity: 4,
    },
    Діамант: {
      price: 2700,
      quantity: 3,
    },
    Сапфір: {
      price: 400,
      quantity: 7,
    },
    Щебінь: {
      price: 200,
      quantity: 2,
    },
  };

  return new Promise((resolve) =>
    setTimeout(() => resolve(stones[stoneName]), 500)
  );
}

//PromiseJobs

function getStonesSeq() {
  const emerald = getStone("Смарагд");
  //   const sapphire = getStone("Сапфір");

  emerald.then((stone) => {
    console.log(stone);
    getStone("Сапфір").then(console.log);
  });
  //   sapphire.then(console.log);
}

/*
 1. await можна використовувати тількі всередині асинхронної ф-ції
 2. await заморожує виконання асинхронної функції до тих пір, поки проміс не перейде у стан Rejected або Fullfilled (ми імітуємо синхронність у виконанні асинхронного коду)
 3. await повертає не проміс, а його результат
 4. асинхронна функція поветає проміс

*/

async function asyncGetStonesSeq() {
  const emerald = await getStone("Смарагд");
  console.log(emerald);
  const sapphire = await getStone("Сапфір");
  console.log(sapphire);
  //   throw new Error("hahaha");
}

async function asyncGetStonesAll() {
  const emerald = getStone("Смарагд");
  const sapphire = getStone("Сапфір");
  const stones = await Promise.all([emerald, sapphire]);
  console.log("🚀 ~ stones", stones);
  return stones;
}

// asyncGetStonesSeq();
asyncGetStonesAll();
