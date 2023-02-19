import React, { useState } from 'react';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';



const SetGoal = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log('goal list>>>', basket);
  const history = useNavigate();
  // const data= basket.size()-1;
  // console.log(data);

  const [val, setVal] = useState(0);
  const [userData,setUserData]=useState();
  const data = [6, 12, 24, 36];
  let a = 0;


  function setValue(e) {
    a = e.target.value;
    setVal(e.target.value);
    console.log(a);
  }


  const handleInputs=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setUserData({...userData, [name]:value});
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      {
        basket?.map((product, i) => (
          <div className="col order-md-1 order-sm-1 order-xs-1" key={i}>

            <div className="container box" data-aos="fade-up">

              <form id="enterinfo" class="row form-control-lg">
                <div class="col-12 mt-3 mb-2">
                  <input type="text" className="form-control" name="title" defaultValue={product.title}
                    onChange={handleInputs} readOnly />
                </div>
                <div class="col-md-6 mt-2 mb-2">
                  Product Price: <input type="text" className="form-control" name="price" defaultValue={product.price}
                    onChange={handleInputs} readOnly />
                </div>
                <div className="col-md-6 mt-2 mb-2">
                  Product of 75% :<input type="text" className="form-control" name="price75" defaultValue={((product.price) * 75) / 100}
                    onChange={handleInputs} readOnly />
                </div>
                <div className="col-md-6 mt-2 mb-2">
                  Instalment Per Month :<input type="text" className="form-control" name="monthlyprice" value={(((product.price) * 75) / 100) / val}
                    onChange={handleInputs} readOnly />
                </div>

                <div>
                  <select value={val} onChange={setValue}>
                    {
                      data.map(opt => <option>{opt}</option>)
                    }
                  </select>
                  <font color="white">Months</font>
                </div>

                <div className="col-md-6 mt-2 mb-2">
                  <input type="password" class="form-control" id="inputPassword4"
                    placeholder="Your Mobile" />
                </div>
                <div className=" col-12 mt-2 mb-2 ">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  {/* <label for="floatingTextarea">Comments</label> */}
                </div>
                <div className="col-12 mt-2 mb-2">
                  <button type="submit" className="btn btn-outline-light" onClick={(e) => {
                    //  e.preventDefault();
                    dispatch({
                      type: 'ADD_TO_GOAL',
                      item: {
                        title: product.title,
                        imgURL: product.imageURL,
                        price: product.price
                      }
                    })
                    history("/GoalList");

                  }}><b>Set to Goal </b></button>
                </div>
              </form>
            </div>
          </div>
        ))}
    </div>
  )
}

export default SetGoal
