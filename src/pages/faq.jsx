import React from 'react';
import "./faq.css";



const Faq = () => {
   

    return (
        <div className="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
                <h4>What are organic foods?</h4>
                <p>Organic foods are produced using methods that do not involve synthetic pesticides, fertilizers, genetically modified organisms (GMOs), or other artificial additives. They emphasize natural processes and sustainability.</p>
            </div>
            <div className="faq-item">
                <h4>Why should I choose organic foods?</h4>
                <p>Choosing organic foods can reduce your exposure to synthetic chemicals, support sustainable farming practices, and often provide more nutrients. Additionally, organic farming promotes better animal welfare and biodiversity.</p>
            </div>
            <div className="faq-item">
                <h4>Are organic foods healthier than conventional foods?</h4>
                <p>While some studies suggest that organic foods can have higher levels of certain nutrients and lower levels of pesticide residues, the overall health benefits can vary. Many people choose organic for the environmental and ethical benefits as well.</p>
            </div>
            <div className="faq-item">
                <h4>How are organic foods certified?</h4>
                <p>Organic foods are certified by various organizations that set specific standards for organic farming and production. In the United States, the USDA Organic certification is a common standard that ensures products meet strict guidelines.</p>
            </div>
           
        </div>)};
export default Faq;