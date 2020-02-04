import Fruits from './foods';
import {choice, remove} from './helpers';

function logMessages() {
  const fruitChosen = choice(Fruits);
  console.log(`I'd like one ${fruitChosen}, please.`);
  console.log(`Here you go: ${fruitChosen}`);
  console.log('Delicious! May I have another?');

  const remaining = remove(Fruits, fruitChosen);
  console.log(
      `I'm sorry, we're all out. We have ${remaining} other foods left.`);
}

logMessages();
