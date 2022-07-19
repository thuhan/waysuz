'use strict';

import './popup.css';
import Rabbit from 'rabbit-node/lib/rabbit';

const zawgyiTextArea = document.getElementById('zawgyi-text-area')
const unicodeTextArea = document.getElementById('unicode-text-area')




let textAreas = [zawgyiTextArea, unicodeTextArea]

let textFieldInFocus
textAreas.forEach(ta => {
  ta.addEventListener('focus', e => textFieldInFocus = e.target) 
  ta.addEventListener('blur', e => textFieldInFocus = null)
})

onchangeHandler(unicodeTextArea,zawgyiTextArea,"uni2zg");
onchangeHandler(zawgyiTextArea,unicodeTextArea,"zg2uni");

function converter(textField,tochangeField,toconv) {
  if(tochangeField != textFieldInFocus) {
      if(toconv == "uni2zg") {
            tochangeField.value = Rabbit.uni2zg(textField.value);
      }
      else {
           tochangeField.value = Rabbit.zg2uni(textField.value);
      }
  }
}

function onchangeHandler(textField,tochangeField,toconv) {
    textField.addEventListener('input', function() {
        converter(textField,tochangeField,toconv);
    })
}