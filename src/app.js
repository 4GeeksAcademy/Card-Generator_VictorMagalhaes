/* eslint-disable */
import "bootstrap";
import "./style.css";
import { Button } from "bootstrap";

window.onload = function() {
  //write your code here
  let nipes = [
    '<i style="color: red;">♥</i>',
    "<i>♠</i>",
    '<i style="color: red;">♦</i>',
    "<i>♣</i>"
  ];
  let faces = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let nipeIndex = Math.floor(Math.random() * 4);
  let nipe = nipes[nipeIndex];
  let face = faces[Math.floor(Math.random() * faces.length)];

  document.getElementById("nipeIcon").innerHTML = nipe;
  document.getElementById("bottomNipeIcon").innerHTML = nipe;

  document.getElementById("face").innerHTML = face;

  setTimeout(() => {
    document.location.reload();
  }, 10000);

  let createCard = get.getElementById("createCard");
  createCard.addEventListener("click", valuesCard);

  let valuesCard = () => {
    let width = document.getElementById("widthImput").value;
    let heigth = document.getElementById("heigthImput").value;
  };
};
