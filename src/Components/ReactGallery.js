import React, { useState } from 'react';
import FakeData from '../FakeData';
import Catagory from './Catagory';
import Menu from './Menu';
const allCatagories =[...new Set(FakeData.map(x=>x.catagory)),"All"];

const ReactGallery = () => {

    const [catagorItems,setCatagoryItems]=useState(allCatagories)
    const [items,setItems]=useState(FakeData)
    const filterImage=(fimage)=>{
        if(fimage==="All")
        {
            setItems(FakeData)
        }
        else{
            const filterImages = FakeData.filter((x)=>{
                return x.catagory===fimage;
        })
        setItems(filterImages)

        }
    }
    return (
        <div>
            <h1 className="mt-5 text-center main-heading">here showing gallery</h1>
            <hr />
            <Catagory filterImage={filterImage} setItems={setItems} catagorItems={catagorItems}/>
            <Menu items={items}/>
        </div>
    );
};

export default ReactGallery;