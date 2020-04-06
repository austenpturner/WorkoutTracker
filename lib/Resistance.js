const Exercise = require('./Exercise');

class Resistance extends Exercise {
    constructor(type, name, duration, weight, reps, sets) {
      super(type, name, duration);
      this.weight = weight;
      this.reps = reps;
      this.sets = sets;
    }
};
  
module.exports = Resistance;