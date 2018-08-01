import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tensorflowApp';
  linearModel: tf.Sequential;
  prediction: any;
  should: any;
  learningRate: 0.00001;
  epochs: 1000;
  @ViewChild('canvas') canvas: ElementRef;
  chart = [];
  x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
  y = [0.43, -3.02, 28.73, 8.90, 39.03, 36.24, 35.34, 56.97, 37.60, 63.53, 52.56, 72.77, 80.45, 72.33,
    91.21, 77.68, 112.10, 101.95, 104.42, 101.83, 132.91, 135.53, 146.29, 152.99, 140.07, 157.00, 168.88,
    153.88, 177.51, 168.25, 177.80, 189.42, 200.21, 201.98, 205.05, 198.74, 213.81, 222.31, 220.98, 241.83,
    245.70, 246.57, 250.95, 249.01, 252.32, 260.56, 271.98, 296.53, 302.98, 299.48];
  xs = tf.tensor1d(this.x);
  ys = tf.tensor1d(this.y);
  p = 25;

  ngOnInit(): void {
    this.train();
    // const ctx = document.getElementById('myChart');

  }

  async train(): Promise<any> {
    // Define a model for linear regression.
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // Prepare the model for training: Specify the loss and the optimizer.
    this.linearModel.compile({loss: 'meanSquaredError', optimizer: tf.train.sgd(this.learningRate)});


    // Training data, completely random stuff


    // Train
    await this.linearModel.fit(this.xs, this.ys, {epochs: this.epochs});
    this.predict(25);


    const minX = Math.min(...this.x, this.p);
    const maxX = Math.max(...this.x, this.p);

    const maxY = Array.from((this.linearModel.predict(tf.tensor2d([maxX], [1, 1])) as any).dataSync())[0];
    const minY = Array.from((this.linearModel.predict(tf.tensor2d([minX], [1, 1])) as any).dataSync())[0];

    const training = {
      x: this.x,
      y: this.y,
      name: 'Training',
      mode: 'markers'
    };

    const prediction = {
      x: [this.p],
      y: [this.prediction],
      name: 'Input Prediction',
      mode: 'markers'
    };

    const predicted = {
      x: [minX, maxX],
      y: [minY, maxY],
      name: 'Data Set Prediction',
      mode: 'lines'
    };

    const data = [training, prediction, predicted];

    const layout = {};

    // @ts-ignore
    Plotly.newPlot('myDiv', data, layout);
    // const data = [];
    // for (let i = 0; i < this.x.length; i++) {
    //   data.push({
    //     x: this.x[i],
    //     y: this.y[i]
    //   });
    // }
    // console.log(typeof this.prediction);
    // this.x.push(this.p as number);
    // // this.y.push(Math.round(this.prediction as number));
    // // @ts-ignore
    // this.chart = new Chart(document.getElementById('canvas').getContext('2d'), {
    //   type: 'line',
    //   data: {
    //     datasets: [
    //       {
    //         type: 'scatter',
    //         label: 'Training',
    //         data: [{x: this.p, y: this.prediction}],
    //         borderColor: '#3CBC8D',
    //         fill: false,
    //         showLine: false,
    //         pointRadius: 5,
    //
    //       },
    //       {
    //         type: 'scatter',
    //         label: 'prediction',
    //         data: [{x: this.p, y: this.prediction}],
    //         borderColor: '#3d43ba',
    //         fill: true,
    //         showLine: false,
    //         pointRadius: 10,
    //
    //       },
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: true
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true,
    //         ticks: {
    //           max: 50,
    //           min: -50,
    //           stepSize: 0.5
    //         }
    //       }],
    //       yAxes: [{
    //         display: true,
    //         ticks: {
    //           beginAtZero: true,
    //           max: Math.max(...this.y, this.prediction) + 1,
    //           min: Math.min(...this.y, this.prediction) - 1
    //         }
    //       }],
    //     }
    //   }
    // });
    // console.log('done');

  }

  predict(val: number) {
    this.p = val;
    const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
    this.prediction = Array.from(output.dataSync())[0];
    this.should = 6 * val + 2;
  }

  getXArray(val: any) {
    this.x = JSON.parse(val);
    this.xs = tf.tensor1d(this.x);
  }

  getYArray(val: any) {
    this.y = JSON.parse(val);
    this.ys = tf.tensor1d(this.y);
  }

  getLearningRate(val: any) {
    this.learningRate = val;
  }

  getEpochs(val: any) {
    this.epochs = val;
  }
}
