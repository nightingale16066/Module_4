import './style.css';
import {Station} from './modules/station';
import {Truck, PassengerCar} from './modules/car';

const open = document.querySelector('.open');
const car = document.querySelector('.car');

const testArray = {
  passangerCar: [
    ['Opel', 'Crossland', 45],
    ['Opel', 'Grandland X', 53, 'gas'],
    ['Mazda', 'cx-5', 55],
    ['BMW', 'M5', 68, 'gas'],
    ['BMW', 'X5', 80],
    ['BMW', 'X5d', 80, 'diesel'],
    ['BMW', 'X3', 65],
    ['BMW', '5', 66, 'gas'],
  ],
  truck: [
    ['MAN', 'TGS', 400],
    ['MAN', 'TGX', 300, 'gas'],
    ['Mercedes-Benz', 'Actros', 450],
    ['Mercedes-Benz', 'Actros L', 650, 'gas'],
    ['Volvo', 'FH16', 700],
    ['Volvo', 'FM', 700, 'gas'],
    ['Volvo', 'FMX', 540],
  ],
};

const getTestCar = () => {
  const typeBool = Math.random() < 0.6;
  const listCar = typeBool ? testArray.passangerCar : testArray.truck;
  const randomCar = listCar[(Math.floor(Math.random() * listCar.length))];
  return typeBool ? new PassengerCar(...randomCar) : new Truck(...randomCar);
};

const station = new Station([
  {
    type: 'petrol',
    count: 2,
    // speed: 5,
  },
  {
    type: 'diesel',
    // count: 2,
    speed: 20,
  },
  {
    type: 'gas',
    count: 2,
    speed: 25,
  },
], '.app');

open.addEventListener('click', () => {
  station.init();
  console.log('station: ', station);
  open.remove();
  car.style.display = 'block';
  car.addEventListener('click', () => {
    station.addCarQueue(getTestCar());
  });
});


