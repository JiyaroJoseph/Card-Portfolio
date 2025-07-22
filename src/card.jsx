import PROFILE_PIC from './assets/spartan pic.jpg';   // Importing the image file with var name PROFILE_PIC

function Card(){

  return(

    <div className="card">                  {/* #### IN JSX, CLASS IS A RESERVED KEYWORD SO USE className INSTEAD */}
      
      <img src= {PROFILE_PIC} alt='Profile Picture' className= 'image'></img>
      <h2 className="name"> Jiyaro </h2>
      <p className="info"> I am currently diving into the world of Web Development </p>
    
    </div>           

  );

}


 export default Card;