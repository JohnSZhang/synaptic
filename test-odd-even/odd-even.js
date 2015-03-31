var synaptic = require('./../src/synaptic');
// 3 layers, 4 input, 1 hidden layer of 10 and 1 output.
var network = new synaptic.Architect.Perceptron(4, 10, 1);
var trainingSet = [
];

for (var i = 0; i < 1000; i += 1) {
  var one = Math.floor(Math.random() * 10);
  var two = Math.floor(Math.random() * 10);
  var three = Math.floor(Math.random() * 10);
  var four = Math.floor(Math.random() * 10);
  var isEven = (one + two + three + four) % 2 === 0 ? 0 : 1;
  trainingSet.push({
    input: [one, two, three, four],
    output: [isEven]
  })
}


var trainer = new synaptic.Trainer(network);

trainer.train(trainingSet, {
  iterations: 100000,
  customLog: {
    every: 100,
    do: function(error, iterations) {
        console.log("error", error, "iterations", iterations);
    }
}});

console.log('trying 4');
console.log(network.activate([1, 1, 1, 1]))
console.log('trying 13')
console.log(network.activate([1, 8, 2, 2]))
