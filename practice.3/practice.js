// berilgan sonlarni harifta yozib chiqarib bersin //



let num = 546

let m = parseInt(num/1000);
 num = num % 1000;

let y = parseInt(num/100);
 num = num % 100;

let t = parseInt(num /10);
num = num % 10;

let  g = (num / 1)
num = num % 1;

c = num;

s = "",k = "",l = "", b =""

switch(m){
  case 1 :
    s = "bir min"
    break;
    case 2 :
      s = "ikki min"
      break;
      case 3 :
         s = "uch min"
         break
         case 4 :
          s  = "turt min"
          break;
          case 5 :
            s = "behs min"
            break;
            case 6 :
              s = "olti min"
              break;
              case 7 :
                s = "yeti min"
                break;
                case 8 :
                  s ="sakiz min"
                  break;
                  case 9 :
                    s = "tuqiz min"
}
switch (y) {
  case 1:
    k = "bir yuz"
    break;
    case 2 :
      k = "ikki yuz"
      break;
      case 3 :
        k = "uch yuz"
        break;
        case 4 :
          k = "turt yuz"
          break;
          case  5 :
            k = "besh yuz"
            break;
            case 6 :
              k ="olti yuz"
              break;
              case 7 :
                k = "yeti yuz"
                break;
                case 8 :
                  k = "sakkiz yuz"
                  break;
                  case 9 :
                    k = "tuqiz yuz"
                    break;
}
switch (t){
  case 1 :
    l = "un"
    break;
    case 2 :
      l = "yigirma"
      break;
      case 3 :
        l = "uttiz"
        break;
        case 4 :
          l = "qirq"
          break;
          case 5 :
            l = "ellik"
            break;
            case 6 :
              l  = "olmush"
              break;
              case 7 :
                l = "yitmush"
                break;
                case 8 :
                  l = "saksan"
                  break;
                  case 9 :
                    l = "tuqson"
}
switch (g) {
  case 1:
    b = "bir"
    break;
    case 2:
      b = "ikki"
      break;
      case 3:
        b = "uch"
        break;
        case 4:
          b = "turt"
          break;
          case 5:
            b = "besh"
            break;
            case 6:
              b = "olti"
              break;
              case 7:
                b = "yeti"
                break;
                case 8:
                  b = "sakiz"
                  break;
                  case 9:
                    b = "tuqiz"
                    break;

}

console.log(s,k,l,b);