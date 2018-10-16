const model = tf.sequential();

const configHidden=
{
  units: 4,
  inputShape:[2],
  activation:'sigmoid'
}



const hidden = tf.layers.dense(configHidden);


const configOutput=
{
  units:3,
  activation:'sigmoid'
}



const output = tf.layers.dense(configOutput);

model.add(hidden);
model.add(output);


const sgdOpt=tf.train.sgd(0.1);
const config=
{
  optimizer:sgdOpt,
  loss:'meanSquaredError'
}

model.compile(config);
