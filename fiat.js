let fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Blue",
  passengers: 2,
  mileage: 88000,
  started: false,
  fuel: 0,
  start: function () {
    if (this.fuel > 0) {
      this.started = true;
      alert("- Машина заведена!");
    }
    else {
      alert("- Сначала залейте топлива!");
    }
  },
  stop: function () {
    this.started = false;
    alert("- Машина остановлена!");
  },
  plusFuel: function () {
    this.fuel += 10;
    alert("- В баке 10л бензина!");
  },
  drive: function () {
    if (this.started) {
      if (this.fuel <= 0) {
        this.started = false;
        alert("- Машина не может продолжать движение, закончилось топливо (двигатель отключен)!");
      } 
      else {
        this.fuel -= 2;
        alert("- Вы потратили 2л топлива");
      }
    } 
    else {
      alert("- Сначала запустите двигатель!");
    }
    
  },
  showFuel: function () {
    alert("- У меня в баке " + this.fuel + "л бензина!");
  },
  toString: function () {
    return "Автомобиль " + this.make + " " + this.year;
  },
};
/*
fiat.start();
fiat.plusFuel();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.showFuel();
*/
