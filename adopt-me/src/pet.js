import React from "react";

const Pet = ({ name, animal, breed }) => {
<<<<<<< HEAD
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h2", {}, breed)
  //   ]);

    return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
=======
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
>>>>>>> 4e22eaefe902387405244f5c541cff451688d67d
};

export default Pet;
