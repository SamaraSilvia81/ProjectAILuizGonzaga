import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import styles from "./About.module.css";

function About() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <div>
              <h2 className={styles.title}>Project AI <span>Luiz Gonzaga</span></h2>
              <p className={styles.description}> Hello! We are Alice Florencio, Bruna Lins, Eudes Pereira, Maria Eduarda Souto, Samara Silvia and Quezia Aquino. Currently students of the 4th period of the course Systems for Internet.   
              <br/><br/>
              This project aims to produce an application involving text, in this case, <span>Natural Language Processing</span>, in which the user will type a text via input, sends it to the back-end, the AI model takes the text and generates a new text based on the singer Luiz Gonzaga used in the training of the network, finally the system sends a response to the front. </p>
            </div>
            <div className={styles.textTech}>
              <h3>Technologies Used</h3>
              <ul>
                <li>React JS</li>
                <li>Python</li>
                <li>Flask</li>
                <li>Tensorflow/Keras</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;