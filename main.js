/** BÀI 1: XUẤT 3 SỐ NHẬP VÀO THEO THỨ TỰ TĂNG DẦN
ĐẦU VÀO
 - Nhập 3 số vào input;
XỬ LÝ
 - Cách 1:
    + So sánh Nếu num1 >= num2 và num1 >= num3
        * Nếu num2 >= num 3 thì num3 , num2 , num1;
        * Esle num2,num3,num1;
    + So sánh Nếu num2 >= num1 và num2 >= num3
        * Nếu num1 >= num3 thì num3 , num1 , num2;
        * Esle num1,num3,num2;
    + So sánh Nếu num3 >= num1 và num3 >= num2
        * Nếu num1 >= num2 thì num2 , num1 , num3;
        * Esle num1,num2,num3;
        
 - Cách 2:
    + So sánh Nếu num1 >= num2 && num1 >= num3 && num2 >= num3
        > num3, num2, num1;
    + So sánh Nếu num1 >= num2 && num1 >= num3 && num2 <= num3
        > num2, num3, num1;
    + So sánh Nếu num2 >= num1 && num2 >= num3 && num1 >= num3
        > num3, num1, num2;
    + So sánh Nếu num2 >= num1 && num2 >= num3 && num1 <= num3
        > num1, num3, num2;
    + So sánh Nếu num3 >= num1 && num3 >= num2 && num1 >= num2
        > num2, num1, num3;
    + Esle num1, num2, num3;

ĐẦU RA
 - Xuất dãy số đã sắp xếp.
 */
document.getElementById("btnSapXep").onclick = function () {
    // console.log(123);
    // ĐẦU VÀO
    var num1 = document.getElementById("num1").value * 1;
    var num2 = document.getElementById("num2").value * 1;
    var num3 = document.getElementById("num3").value * 1;
    var ssNum;
    // console.log(num1, num2, num3);
    // XỬ LÝ
    // CÁCH 1:
    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            ssNum = num3 + "," + num2 + "," + num1;
        } else {
            ssNum = num2 + "," + num3 + "," + num1;
        }
    }
    if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            ssNum = num3 + "," + num1 + "," + num2;
        } else {
            ssNum = num1 + "," + num3 + "," + num2;
        }
    }
    if (num3 >= num1 && num3 >= num2) {
        // if (num1 >= num2) {
        // ssNum = num2 + "," + num1 + "," + num3;
        // } else {
        //     ssNum = num1 + "," + num2 + "," + num3;
        // }
        // Toán tử 3 ngôi
        ssNum = num1 >= num2 ? num2 + "," + num1 + "," + num3 : num1 + "," + num2 + "," + num3;
    }

    // ĐẦU RA
    var kqSS = "";
    kqSS += "<p> 👉" + ssNum + "</p >"
    document.getElementById("infoSapXep").innerHTML = kqSS;
}

// CÁCH 2: (đầu vào, đầu ra giống cách 1)
document.getElementById("btnSapXep2").onclick = function () {
    // console.log(123);
    // ĐẦU VÀO
    var num4 = document.getElementById("num4").value * 1;
    var num5 = document.getElementById("num5").value * 1;
    var num6 = document.getElementById("num6").value * 1;
    var ssNum;
    // CÁCH 2:
    if (num4 >= num5 && num4 >= num6 && num5 >= num6) {
        ssNum = num6 + "," + num5 + "," + num4;
    } else if (num4 >= num5 && num4 >= num6 && num5 <= num6) {
        ssNum = num5 + "," + num6 + "," + num4;
    } else if (num5 >= num4 && num5 >= num6 && num4 >= num6) {
        ssNum = num6 + "," + num4 + "," + num5;
    } else if (num5 >= num4 && num5 >= num6 && num4 <= num6) {
        ssNum = num4 + "," + num6 + "," + num5;
    } else if (num6 >= num4 && num6 >= num5 && num4 >= num5) {
        ssNum = num5 + "," + num4 + "," + num6;
    } else {
        ssNum = num4 + "," + num5 + "," + num6;
    }

    // ĐẦU RA
    var kqSS = "";
    kqSS += "<p> 👉" + ssNum + "</p >"
    document.getElementById("infoSapXep").innerHTML = kqSS;
}

/** BÀI 2: CHÀO HỎI THÀNH VIÊN GIA ĐÌNH
 * ĐẦU VÀO: Lấy dữ liệu từ người dùng chọn trong thẻ option
 * XỬ LÝ: 
 *      + Nếu là Bố thì Xin chào Bố;
 *      + Nếu là Mẹ thì Xin chào Mẹ;
 *      + Nếu là Anh Trai thì Xin chào Anh Trai;
 *      + Nếu là Em Gái thì Xin chào Em Gái;
 * ĐẦU RA: Xuất Kết quả
 */

