// import React from "react";
// import "./style.css"; // Đảm bảo rằng bạn tạo file CSS và import nó
// import { useLocation } from "react-router-dom";

// const Invoice = () => {
//   const location = useLocation();
//   const { state } = location;
//   const { user, orders } = state;

//   console.log("state: ", state);

//   // Tính toán các giá trị cần thiết
//   let sumPrice = 0;
//   let sumDiscount = 0;
//   let sumTotalCost = 0;

//   orders.forEach((order) => {
//     const discountedPrice = order.price - order.price * (order.discount / 100);
//     sumPrice += order.price * order.amount;
//     sumDiscount += order.price * order.amount - discountedPrice * order.amount;
//     sumTotalCost += discountedPrice * order.amount;
//   });

//   // Hiển thị thông tin trong bảng invoice-summary
//   return (
//     <div className="invoice-container">
//       <div className="invoice-header">
//         <h1>HÓA ĐƠN BÁN HÀNG</h1>
//         <p>
//           <strong>Cửa hàng:</strong> Đồng Hồ Thông Minh Hà Đông
//         </p>
//         <p>
//           <strong>Địa chỉ:</strong> Số 10 Trần Phú, Hà Đông, Hà Nội
//         </p>
//         <p>
//           <strong>Số điện thoại:</strong> 0347588988
//         </p>
//         <p>
//           <strong>Email:</strong> vinctuan02@gmail.com
//         </p>
//       </div>
//       <div className="invoice-details">
//         <p>
//           <strong>Khách hàng:</strong> {user?.name}
//         </p>
//         <p>
//           <strong>Địa chỉ giao hàng:</strong> {user?.address}
//         </p>
//         <p>
//           <strong>Số điện thoại:</strong> 0{user?.phone}
//         </p>
//       </div>
//       <table className="invoice-table">
//         <thead>
//           <tr>
//             <th>STT</th>
//             <th>Tên sản phẩm</th>
//             <th>Số lượng</th>
//             <th>Đơn giá (VND)</th>
//             <th>Giảm giá (%)</th>
//             <th>Thành tiền (VND)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders &&
//             orders.map((order, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{order.name}</td>
//                 <td>{order.amount}</td>
//                 <td>{order.price.toLocaleString("vi-VN")} VND</td>
//                 <td>{order.discount}</td>
//                 <td>
//                   {(
//                     order.price -
//                     order.price * (order.discount / 100)
//                   ).toLocaleString("vi-VN")}{" "}
//                   VND
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <div className="invoice-summary">
//         <p>
//           <strong>Tổng giá trị trước giảm giá:</strong>{" "}
//           {sumPrice.toLocaleString("vi-VN")} VND
//         </p>
//         <p>
//           <strong>Giảm giá:</strong> {sumDiscount.toLocaleString("vi-VN")} VND
//         </p>
//         <h2>
//           <strong>Tổng giá trị :</strong> {sumTotalCost.toLocaleString("vi-VN")}{" "}
//           VND
//         </h2>
//         {/* Nếu bạn muốn thêm phí giao hàng, bạn có thể tính toán và hiển thị ở đây */}
//         {/* <p className="total-amount"><strong>Tổng cộng:</strong> {sumTotalCost} VND</p> */}
//       </div>
//       <p className="invoice-footer">
//         Cảm ơn quý khách đã mua sắm tại cửa hàng chúng tôi!
//       </p>
//     </div>
//   );
// };

// export default Invoice;

// Sử dụng fontUrl trong mã của bạn

import React from "react";
import jsPDF from "jspdf";
import "./style.css";
import "jspdf-autotable";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useLocation, useNavigate } from "react-router-dom";

