import React, {Component} from 'react';
import '../Styles/datesCardStyle.css';


class DateStrategy extends Component{
    render(){
    return( 
    <div class = "DateStrategyArea"> 
        <h1 class = "Title"> Swaps for Dating Market</h1>
        <h2 class= "TitleStats">Stats</h2>
    
        <div class = "Stats">
            <div>Anualized Returns: 34.31%</div>           
            <div>Max DrawDown: -10.2%</div>
            <div>Sharpe Ratio: 1.50 </div>
            <div>Profit-Loss Ratio: 2.00 </div>
            <div>Avg.Win: 3.431% </div>                    
            <div>Avg.Loss:.-0.68% </div>
        </div>

        <h2 class= "Strategy"> Strategy </h2>
        <p>
        Quant hub seeks to use superior statistical arbtriage in achieving a return for its investors
        through the combination of swaps and offering
        insurance against if a first, second, or third date will work out from popular dating websites such as tinder, hinge, or bumble. 
        </p>
        <h2 class = "Weakness"> Weakness </h2>
        <p >
          Risk of offering swaps in regards to dating can come in the form of 
          seasonal volume (i.e: some months more breakups occur = to more first dates avaiable) 
          extended amounts of unfortunate events (i.e: many people being ghosted)
        </p>
        <button>Click For More Information</button>
    </div>);
    
   
    }
}
       
        



export default DateStrategy;