document.getElementById("btnHello").onclick = function () {
    // console.log(3333);
    // ĐẦU VÀO
    var hel = document.getElementById("hel").value;
    var helo = "👉";
    // XỬ LÝ
    switch (hel) {
        case "B":
            helo += "Xin chào Bố!";
            break;

        case "M":
            helo += "Xin chào Mẹ!";
            break;

        case "A":
            helo += "Xin chào Anh Trai!";
            break;

        case "E":
            helo += "Xin chào Em Gái!";
            break;

        default:
            helo += "Xin chào người lạ ơi!" + hel;
            break;
    }
    // ĐẦU RA
    document.getElementById("Hello").innerHTML = helo;
}

/** BÀI 3: ĐẾM SỐ CHẲN LẼ
 *ĐẦU VÀO: Lấy 3 số từ người dùng
* XỬ LÝ:
    - Nếu numb1 % 2 = 0 thì countNub += 1;
    - Nếu numb2 % 2 = 0 thì countNub += 1;
    - Nếu numb3 % 2 = 0 thì countNub += 1;
* ĐẦU RA: Xuất kết quả
    - slSoChan = countNub;
    - slSoLe = 3 - countNub;
 *
 */

document.getElementById("btnCount").onclick = function () {
    // console.log("0005");
    // ĐẦU VÀO:
    var numb1 = document.getElementById("numb1").value * 1;
    var numb2 = document.getElementById("numb2").value * 1;
    var numb3 = document.getElementById("numb3").value * 1;
    var countNub = 0;

    // XỬ LÝ:
    if (numb1 % 2 == 0) {
        countNub += 1;
    }
    if (numb2 % 2 == 0) {
        countNub++;
    }
    if (numb3 % 2 == 0) {
        countNub += 1;
    }

    // ĐẦU RA:
    var resCount = "";
    var slSoChan = countNub;
    var slSoLe = 3 - countNub;
    resCount += "<p>👉 Có " + slSoChan + " số chẳn," + slSoLe + " số lẻ</p>";
    document.getElementById("infoCount").innerHTML = resCount;
}

/** BÀI 4: ĐOÁN HÌNH TAM GIÁC
 * ĐẦU VÀO: Nhập 3 cạnh;
 * XỬ LÝ:
 *      - Kiểm tra 3 số nhập vào tạo thành 1 tam giác.
 *         + If (canh1 + canh2 > canh3 && canh1 + canh3 > canh2 &&canh3 + canh2 > canh1)
 *              * If canh1 = canh2 = canh3, tam giác đều;
 *              * If canh1 = canh2 || canh1 = canh3 || canh2 = canh3, tam giác cân
 *              * If canh1 *canh1 = (canh2*canh2 + canh3*canh3) ||canh2 *canh2 = (canh1*canh1 + canh3*canh3) || canh3 *canh3 = (canh2*canh2 + canh1*canh1), tam giác vuông
 *              * Else, tam giác khác.
 *         + Else Không phải là tam giác;
 *
 * ĐẦU RA: In kết quả
 */
document.getElementById("btnTriA").onclick = function () {
    // ĐẦU VÀO:
    var canh1 = document.getElementById("canh1").value * 1;
    var canh2 = document.getElementById("canh2").value * 1;
    var canh3 = document.getElementById("canh3").value * 1;

    // XỬ LÝ:
    var pTriA = "👉";
    if (canh1 + canh2 > canh3 && canh1 + canh3 > canh2 && canh3 + canh2 > canh1) {
        if (canh1 == canh2 && canh1 == canh3) {
            pTriA += "Hình tam giác đều";
        } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
            pTriA += "Hình tam giác cân";
        } else if (canh1 * canh1 == ((canh2 * canh2) + (canh3 * canh3)) || canh2 * canh2 == ((canh1 * canh1) + (canh3 * canh3)) || canh3 * canh3 == ((canh2 * canh2) + (canh1 * canh1))) {
            pTriA += "Hình tam giác vuông";
        } else {
            pTriA += "Một loại tam giác khác";
        }
    } else {
        pTriA += "Các độ dài trên KHÔNG tạo ra Hình Tam Giác"
    }
    // ĐẦU RA
    document.getElementById("infoTriA").innerHTML = pTriA;

}