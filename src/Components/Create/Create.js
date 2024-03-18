import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContex, AuthContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history = useHistory()

  const { firebase } = useContext(FirebaseContex)
  const { user } = useContext(AuthContext)

  const [itemName, setItemName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const date = new Date()
  const handelSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        firebase.firestore().collection('products').add({
          itemName,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: date.toDateString()
        })
        history.push('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">

          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
            type="text"
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            type="text"
            id="fname"
            name="category"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            id="fname"
            name="Price" />
          <br />
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ''}></img>
          <br />
          <input
            type="file" onChange={(event) => {
              setImage(event.target.files[0])
            }} />
          <br />
          <button onClick={handelSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment >
  );
};

export default Create;
