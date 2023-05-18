const getHafta = () => {
  let Hafta = new Date();
  if (Hafta.getDay() === 1) {
    return `Dushanba`;
  } else if (Hafta.getDay() === 2) {
    return "Seshanba";
  } else if (Hafta.getDay() === 3) {
    return "Chorshanba";
  } else if (Hafta.getDay() === 4) {
    return "Payshanba";
  } else if (Hafta.getDay() === 5) {
    return "Juma";
  } else if (Hafta.getDay() === 6) {
    return "Shanba";
  } else if (Hafta.getDay() === 0) {
    return "Yakshanba";
  }
};

const getHafta1 = () => {
  let Hafta = new Date();
  if (Hafta.getDay() === 1) {
    return `Dush`;
  } else if (Hafta.getDay() === 2) {
    return "Sesh";
  } else if (Hafta.getDay() === 3) {
    return "Chor";
  } else if (Hafta.getDay() === 4) {
    return "Paysh";
  } else if (Hafta.getDay() === 5) {
    return "Juma";
  } else if (Hafta.getDay() === 6) {
    return "Shan";
  } else if (Hafta.getDay() === 0) {
    return "Yaksh";
  }
};

const getOy = () => {
  let oy = new Date();
  if (oy.getMonth() + 1 === 1) {
    return "Yanvar";
  } else if (oy.getMonth() + 1 === 2) {
    return "Fevral";
  } else if (oy.getMonth() + 1 === 3) {
    return "Mart";
  } else if (oy.getMonth() + 1 === 4) {
    return "Aprel";
  } else if (oy.getMonth() + 1 === 5) {
    return "May";
  } else if (oy.getMonth() + 1 === 6) {
    return "Iyun";
  } else if (oy.getMonth() + 1 === 7) {
    return "Iyul";
  } else if (oy.getMonth() + 1 === 8) {
    return "Avgust";
  } else if (oy.getMonth() + 1 === 9) {
    return "Sentabr";
  } else if (oy.getMonth() + 1 === 10) {
    return "Oktabr";
  } else if (oy.getMonth() + 1 === 11) {
    return "Noyabir";
  } else if (oy.getMonth() + 1 === 12) {
    return "Decabr";
  }
};

const getOy1 = () => {
  let oy = new Date();
  if (oy.getMonth() + 1 === 1) {
    return "Yan";
  } else if (oy.getMonth() + 1 === 2) {
    return "Fev";
  } else if (oy.getMonth() + 1 === 3) {
    return "Mar";
  } else if (oy.getMonth() + 1 === 4) {
    return "Apr";
  } else if (oy.getMonth() + 1 === 5) {
    return "May";
  } else if (oy.getMonth() + 1 === 6) {
    return "Iyun";
  } else if (oy.getMonth() + 1 === 7) {
    return "Iyul";
  } else if (oy.getMonth() + 1 === 8) {
    return "Avg";
  } else if (oy.getMonth() + 1 === 9) {
    return "Sen";
  } else if (oy.getMonth() + 1 === 10) {
    return "Okt";
  } else if (oy.getMonth() + 1 === 11) {
    return "Noy";
  } else if (oy.getMonth() + 1 === 12) {
    return "Dec";
  }
};

const getdate = (suz) => {
  let date = new Date();
  if (suz === "LT") {
    return `${date.getHours()} : ${date.getMinutes()}`;
  } else if (suz === "LTS") {
    return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  } else if (suz === "L") {
    return ` ${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;
  } else if (suz === "l") {
    return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;
  } else if (suz === "LL") {
    return `${getOy()} / ${date.getDate()} / ${date.getFullYear()}`;
  } else if (suz === "ll") {
    return `${getOy1()} ${date.getDate()} / ${date.getFullYear()}`;
  } else if (suz === "LLL") {
    return `${getOy()} / ${date.getDate()} / ${date.getFullYear()} / ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  } else if (suz === "lll") {
    return `${getOy1()} / ${date.getDate()} / ${date.getFullYear()} / ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  } else if (suz === "LLLL") {
    return `${getHafta()} , ${getOy()} ${date.getDate()} ${date.getFullYear()} ${date.getHours()} : ${date.getMinutes()} AM`;
  } else if (suz === "llll") {
    return `${getHafta1()} , ${getOy()} ${date.getDate()} ${date.getFullYear()} ${date.getHours()} : ${date.getMinutes()} AM`;
  }
};
console.log(getdate("llll"));