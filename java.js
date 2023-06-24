body {
  background-color: black;
  overflow-x: hidden;
}

.flex1 {
  display: flex;
  justify-content: space-between;
}

.white {
  color: white;
}

.head1 {
  padding-left: 110px;
  padding-top: 60px;
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 2em;
}

.tasks {
  font-weight: 900;
}
.white1 {
  color: #ffffffb8;
}

.right {
  padding-right: 160px;
  padding-top: 60px;
}

.button1 {
  border-radius: 50%;
  background-color: #2196f3d4;
  border: none;
  color: black;
  font-size: 20px;
  font-weight: 700;
}

.add1 {
  font-size: 1.5em;
  font-family: "Roboto", sans-serif;
  position: absolute;
  right: 7rem;
  top: 5rem;
}

.container {
  position: relative;
  top: 50px;
  left: 110px;
  font-size: 1.5em;
  font-family: "Roboto", sans-serif;
}

.container1 {
  display: flex;
  position: relative;
  top: 100px;
  /* left: 110px; */
  /* right: 110px; */
  margin-left: 110px;
  margin-right: 110px;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 240px;
  margin: 20px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 10px;
  text-align: center;
  position: relative;
  transition: 1s;
}
.card:hover {
  transform: translateY(10px);
}
.ftext1 {
  padding-top: 20px;
  color: red;
  overflow: auto;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 25px;
  font-weight: bold;
}

.addlist {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  display: none;
}
.popup1 {
  background-color: gray;
  font-size: 1.2rem;
  height: 180px;
  width: 300px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Roboto";
  z-index: 2;
  box-shadow: 0px 0px 20px 1000px #212121db;
}

.text1 {
  color: red;
  text-align: center;
  padding-top: 0.8rem;
}

.ppt {
  background-color: red;
  color: wheat;
  border-radius: 10px;
  height: 2rem;
  width: 3.5rem;
  border: none;
}

.input1 {
  text-align: center;
  width: 250px;
  height: 1.5rem;
  border: 1px solid black;
}

.bflex {
  display: flex;
  justify-content: space-around;
  width: 180px;
}

.delb {
  position: relative; /* updated */
  bottom: 5px;
  /* right: 70px; */
  font-size: 20px;
  background-color: red;
  color: white;
  border-radius: 50%;
  border: 1px solid red;
}

.plusbutn {
  position: relative; /* updated */
  bottom: 5px;
  /* right: 20px; */
  font-size: 20px;
  background-color: blue;
  color: white;
  border-radius: 50%;
  border: 1px solid blue;
}

.addlist2 {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

.spaceItem {
  color: black;
  padding: 5px;
}

.task1 {
  /* padding: 10px; */
  position: relative; /* updated */
  height: 200px;
  display: flex;
  overflow: auto;
  width: 240px;
}

.btnspace {
  height: 30px; /* updated */
}

ul {
  color: black;
  list-style-type: none;
  text-align: start;
}

.checked {
  text-decoration: line-through;
}

.vanish2 {
  display: none;
}

.arr {
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
}

.cardHeading {
  color: white;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
}

.buttonPosition {
  position: absolute;
  right: 14rem;
  top: 5rem;
}

.displayJustCard {
  margin: auto;
  position: relative;
}

.back {
  display: none;
  position: absolute;
  top: 5rem;
  left: 8rem;
}

.addlist3 {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 999;
}

li {
  padding-bottom: 5px;
}

@media screen and (min-width: 300px) and (max-width: 600px) {
  /* .head1 {
    position: absolute;
    padding-top: 2rem;
  } */
  .buttonPosition {
    position: absolute;
    right: 11rem;
    top: 12rem;
  }
  .add1 {
    font-size: 1.5em;
    font-family: "Roboto", sans-serif;
    position: absolute;
    right: 7rem;
    top: 10rem;
  }
  .back {
    display: none;
    position: absolute;
    top: 3rem;
    left: 4rem;
  }
  .right {
    top: -138px;
    left: 365px;
    position: absolute;
  }
  .card {
    top: 160px;
    width: 240px;
    margin: 20px;
    height: 300px;
    background-color: aliceblue;
    border-radius: 10px;
    text-align: center;
    position: relative;
    transition: 1s;
  }
  .cardHeading {
    right: 0px;
    top: 133px;
    position: absolute;
    color: white;
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
  }
}
