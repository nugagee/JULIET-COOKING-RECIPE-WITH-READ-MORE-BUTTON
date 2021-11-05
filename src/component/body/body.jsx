import React,{useState} from "react";
import "./body.css";
import chef from "../../asset/img/chef.png";
import Modal from "../Modal/modal";
// import rice from "../../asset/img/fried.jpg"

const Body = ({ menu }) => {
  const [showModal, setShowModal] = useState(false)
  const [showModalDetails, setShowModalDetails] = useState(false)
  const [foodModalDetails, setFoodModalDetails] = useState([])

  const toggleModalOpen = (item) => {
    console.log(item)
    setFoodModalDetails(item)
    setShowModalDetails(true)
    setShowModal(true);
  };

  const toggleModalClose = () => {
    setShowModal(false);
  };

  // const receipe =localStorage.getItem('recipes')
  // console.log(receipe)

  const width = 500;
  const height = 700;
  const modalTitle ="More nutritional Benefit"
  const modalBody = (
    <div className="text-center">
      
         {showModalDetails && (
            <div>
                    <h6 className="modallabel">Food label: {foodModalDetails.recipe.label}</h6>
         <h3>Total-Weight: {foodModalDetails.recipe.totalWeight}</h3><br/>
         <h3>Cautions: {foodModalDetails.recipe.cautions}</h3><br/>
         <h3>DietLabels: {foodModalDetails.recipe.dietLabels}</h3><br/><br/>
         <h3>Nutrients</h3>
         <div className="modalmenu">
           <ul>
         {foodModalDetails.recipe.digest.map((digests,index) => (
                  <li key={index}>{digests.label}</li>
                  ))}
                  </ul>
                </div>
         {/* <button onClick={toggleModalClose}></button> */}
            </div>
         )}
   
    </div>
  );
  return (

    <div className="content">
      <Modal
        width={width}
        height={height}
        visible={showModal}
        title={modalTitle}
        body={modalBody}
        handleClose={toggleModalClose}
      />

      <h5>GET TO KNOW DIFFERENT FOOD NUTRITIONAL ANALYSIS AND RECIPE</h5>
      <div className="chef">
        <img src={chef} alt="" />
      </div>

      <p>Become a Better Cook</p>
      <div className="container">
        <div className="foodrecipe">
          {menu.map((menus, index) => (
            <div className="food-holder" key={index}>
              <h1>{menus.recipe.label}</h1>
              <br />
              <div className="food-img">
                <img src={menus.recipe.image} alt="" />
              </div>
              <br />
              <h3>CUISIN TYPE: {menus.recipe.cuisineType}</h3>
              <h3>DISH TYPE: {menus.recipe.dishType}</h3>
              <h3>MEAL TYPE: {menus.recipe.mealType}</h3><br/>
              <h2>Receipe</h2>
              
              <ul>
              {menus.recipe.ingredients.map((ingredient,index) => (
                
                  <li  key={index}>{ingredient.text}</li>
                  ))}
                  </ul>
              <h4>NO OF CALORIES: {menus.recipe.calories}</h4><br/>
              <button onClick={() => toggleModalOpen(menus)}>Read more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
