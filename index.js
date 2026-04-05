function getRandomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let ournumber = Math.floor(Math.random() * 100) +1;
            resolve(ournumber);
        }, 1000);
    });
}

async function processNumber() {
  try {
    const ournumber = await getRandomNumber();

    if (ournumber < 50) {
      return Promise.resolve(ournumber + 20);
    } else {
      return Promise.reject("Занадто велике число!");
    }

  } catch(err) {
    return "Оброблено помилку";
  }
}
processNumber().then(console.log);