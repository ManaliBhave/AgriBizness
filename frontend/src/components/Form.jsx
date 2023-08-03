import React from 'react';
import "./Form.css"

const Form=()=>{
    return(
    <div>

    <form action="" class="soham">
      
      
      <div class="container">  
         
        <h2>Crop Recommendation System</h2>
        <h6>Required fields are followed by *</h6>
        <hr/>
        <br/>
        <p>Amount of Nitrogen(N):* <input type="number" name="Nitrogen"  required/></p>
        <p>Amount of Phosphorus(P):* <input type="number" name="Phosphorus" required/></p>
        <p>Amount of Potassium(K):* <input type="number" name="Potassium" required/></p>
        <p>Temperature:* <input type="number" name="Temperature" required/></p>
        <p>Humidity(%):* <input type="number" name="Humidity" required/></p>
        <p>Rainfall:* <input type="number" name="Rainfall" required/></p>
        <p>pH:* <input type="number" name="pH" required/></p>
        <br/>
        <label for="soil-type">Soil Type:</label>
      <select id="soil-type" name="soil-type" required>
        <option value="">Select Soil Type</option>
        <option value="clay">Clay</option>
        <option value="sandy">Sandy</option>
        <option value="loam">Loam</option>
      </select>
        <hr/>
        
        
        <p>
        <input type="submit" value="Get Crop Recommendation"  class="submit-button" />
        </p>
        <br/>
        <p>
        <output name="Crops" for="Crops"></output>
        </p>
        
        </div>
        
    </form>

    </div>

    
    ) }
    export default Form;
    
