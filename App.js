import React, { useState } from 'react';
import './App.css';
import soniaImage from "./soniaImage.jpeg"
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import image4 from "./image4.jpg"
import image5 from "./images5.jpg"
import image6 from "./image6.jpg"
import image7 from "./image7.jpg"
import image8 from "./image8.jpeg"
import image9 from "./image9.jpg"


import switch2_image1 from "./eee1.png";
import switch2_image2 from "./eee2.jpg";
import switch2_image3 from "./eee4.jpg";
import switch2_image4 from "./eee6.jpg";
import switch2_image5 from "./eee7.png";
import switch2_image6 from "./eee8.png";
import switch2_image7 from "./eee10.jpg";
import switch2_image8 from "./eee11.jpg";
import switch2_image9 from "./eee3.png";


import switch3_image1 from "./ce1.jpg";
import switch3_image2 from "./ce2.jpg";
import switch3_image3 from "./ce3.jpeg";
import switch3_image4 from "./ce4.jpg";
import switch3_image5 from "./ce5.jpg";
import switch3_image6 from "./ce6.png";
import switch3_image7 from "./ce7.jpg";


import switch4_image1 from "./law1.jpg";
import switch4_image2 from "./law2.jpg";
import switch4_image3 from "./law3.jpg";
import switch4_image4 from "./law4.jpg";
import switch4_image5 from "./law5.jpg";
import switch4_image6 from "./law6.png";
import switch4_image7 from "./law7.png";
import switch4_image8 from "./law8.jpg";


import switch5_image1 from "./eng1.jpg";
import switch5_image2 from "./eng2.jpg";
import switch5_image3 from "./eng3.jpg";
import switch5_image4 from "./eng4.jpg";
import switch5_image5 from "./eng5.jpg";
import switch5_image6 from "./eng6.jpg";
import switch5_image7 from "./eng7.jpg";


const images = [{
    imageUrl: image1,
    name: 'Machine Learning',
    title: '32 Credits',
  },{
    imageUrl: image2,
    name: 'Thesis & Project ',
    title: '5 Credits',
  }, {
    imageUrl: image3,
    name: 'Computer Interfacing',
    title: '29 Credits',
  },{
    imageUrl: image4,
    name: 'Queueing Systems',
    title: '30 Credits',
  }, {
    imageUrl: image5,
    name: 'CI Sessional',
    title: '3 Credits',
  },{
    imageUrl: image6,
    name: 'Artificial Intelligence',
    title: '32 Credits',
  }, {
    imageUrl: image7,
    name: 'System Analysis, Design & Development',
    title: '29 Credits',
  },{
    imageUrl: image8,
    name: 'Artificial Intelligence Sessional',
    title: '3 Credits',
  },{
    imageUrl: image9,
    name: 'System Analysis, Design & Development Sessional',
    title: '3 Credits',
  },
];


const switch2Images = [{
    imageUrl: switch2_image1,
    name: 'Electrical Circuits',
    title: 'Credits: 10',
  },{
    imageUrl: switch2_image2,
    name: 'General Chemistry',
    title: 'Credits: 15',
  },{
    imageUrl: switch2_image3,
    name: 'Engineering Electromagnetics',
    title: 'Credits: 10',
  },{
    imageUrl: switch2_image4,
    name: 'Introduction to VLSI Systems',
    title: 'Credits: 15',
  },{
    imageUrl: switch2_image5,
    name: 'Control Systems',
    title: 'Credits: 10',
  },{
    imageUrl: switch2_image6,
    name: 'Semiconductor Devices',
    title: 'Credits: 15',
  },{
    imageUrl: switch2_image7,
    name: 'Microprocessor',
    title: 'Credits: 10',
  },{
    imageUrl: switch2_image8,
    name: 'Optical  Fiber',
    title: 'Credits: 15',
  },{
    imageUrl: switch2_image9,
    name: 'Microwave Engineering',
    title: 'Credits: 10',
  },
 
];


const switch3Images = [{
    imageUrl: switch3_image1,
    name: 'Engineering Materials',
    title: 'Credits: 10',
  },{
    imageUrl: switch3_image2,
    name: 'Details of Construction',
    title: 'Credits: 15',
  },{
    imageUrl: switch3_image3,
    name: 'Principles of Accounting',
    title: 'Credits: 10',
  },{
    imageUrl: switch3_image4,
    name: 'Professional Training   ',
    title: 'Credits: 15',
  },{
    imageUrl: switch3_image5,
    name: 'Structural Engineering',
    title: 'Credits: 10',
  },{
    imageUrl: switch3_image6,
    name: 'Geotechnical Engineering',
    title: 'Credits: 15',
  },{
    imageUrl: switch3_image7,
    name: 'Boundary Element',
    title: 'Credits: 10',
  },
  
];


