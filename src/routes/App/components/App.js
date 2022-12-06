import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';
/* 
Think about:
  1.How we would use Dark mode on other potential routes/components in a bigger application. Would your solution work for this?
    ans:import the '../styles/_app.scss' and useState than you can use dark mode in following code I've done.
  2.How we can apply a class to the html DOM element?
    ans:use useState to change the const state. 
*/
function App() {
  const[mode,setDarkMode]=useState(false);
  const[icon,setIcon]=useState(false);//faMoon/faSun
  const[color,setColor]=useState(false);

  return (
    <div className={mode?"dark-mode":"app"}>
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        {/* --The button that should toggle dark mode-- */}
        <button className="app__dark-mode-btn icon level-right" onClick={()=>{setDarkMode(!mode);setIcon(!icon);setColor(!color)}}>
          <FontAwesomeIcon icon={icon?faSun:faMoon} style={color?{color:"#FFA500"}:{}}/>
        </button>

      </div>

      <div className="columns">
        <div className="column">
          <p>Lollipop powder powder. Cotton candy caramels chupa chups halvah muffin caramels apple pie topping cake. Topping chocolate bar pastry chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum. Chocolate bar lollipop candy canes. Biscuit croissant apple pie pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu chocolate bar carrot cake lemon drops halvah.</p>
        </div>
        <div className="column">
          <p>Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart. Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding sugar plum chocolate cake cake biscuit pastry pastry chocolate bar tart. Lemon drops dessert gummies icing.</p>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );
}

export default App;