const Invoice = () => {
  const location = useLocation();
  const { state } = location;
  const { user, orders } = state;
  const navigate = useNavigate();

  const downloadInvoice = () => {
    if (!user || !orders) return;

    const sumPrice = orders.reduce((total, order) => total + order.price, 0);
    const sumDiscount = orders.reduce((total, order) => {
      const discountedPrice = order.price * (1 - order.discount / 100);
      return total + (order.price - discountedPrice);
    }, 0);
    const sumTotalCost = orders.reduce((total, order) => {
      const discountedPrice = order.price * (1 - order.discount / 100);
      return total + discountedPrice * order.amount;
    }, 0);

    const doc = new jsPDF();
    doc.setFont("times", "normal");

    doc.text("HÓA ĐƠN BÁN HÀNG", 105, 10, null, null, "center");

    // doc.setFont("times", "normal");

    doc.text("HÓA ĐƠN BÁN HÀNG", 105, 10, null, null, "center");
    doc.text("Cửa hàng: Đồng Hồ Thông Minh Hà Đông", 10, 20);
    doc.text("Địa chỉ: Số 10 Trần Phú, Hà Đông, Hà Nội", 10, 30);
    doc.text("Số điện thoại: 0347588988", 10, 40);
    doc.text("Email: vinctuan02@gmail.com", 10, 50);

    doc.text(`Khách hàng: ${user?.name}`, 10, 70);
    doc.text(`Địa chỉ giao hàng: ${user?.address}`, 10, 80);
    doc.text(`Số điện thoại: 0${user?.phone}`, 10, 90);

    doc.autoTable({
      startY: 100,
      head: [
        [
          "STT",
          "Tên sản phẩm",
          "Số lượng",
          "Đơn giá (VND)",
          "Giảm giá (%)",
          "Thành tiền (VND)",
        ],
      ],
      body: orders.map((order, index) => [
        index + 1,
        order.name,
        order.amount,
        order.price.toLocaleString("vi-VN"),
        order.discount,
        (
          order.price *
          (1 - order.discount / 100) *
          order.amount
        ).toLocaleString("vi-VN"),
      ]),
    });

    doc.text(
      `Tổng giá trị trước giảm giá: ${sumPrice.toLocaleString("vi-VN")} VND`,
      10,
      doc.autoTable.previous.finalY + 10
    );
    doc.text(
      `Giảm giá: ${sumDiscount.toLocaleString("vi-VN")} VND`,
      10,
      doc.autoTable.previous.finalY + 20
    );
    doc.text(
      `Tổng giá trị: ${sumTotalCost.toLocaleString("vi-VN")} VND`,
      10,
      doc.autoTable.previous.finalY + 30
    );

    doc.text(
      "Cảm ơn quý khách đã mua sắm tại cửa hàng chúng tôi!",
      10,
      doc.autoTable.previous.finalY + 50
    );

    doc.save("invoice.pdf");
  };

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h1>HÓA ĐƠN BÁN HÀNG</h1>
        <p>
          <strong>Cửa hàng:</strong> Đồng Hồ Thông Minh Hà Đông
        </p>
        <p>
          <strong>Địa chỉ:</strong> Số 10 Trần Phú, Hà Đông, Hà Nội
        </p>
        <p>
          <strong>Số điện thoại:</strong> 0347588988
        </p>
        <p>
          <strong>Email:</strong> vinctuan02@gmail.com
        </p>
      </div>
      <div className="invoice-details">
        <p>
          <strong>Khách hàng:</strong> {user?.name}
        </p>
        <p>
          <strong>Địa chỉ giao hàng:</strong> {user?.address}
        </p>
        <p>
          <strong>Số điện thoại:</strong> 0{user?.phone}
        </p>
      </div>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá (VND)</th>
            <th>Giảm giá (%)</th>
            <th>Thành tiền (VND)</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order.amount}</td>
                <td>{order.price.toLocaleString("vi-VN")} VND</td>
                <td>{order.discount}</td>
                <td>
                  {(
                    order.price *
                    (1 - order.discount / 100) *
                    order.amount
                  ).toLocaleString("vi-VN")}{" "}
                  VND
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="invoice-summary">
        <p>
          <strong>Tổng giá trị trước giảm giá:</strong>{" "}
          {orders
            .reduce((total, order) => total + order.price, 0)
            .toLocaleString("vi-VN")}{" "}
          VND
        </p>
        <p>
          <strong>Giảm giá:</strong>{" "}
          {orders
            .reduce((total, order) => {
              const discountedPrice = order.price * (1 - order.discount / 100);
              return total + (order.price - discountedPrice);
            }, 0)
            .toLocaleString("vi-VN")}{" "}
          VND
        </p>
        <h2>
          <strong>Tổng giá trị :</strong>{" "}
          {orders
            .reduce((total, order) => {
              const discountedPrice = order.price * (1 - order.discount / 100);
              return total + discountedPrice * order.amount;
            }, 0)
            .toLocaleString("vi-VN")}{" "}
          VND
        </h2>
      </div>

      <ButtonComponent
        onClick={downloadInvoice}
        size={40}
        styleButton={{
          height: "36px",
          width: "fit-content",
          borderRadius: "4px",
          padding: "6px 15px 10px",
        }}
        textbutton={" Tải xuống hóa đơn"}
        styleTextButton={{
          color: "rgb(26, 148, 255)",
          fontSize: "15px",
          fontWeight: "700",
          textTransform: "uppercase",
        }}
      ></ButtonComponent>
      <ButtonComponent
        onClick={() => navigate("/")}
        size={40}
        styleButton={{
          height: "36px",
          width: "fit-content",
          marginLeft: "30px",
          borderRadius: "4px",
          padding: "6px 15px 10px",
          background: "#ccc",
        }}
        textbutton={"Quay lại"}
        styleTextButton={{
          // color: "rgb(26, 148, 255)",
          fontSize: "15px",
          fontWeight: "700",
          // textTransform: "uppercase",
        }}
      ></ButtonComponent>
      <p className="invoice-footer">
        Cảm ơn quý khách đã mua sắm tại cửa hàng chúng tôi!
      </p>
    </div>
  );
};