const switch4Images = [{
    imageUrl: switch4_image1,
    name: 'Jurisprudence and Legal Theory',
    title: 'Credits: 10',
  },{
    imageUrl: switch4_image2,
    name: 'Basic English Language',
    title: 'Credits: 15',
  },{
    imageUrl: switch4_image3,
    name: 'Legal History',
    title: 'Credits: 10',
  },{
    imageUrl: switch4_image4,
    name: 'Constitutional Law',
    title: 'Credits: 15',
  },{
    imageUrl: switch4_image5,
    name: 'Constitutional Law',
    title: 'Credits: 10',
  },{
    imageUrl: switch4_image6,
    name: 'Introduction to Computer',
    title: 'Credits: 15',
  },{
    imageUrl: switch4_image7,
    name: 'Law of Tort',
    title: 'Credits: 10',
  },{
    imageUrl: switch4_image8,
    name: 'Law on Equity and Trust',
    title: 'Credits: 10',
  },
 
];


const switch5Images = [{
    imageUrl: switch5_image1,
    name: 'English Grammar and Composition',
    title: 'Credits: 10',
  },{
    imageUrl: switch5_image2,
    name: 'Reading and Writing Skills',
    title: 'Credits: 15',
  },{
    imageUrl: switch5_image3,
    name: 'Computer Skills',
    title: 'Credits: 10',
  },{
    imageUrl: switch5_image4,
    name: 'Bangladesh Studies',
    title: 'Credits: 15',
  },{
    imageUrl: switch5_image5,
    name: 'Introduction to Drama',
    title: 'Credits: 10',
  },{
    imageUrl: switch5_image6,
    name: 'Old English Poetry ',
    title: 'Credits: 15',
  },{
    imageUrl: switch5_image7,
    name: 'Introduction to Philosophy',
    title: 'Credits: 10',
  },
   
];


// Map each image button to its corresponding value
const imageValueMap = {
  [image1]: 32, [image2]: 5, [image3]: 29, [image4]: 30,[image5]: 3,[image6]: 32, [image7]: 29, [image8]: 3,
  [image9]: 3,
};


// Define the imageValueMap for the Switch 2 images
const switch2ImageValueMap = {
  [switch2_image1]: 10, [switch2_image2]: 15, [switch2_image3]: 10, [switch2_image4]: 15, [switch2_image5]: 10,
  [switch2_image6]: 15, [switch2_image7]: 10, [switch2_image8]: 15, [switch2_image9]: 10,
  
};


// Define the imageValueMap for the Switch 2 images
const switch3ImageValueMap = {
  [switch3_image1]: 10, [switch3_image2]: 15, [switch3_image3]: 10, [switch3_image4]: 15, [switch3_image5]: 10,
  [switch3_image6]: 15, [switch3_image7]: 10,
 
};


// Define the imageValueMap for the Switch 2 images
const switch4ImageValueMap = {
  [switch4_image1]: 10, [switch4_image2]: 15, [switch4_image3]: 10, [switch4_image4]: 15,
  [switch4_image5]: 10, [switch4_image6]: 15, [switch4_image7]: 10, [switch4_image8]: 10,
 
};


// Define the imageValueMap for the Switch 2 images
const switch5ImageValueMap = { [switch5_image1]: 10, [switch5_image2]: 15, [switch5_image3]: 10,
  [switch5_image4]: 15, [switch5_image5]: 10, [switch5_image6]: 15, [switch5_image7]: 10,

};


