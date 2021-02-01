async function makeSteak() {
  return new Promise(async (resolve, reject) => {
    try {
      await addFood(steak[1], '#steak');
      await addFood(steak[2], '#steak');
      await addFood(steak[3], '#steak');
      await addFood(steak[4], '#steak');
      await addFood(steak[5], '#steak');
      await addFood(steak[6], '#steak');
      await addFood(steak[7], '#steak').then(() => {
        document.getElementById('table').innerHTML += `<img src="/public/images/steak.jpg">`;
        resolve(true);
      });
    } catch (err) {
      console.log(err);
    }
  });
}

// Iteration 2 using `.then()`
async function makeMashPotatoes() {
  return new Promise(async (resolve, reject) => {
    try {
      await addFood(mashPotatoes[1], '#mashPotatoes');
      await addFood(mashPotatoes[2], '#mashPotatoes');
      await addFood(mashPotatoes[3], '#mashPotatoes');
      await addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
        document.getElementById('table').innerHTML += `<img src="/public/images/mashPotatoes.jpg">`;
        resolve(true);
      });
    } catch (err) {
      console.log(err);
    }
  });
}

// Iteration 3 using async and await
async function makeBrusselSprouts() {
  return new Promise(async (resolve, reject) => {
    try {
      await addFood(brusselSprouts[1], '#brusselSprouts');
      await addFood(brusselSprouts[2], '#brusselSprouts');
      await addFood(brusselSprouts[3], '#brusselSprouts');
      await addFood(brusselSprouts[4], '#brusselSprouts');
      await addFood(brusselSprouts[5], '#brusselSprouts');
      await addFood(brusselSprouts[6], '#brusselSprouts');
      await addFood(brusselSprouts[7], '#brusselSprouts');
      await addFood(brusselSprouts[8], '#brusselSprouts').then(() => {
        document.getElementById('table').innerHTML += `<img src="/public/images/2brusselSprouts.jpg">`;
        resolve(true);
      });
    } catch (err) {
      console.log(err);
    }
  });
}
async function allDone() {
  Promise.all([makeMashPotatoes(), makeSteak(), makeBrusselSprouts()]).then(() => {
    setTimeout(() => {
      alert('Dinner serverd');
    }, 100);
  });
}

allDone();