export default Invoice;
// import React from "react";
// import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
// import "./style.css";
// import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
// import { useLocation, useNavigate } from "react-router-dom";

// const Invoice = () => {
//   const location = useLocation();
//   const { state } = location;
//   const { user, orders } = state;
//   const navigate = useNavigate();

//   const downloadInvoice = async () => {
//     if (!user || !orders) return;

//     const sumPrice = orders.reduce((total, order) => total + order.price, 0);
//     const sumDiscount = orders.reduce((total, order) => {
//       const discountedPrice = order.price * (1 - order.discount / 100);
//       return total + (order.price - discountedPrice);
//     }, 0);
//     const sumTotalCost = orders.reduce((total, order) => {
//       const discountedPrice = order.price * (1 - order.discount / 100);
//       return total + discountedPrice * order.amount;
//     }, 0);

//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 850]);
//     const { width, height } = page.getSize();
//     const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

//     const fontSize = 12;
//     const lineHeight = fontSize * 1.2;
//     let yPosition = height - lineHeight;

//     page.drawText("HÓA ĐƠN BÁN HÀNG", {
//       x: width / 2,
//       y: yPosition,
//       size: fontSize,
//       font: timesRomanFont,
//       color: rgb(0, 0, 0),
//       align: "center",
//     });

//     yPosition -= lineHeight * 2;
//     page.drawText("Cửa hàng: Đồng Hồ Thông Minh Hà Đông", {
//       x: 50,
//       y: yPosition,
//       size: fontSize,
//       font: timesRomanFont,
//       color: rgb(0, 0, 0),
//     });

//     yPosition -= lineHeight;
//     page.drawText("Địa chỉ: Số 10 Trần Phú, Hà Đông, Hà Nội", {
//       x: 50,
//       y: yPosition,
//       size: fontSize,
//       font: timesRomanFont,
//       color: rgb(0, 0, 0),
//     });