const App = () => {
  const [buttonsState, setButtonsState] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
  });


  const [totalValue, setTotalValue] = useState(0);
  const [currentImages, setCurrentImages] = useState(images);
  const [selectedImages, setSelectedImages] = useState([]);
  const [showNotification, setShowNotification] = useState(false);


  // Check if any switch button is active, if yes, show the notification "Course registration completed"
  const handleSoniaButtonClick = () => {
    if (Object.values(buttonsState).some((active) => active)) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    } else {
      setShowNotification(false);           // If no switch button is active, show the notification "You have already selected"
    }
  };

  
  const handleButtonClick = (buttonName) => {
    if (buttonsState[buttonName]) {
      setButtonsState((prevState) => ({
        ...prevState,
        [buttonName]: !prevState[buttonName],
        
      }));
     
      setCurrentImages(images);
      setSelectedImages([]);
      setTotalValue(0);
      return;
    }
    

 // If any other switch is active, show the notification
 if (Object.values(buttonsState).some((active) => active && active !== buttonsState[buttonName])) {
  setShowNotification(false);
  return;
}


setButtonsState((prevState) => ({
  ...prevState,
  button1: false,
  button2: false,
  button3: false,
  button4: false,
  button5: false,
  [buttonName]: true,
}));


    if (buttonName === 'button1') {
      setCurrentImages(images);
    } 
    else if (buttonName === 'button2') {
      setCurrentImages(switch2Images);
    }
    else if (buttonName === 'button3') {
      setCurrentImages(switch3Images);
    }
    else if (buttonName === 'button4') {
      setCurrentImages(switch4Images);
    }
    else if (buttonName === 'button5') {
      setCurrentImages(switch5Images);
    }


     // Reset the selected images and total value
     setSelectedImages([]);
     setTotalValue(0);
     setShowNotification(false);                     // Hide the notification 
  
  };
    

  const handleImageButtonClick = (imageUrl) => {
    if (!selectedImages.includes(imageUrl)) {
      let imageValue;
      if (currentImages === images) {                  // Check if the image is not already selected
        imageValue = imageValueMap[imageUrl];          // Use the imageValueMap for the initial set of images
      } 
      else if (currentImages === switch2Images) {
        imageValue = switch2ImageValueMap[imageUrl];      // Use the imageValueMap for Switch 2 images
      }
      else if (currentImages === switch3Images) {
        imageValue = switch3ImageValueMap[imageUrl];
      }
      else if (currentImages === switch4Images) {
        imageValue = switch4ImageValueMap[imageUrl];
      }
      else if (currentImages === switch5Images) {
        imageValue = switch5ImageValueMap[imageUrl];
      }
      setTotalValue((prevValue) => prevValue + imageValue);              // Update the totalValue based on the selected image's value

      setSelectedImages((prevSelectedImages) => [...prevSelectedImages, imageUrl]);       // Add the selected image to the list
    }
  };


  const getSelectedDepartment = () => {
    if (buttonsState.button1) return 'CSE department is selected';
    if (buttonsState.button2) return 'EEE department is selected';
    if (buttonsState.button3) return 'CE department is selected';
    if (buttonsState.button4) return 'LAW department is selected';
    if (buttonsState.button5) return 'English department is selected';
    return 'No department code is selected';
  };
  


  return (
    <div>   
      <div className="section-heading" > 
         <h1 className='shining_text'>Course Registration</h1>
      </div>
    <div className="section-content">  
    <div className="container">
      <div className="image-gallery">
      {currentImages.map((image, index) => (
          <div className="image-row" key={index}>
            <div className="image-box">
              <img src={image.imageUrl} alt={image.name} />
              <div className="content">
                <h3>{image.name}</h3>
                <p>{image.title}</p>
                <button onClick={() => handleImageButtonClick(image.imageUrl)}>
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="box-container">
        <div className="box sonia-box">
        <img src={soniaImage} alt="Sonia Akter" />
          <p>Sonia Akter</p>
          <div className="additional-boxes">
            <div className="additional-box">
              <h3>ID</h3>
              <p>1111064</p>
            </div>
            <div className="additional-box">
              <h3>L/T</h3>
              <p>4/1</p>
            </div>
            <div className="additional-box">
              <h3>Section</h3>
              <p>'B'</p>
            </div>
          </div>
          <div className="switch-box">
       <div className="message">Select your department code</div>
          <div className="buttons-container">  
            <button
              className={`switch-btn ${buttonsState.button1 ? 'active' : ''}`}
              onClick={() => handleButtonClick('button1')}
            >
              1
            </button>
            <button
              className={`switch-btn ${buttonsState.button2 ? 'active' : ''}`}
              onClick={() => handleButtonClick('button2')}
            >
              2
            </button>
            <button
              className={`switch-btn ${buttonsState.button3 ? 'active' : ''}`}
              onClick={() => handleButtonClick('button3')}
            >
              3
            </button>
            <button
              className={`switch-btn ${buttonsState.button4 ? 'active' : ''}`}
              onClick={() => handleButtonClick('button4')}
            >
              4
            </button>  
            <button
              className={`switch-btn ${buttonsState.button5 ? 'active' : ''}`}
              onClick={() => handleButtonClick('button5')}
            >
              5
            </button>   
          </div>
         <div className="message">{getSelectedDepartment()}</div>
        </div>
        <div className="new-box">
          <p>{`Total Credits: ${totalValue}`}</p>
        </div>
        <button className="sonia-button" onClick={handleSoniaButtonClick}>
            Complete
          </button>
        </div>
      </div>
      {showNotification && (
            <div className="notification">
              {/* Updated conditional rendering logic for the notification */}
              {Object.values(buttonsState).some((active) => active)
                ? 'Course registration completed'
                : 'You have already selected'}
            </div>
          )}
          
        </div>
      </div>
     <div className="section-footer">
     <p>&copy; 2023 Copyright. All rights reserved.</p>
   </div>
    </div>
  );
};
   

export default App;
