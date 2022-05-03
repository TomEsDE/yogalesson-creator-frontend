import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import './asanaCard.scss';

const AsanaCard = ({ asana }) => {
  const navigate = useNavigate();

  const {
    userClasses,
    setUserClasses,
    asanas,
    setAsanas,
    userSequences,
    setUserSequences,
    loading,
    gridResponsiveness,
    yogaClassToAdd,
    setYogaClassToAdd,
    sequenceToAdd,
    setSequenceToAdd
  } = useOutletContext();

  const handleSelectAsana = () => {
    sequenceToAdd.asanas.push(asana);
    navigate(`../planner`);
  };

  return (
    <div
      onClick={handleSelectAsana}
      className="asanacard-jsx rounded overflow-hidden shadow-lg m-2 cursor-pointer bg-white"
    >
      <img className="" src={asana.img_url} alt="preview class" />
      <div className="px-6 pt-3 pb-3 bg-light h-20">
        <h3 className="color-blue-darkest font-bold text-xs">
          {asana.asana.sanskrit}
        </h3>
        <h3 className="color-blue-darkest text-xs">{asana.asana.name}</h3>
      </div>
    </div>
  );
};

export default AsanaCard;