//     yPosition -= lineHeight;
//     page.drawText("Số điện thoại: 0347588988", {
//       x: 50,
//       y: yPosition,
//       size: fontSize,
//       font: timesRomanFont,
//       color: rgb(0, 0, 0),
//     });

//     yPosition -= lineHeight;
//     page.drawText("Email: vinctuan02@gmail.com", {
//       x: 50,
//       y: yPosition,
//       size: fontSize,
//       font: timesRomanFont,
//       color: rgb(0, 0, 0),
//     });

//     yPosition -= lineHeight * 2;
//     page.drawText(`Khách hàng: ${user?.name}`, {
//       x: 50,
//       y: yPosition,
//       size: fontSize,
//       font: timesRomanFont,
//       color: rgb(0, 0, 0),
//     });

//     yPosition -= lineHeight;
//     page.drawText(`Địa chỉ giao hàng: ${user?.address}`, {
//       x: 50,
//       y: yPosition,
//       size: fontSize,
//       font: timesRomanFont,
//       color: rgb(0, 0, 0),
//     });

//     yPosition -= lineHeight;
//     page.drawText(`Số điện thoại: 0${user?.phone}`, {
//       x: 50,
//       y: yPosition,
//       size: fontSize,
//       font: timesRomanFont,
//       color: rgb(0, 0, 0),
//     });

//     yPosition -= lineHeight * 2;
//     page.drawText(
//       "STT    Tên sản phẩm            Số lượng    Đơn giá (VND)    Giảm giá (%)    Thành tiền (VND)",
//       {
//         x: 50,
//         y: yPosition,
//         size: fontSize,
//         font: timesRomanFont,
//         color: rgb(0, 0, 0),
//       }
//     );

//     orders.forEach((order, index) => {
//       yPosition -= lineHeight;
//       page.drawText(
//         `${index + 1}       ${order.name}       ${
//           order.amount
//         }       ${order.price.toLocaleString("vi-VN")}       ${
//           order.discount
//         }       ${(
//           order.price *
//           (1 - order.discount / 100) *
//           order.amount
//         ).toLocaleString("vi-VN")}`,
//         {
//           x: 50,
//           y: yPosition,
//           size: fontSize,
//           font: timesRomanFont,
//           color: rgb(0, 0, 0),
//         }
//       );
//     });

//     yPosition -= lineHeight * 2;
//     page.drawText(
//       `Tổng giá trị trước giảm giá: ${sumPrice.toLocaleString("vi-VN")} VND`,
//       {
//         x: 50,
//         y: yPosition,
//         size: fontSize,
//         font: timesRomanFont,
//         color: rgb(0, 0, 0),
//       }
//     );

//     yPosition -= lineHeight;
//     page.drawText(`Giảm giá: ${sumDiscount.toLocaleString("vi-VN")} VND`, {
//       x: 50,
//       y: yPosition,
//       size: fontSize,
//       font: timesRomanFont,
//       color: rgb(0, 0, 0),
//     });

//     yPosition -= lineHeight;
//     page.drawText(`Tổng giá trị: ${sumTotalCost.toLocaleString("vi-VN")} VND`, {
//       x: 50,
//       y: yPosition,
//       size: fontSize,
//       font: timesRomanFont,
//       color: rgb(0, 0, 0),
//     });

//     yPosition -= lineHeight * 2;
//     page.drawText("Cảm ơn quý khách đã mua sắm tại cửa hàng chúng tôi!", {
//       x: 50,
//       y: yPosition,
//       size: fontSize,
//       font: timesRomanFont,
//       color: rgb(0, 0, 0),
//     });

//     const pdfBytes = await pdfDoc.save();

//     const blob = new Blob([pdfBytes], { type: "application/pdf" });
//     const link = document.createElement("a");
//     link.href = window.URL.createObjectURL(blob);
//     link.download = "invoice.pdf";
//     link.click();
//   };

