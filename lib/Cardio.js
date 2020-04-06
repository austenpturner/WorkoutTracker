const Exercise = require('./Exercise');

class Cardio extends Exercise {
    constructor(type, name, duration, distance) {
      super(type, name, duration);
      this.distance = distance;
    }
};
  
module.exports = Cardio;