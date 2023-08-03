import React from 'react';
import "./Form2.css"

const Form2=()=>{
    return(
    <div >

    <form action="" class="soham">
      
      
      <div class="container">  
         
        <h2>Predict Fertilizer For Your Soil Type!</h2>
        <h6>Required fields are followed by *</h6>
        <hr/>
        <br/>
        
        
        
        <p>Temperature:* <input type="number" name="Temperature" required/></p>
        <p>Humidity(%):* <input type="number" name="Humidity" required/></p>
        <p>Moisture:* <input type="number" name="Moisture" required/></p>
        
        
        
        <p>
        <label for="soil-type">Soil Type:* </label>
        <select id="soil-type" name="soil-type" required>
        <option value="">Select Soil Type</option>
        <option value="clay">Clay</option>
        <option value="sandy">Sandy</option>
        <option value="loam">Loam</option>
      </select>
        </p>
         <p>
         <label for="soil-type">Crop Type:* </label>
         <select id="crop-type" name="crop-type" required>
        <option value="">Select Crop Type</option>
        <option value="clay">Clay</option>
        <option value="sandy">Sandy</option>
        <option value="loam">Loam</option>
      </select>
         </p>
      
      <p>Amount of Nitrogen(N):* <input type="number" name="Nitrogen" required/></p>
      <p>Amount of Potassium(K):* <input type="number" name="Potassium" required/></p>
      <p>Amount of Phosphorous(P):* <input type="number" name="Phosphorous" required/></p>
        <hr/>
        <br/>
        
        <p>
        <input type="submit" value="Get Fertilizer Recommendation"  class="submit-button" />
        </p>
        
        <p>
        <output name="Fertilizer" for="Fertilizer">Fertilizer Name: </output>
        </p>
        
        </div>
        
    </form>

    </div>

    
    ) }
    export default Form2;
    