//   return (
//     <div className="invoice-container">
//       <div className="invoice-header">
//         <h1>HÓA ĐƠN BÁN HÀNG</h1>
//         <p>
//           <strong>Cửa hàng:</strong> Đồng Hồ Thông Minh Hà Đông
//         </p>
//         <p>
//           <strong>Địa chỉ:</strong> Số 10 Trần Phú, Hà Đông, Hà Nội
//         </p>
//         <p>
//           <strong>Số điện thoại:</strong> 0347588988
//         </p>
//         <p>
//           <strong>Email:</strong> vinctuan02@gmail.com
//         </p>
//       </div>
//       <div className="invoice-details">
//         <p>
//           <strong>Khách hàng:</strong> {user?.name}
//         </p>
//         <p>
//           <strong>Địa chỉ giao hàng:</strong> {user?.address}
//         </p>
//         <p>
//           <strong>Số điện thoại:</strong> 0{user?.phone}
//         </p>
//       </div>
//       <table className="invoice-table">
//         <thead>
//           <tr>
//             <th>STT</th>
//             <th>Tên sản phẩm</th>
//             <th>Số lượng</th>
//             <th>Đơn giá (VND)</th>
//             <th>Giảm giá (%)</th>
//             <th>Thành tiền (VND)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders &&
//             orders.map((order, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{order.name}</td>
//                 <td>{order.amount}</td>
//                 <td>{order.price.toLocaleString("vi-VN")} VND</td>
//                 <td>{order.discount}</td>
//                 <td>
//                   {(
//                     order.price *
//                     (1 - order.discount / 100) *
//                     order.amount
//                   ).toLocaleString("vi-VN")}{" "}
//                   VND
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//       <div className="invoice-summary">
//         <p>
//           <strong>Tổng giá trị trước giảm giá:</strong>{" "}
//           {orders
//             .reduce((total, order) => total + order.price, 0)
//             .toLocaleString("vi-VN")}{" "}
//           VND
//         </p>
//         <p>
//           <strong>Giảm giá:</strong>{" "}
//           {orders
//             .reduce((total, order) => {
//               const discountedPrice = order.price * (1 - order.discount / 100);
//               return total + (order.price - discountedPrice);
//             }, 0)
//             .toLocaleString("vi-VN")}{" "}
//           VND
//         </p>
//         <h2>
//           <strong>Tổng giá trị :</strong>{" "}
//           {orders
//             .reduce((total, order) => {
//               const discountedPrice = order.price * (1 - order.discount / 100);
//               return total + discountedPrice * order.amount;
//             }, 0)
//             .toLocaleString("vi-VN")}{" "}
//           VND
//         </h2>
//       </div>

//       <ButtonComponent
//         onClick={downloadInvoice}
//         size={40}
//         styleButton={{
//           height: "36px",
//           width: "fit-content",
//           borderRadius: "4px",
//           padding: "6px 15px 10px",
//         }}
//         textbutton={"Tải xuống hóa đơn"}
//         styleTextButton={{
//           color: "rgb(26, 148, 255)",
//           fontSize: "15px",
//           fontWeight: "700",
//           textTransform: "uppercase",
//         }}
//       />
//       <ButtonComponent
//         onClick={() => navigate("/")}
//         size={40}
//         styleButton={{
//           height: "36px",
//           width: "fit-content",
//           marginLeft: "30px",
//           borderRadius: "4px",
//           padding: "6px 15px 10px",
//           background: "#ccc",
//         }}
//         textbutton={"Quay lại"}
//         styleTextButton={{
//           fontSize: "15px",
//           fontWeight: "700",
//         }}
//       />
//       <p className="invoice-footer">
//         Cảm ơn quý khách đã mua sắm tại cửa hàng chúng tôi!
//       </p>
//     </div>
//   );
// };

// export default Invoice;
