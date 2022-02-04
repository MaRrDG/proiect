import React from "react";

const Header = ({ onChangeRoute }) => {
    return(
      <header>
        <h1 className='title' onClick={() => { onChangeRoute('Home') }}>HEAD OF STAFF</h1>
        <p className='add' onClick={() => { onChangeRoute('Add') }}>ADD</p>
      </header>
    );
};

export default Header;