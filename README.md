# Tensorflow Linear Regression

Tensorflow implementation for Linear Regression.

# OverView
This is the code for a single variable linear regression, that is optimising the mean squared error using SGD(Stochastic Gradient Descent).
You can find the demo at  (https://tensorflow-linear-regression.herokuapp.com/)

# Demo Parts
The demo is devided into three parts.
## Training:
As we are using a variant of gradient descent, in the training part of the demo you can provide the training data the learning rate and the amount epochs.
![training](https://user-images.githubusercontent.com/26652672/43607095-2797db4a-9695-11e8-93c8-60244f05a76b.png)



## Prediction:
There is also a field for entering an X value to test the model on, that shows the predicted value and the expected value as the default values where suposed to be generated with Y = 6 * X + 2.
![prediction](https://user-images.githubusercontent.com/26652672/43607090-26a988d2-9695-11e8-8d0c-20c8ba842b06.png)

## Graph:
The last part is a graph that plots the training data set with the predicted X,Y pair along side the linear regression line.
![graph](https://user-images.githubusercontent.com/26652672/43607088-267aecc0-9695-11e8-9792-ca6c1d3dcf03.png)

# Dependecies
* [Angluar](https://angular.io/)
* [Plotly](https://plot.ly/javascript/)
* [TensorflowJS](https://js.tensorflow.org/)

Express and other depencies for the heroku deployment.

# Usage

* To use the default training data to predict on a new X value use the **prediction X** field to enter the amount.

* Now in order to provide your own data set you should enter two arrays with the same length.

**Example:**

You don't need to specify the learning rate and epochs but it is good to mess around with it since it can give u a very cool understanding of deep learning.
![trainingex](https://user-images.githubusercontent.com/26652672/43607096-27c1e28c-9695-11e8-97c1-0b79bcd55d34.png)

* Now for the prediction part you should just enter the X value in the field and it will update the graph and the expected and predicted values.

**Example:**

Predicting for *X = 25*
![prediction25](https://user-images.githubusercontent.com/26652672/43607093-273bc2b0-9695-11e8-9782-be24569e6e6f.png)
Predicting for *X = -10*
![prediction-10](https://user-images.githubusercontent.com/26652672/43607092-270cfdfe-9695-11e8-923c-61752259c346.png)
Predicting for *X = 10*
![prediction10](https://user-images.githubusercontent.com/26652672/43607091-26dbc446-9695-11e8-9459-17430f4ca5f8.png)
Predicting for *X = 60*
![prediction60](https://user-images.githubusercontent.com/26652672/43607094-27691d78-9695-11e8-883c-69ff90fc7569.png)

* Now the last part is something called **Exploding Gradients** which you might notice if you use a large learning rate with a large number of epochs.

 ![explosive gradients](https://user-images.githubusercontent.com/26652672/43607097-28140828-9695-11e8-8a0c-235b70a5a142.png)

As you can see the neural net(even if it is a one layer) outputs a NaN(Not A Number) and is not able to make the data for the chart.

In order to get more info about this probelm here is a very useful [link](https://machinelearningmastery.com/exploding-gradients-in-neural-networks/).
 # Credits
 Credits go to:
 * [Angular Firebase](https://www.youtube.com/watch?v=Y_XM3Bu-4yc)
 * [w3schools](https://www.w3schools.com/css/css_form.asp)
 * [TensorflowJs](https://js.tensorflow.org/)
 * [Siraj Ravel](https://github.com/llSourcell)
